import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { createInstance } from '@loomhq/record-sdk';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const LOOM_PUBLIC_APP_ID = "43878139-ff97-4b73-a533-9457501c7476";

export function OnboardingForm() {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showRecorder, setShowRecorder] = useState(false);
  
  const priorities = [
    "Schools",
    "Crime",
    "Jobs",
    "Recreation",
    "Housing Market"
  ];

  const handlePriorityChange = (priority: string) => {
    setSelectedPriorities(prev => {
      if (prev.includes(priority)) {
        return prev.filter(p => p !== priority);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, priority];
    });
  };

  useEffect(() => {
    async function initLoom() {
      const { supported, error: sdkError } = await createInstance({
        publicAppId: LOOM_PUBLIC_APP_ID,
        insertButtonConfiguration: {
          hooks: {
            onStart: () => setIsRecording(true),
            onStop: () => setIsRecording(false),
            onComplete: (video) => {
              setVideoUrl(video.sharedUrl);
              setShowRecorder(false);
            },
            onError: (error) => {
              setError(error.message);
              setIsRecording(false);
            }
          }
        }
      });

      if (!supported) {
        setError("Recording not supported in this browser");
      }
      
      if (sdkError) {
        setError(sdkError.message);
      }
      
      setIsLoading(false);
    }

    initLoom();
  }, []);

  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" required />
      </div>
      
      <div>
        <Label htmlFor="town">Town/Area of Interest</Label>
        <Input id="town" required />
      </div>
      
      <div>
        <Label className="mb-2 block">Top 3 Things You Want to Know About Where You Live? *</Label>
        <div className="space-y-2">
          {priorities.map((priority) => (
            <label
              key={priority}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedPriorities.includes(priority)}
                onChange={() => handlePriorityChange(priority)}
                disabled={selectedPriorities.length >= 3 && !selectedPriorities.includes(priority)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm">{priority}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="budget">Budget</Label>
        <Input id="budget" placeholder="Example: $400,000 - $500,000" required />
      </div>
      
      <div>
        <Label htmlFor="additional">Additional Information</Label>
        <Textarea 
          id="additional" 
          placeholder="Any other details you'd like us to know?"
        />
      </div>

      <div className="space-y-4">
        <Label>Video Introduction (Optional)</Label>
        <div>
          <Button
            type="button"
            onClick={() => setShowRecorder(true)}
            variant="outline"
            className="w-full"
          >
            {videoUrl ? "Change Video Message" : "Record Video Message"}
          </Button>
          
          {videoUrl && (
            <div className="mt-4">
              <p className="text-sm text-green-600 mb-2">✓ Video recorded successfully</p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                View your recording
              </a>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showRecorder} onOpenChange={setShowRecorder}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Record Your Video Message</DialogTitle>
            <DialogDescription>
              Share a brief video message about what you're looking for in your next home.
            </DialogDescription>
          </DialogHeader>
          <div id="loom-container" className="min-h-[400px] flex items-center justify-center">
            {isLoading ? (
              <p>Loading recorder...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div id="loom-record-sdk-button" />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Button type="submit" className="w-full">Submit</Button>
    </form>
  );
}
