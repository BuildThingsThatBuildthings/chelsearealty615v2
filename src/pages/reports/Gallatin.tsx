import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GallatinReport() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Discover Gallatin, TN: A Welcoming Hometown for Your Family</h1>
        <p className="text-xl text-muted-foreground">
          Explore excellent schools, safe neighborhoods, and family-friendly activities in this charming Tennessee city.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Education</h2>
                <Badge>A- Rating</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sumner County School District manages Gallatin's public schools, serving students from pre-K to 12th grade with a strong commitment to quality education.</li>
                <li>Highly regarded in Tennessee with an A- grade from Niche.com.</li>
                <li>Average teacher salary: $54,305 with a student-teacher ratio of 15:1.</li>
                <li>Private school options include Sumner Academy and St. John Vianney Catholic School (both pre-K through 8th grade).</li>
                <li>Various after-school programs available to keep children engaged beyond traditional school hours.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Safety & Crime</h2>
                <Badge variant="secondary">81% Feel Safe</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Crime rate of 1,292 per 100,000 people, significantly lower than state and national averages.</li>
                <li>Violent crime rate of 307 per 100,000 people, below state and national averages.</li>
                <li>81% of residents feel safe: 29% feel "very safe" and 52% feel "pretty safe".</li>
                <li>Dedicated police department committed to maintaining high quality of life.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Family Activities & Recreation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multiple parks and recreational facilities for outdoor activities.</li>
                <li>Municipal Park offers playground, walking trails, and skate park.</li>
                <li>Triple Creek Park features playground, dog park, and all-inclusive Miracle Park for children of all abilities.</li>
                <li>Regular community events including the Main Street Festival with over 200 vendors, live music, and children's area.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Economy & Cost of Living</h2>
                <Badge variant="secondary">9% Below National Average</Badge>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strong and diverse economy with 3.20% unemployment rate (December 2024).</li>
                <li>Projected job growth of 54.8% over the next ten years.</li>
                <li>Overall cost of living is 9% lower than the national average.</li>
                <li>Housing costs significantly lower than state and national averages.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
