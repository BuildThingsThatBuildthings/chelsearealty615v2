import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

export default function WhiteHouse() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/research-library">← Back to Library</Link>
          </Button>
        </div>

        <article className="prose prose-lg max-w-none">
          {/* Report Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Discover White House, TN: Your Family's Ideal Hometown</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Explore excellent schools, safe neighborhoods, and family-friendly activities in this growing Tennessee town
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Published February 2024</span>
              <span>•</span>
              <span>Location: Sumner/Robertson Counties, TN</span>
              <span>•</span>
              <span>Target: Family Homebuyers</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
            <p>
              White House offers a unique advantage by straddling Sumner and Robertson Counties, 
              providing families with access to two excellent school districts. With significantly 
              lower crime rates than state and national averages, abundant recreational opportunities, 
              and a cost of living 24% below the US average, White House presents an attractive 
              option for families seeking a safe, affordable community with strong educational options.
            </p>
          </div>

          {/* Audio Player */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Listen to a podcast version of the report</h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <audio controls className="w-full mb-2">
                <source src="/src/pages/audio_reports/White House, TN_ A Parent's Relocation Guide.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-muted-foreground text-center">Feature currently in beta</p>
            </div>
          </div>

          {/* Rest of the content remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">School Ratings</h3>
                <div className="text-3xl font-bold text-primary mb-2">A to B+</div>
                <p className="text-sm text-muted-foreground">Range of Niche.com school ratings</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Crime Rate</h3>
                <div className="text-3xl font-bold text-primary mb-2">59.9% Lower</div>
                <p className="text-sm text-muted-foreground">than state average</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Cost of Living</h3>
                <div className="text-3xl font-bold text-primary mb-2">24% Lower</div>
                <p className="text-sm text-muted-foreground">than national average</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Median Home Price</h3>
                <div className="text-3xl font-bold text-primary mb-2">$371,353</div>
                <p className="text-sm text-muted-foreground">below national average</p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Educational Excellence</h2>
            <p className="mb-4">
              White House's unique position on the border of Sumner and Robertson Counties provides 
              families with access to multiple high-quality educational options.
            </p>
            <ul className="space-y-2">
              <li>Multiple elementary schools including Robert F. Woodall (K-2), White House Heritage (3-6), and Harold B. Williams (K-5)</li>
              <li>Two high school options: White House High (Niche Rating B) and White House Heritage High (Niche Rating B+)</li>
              <li>Access to Merrol Hyde Magnet School (K-12, Niche Rating A)</li>
              <li>Strong student-teacher ratios ranging from 14:1 to 19:1</li>
              <li>Comprehensive extracurricular activities including Beta Club, National Honor Society, band, chorus, FFA, and Robotics Club</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Community Safety</h2>
            <p className="mb-4">
              White House maintains exceptionally low crime rates and strong community safety initiatives.
            </p>
            <ul className="space-y-2">
              <li>Overall crime rate 59.9% lower than state average and 46.0% lower than national average</li>
              <li>Violent crime 70.1% lower than state average and 48.2% lower than national average</li>
              <li>Property crime 57.2% lower than state average and 45.5% lower than national average</li>
              <li>Active community policing through Neighborhood Watch Programs and safety education</li>
              <li>High-quality water service meeting all federal and state standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Family Activities & Recreation</h2>
            <p className="mb-4">
              The community offers diverse recreational opportunities for families throughout the year.
            </p>
            <ul className="space-y-2">
              <li>White House Municipal Park featuring a greenway, playground, and Rover Dog Park</li>
              <li>J. Travis Park with soccer fields and baseball diamonds</li>
              <li>Seasonal attractions including White House Pumpkin Patch with hayrides and corn maze</li>
              <li>Red River access for kayaking and canoeing</li>
              <li>Nearby MLK Jr. Park splash pad in Springfield</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Economy & Housing</h2>
            <p className="mb-4">
              White House combines affordable living with strong economic opportunities, benefiting from 
              its proximity to the Nashville metropolitan area. The cost of living index of 76 makes it 
              24% more affordable than the US average. The housing market offers diverse options, from 
              single-family homes to townhouses, with new developments like Honey Run Springs and The Parks 
              adding to the available inventory. Major industries include Healthcare and Social Assistance, 
              Retail Trade, and Accommodation and Food Services, providing varied employment opportunities 
              for residents.
            </p>
          </section>

          {/* Full Report Link */}
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="https://docs.google.com/document/d/18QmebaN0LAEfOWaGHgJasSmxgWjHm9nuHoxaeO_gGfg/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                View Full Report on Google Docs →
              </a>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
