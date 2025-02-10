import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

export default function Gallatin() {
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
            <h1 className="text-4xl font-bold mb-4">Discover Gallatin, TN: A Welcoming Hometown for Your Family</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Explore excellent schools, safe neighborhoods, and family-friendly activities in this charming Tennessee city
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Published February 2024</span>
              <span>•</span>
              <span>Location: Sumner County, TN</span>
              <span>•</span>
              <span>Target: Family Homebuyers</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
            <p>
              Gallatin stands out as an exceptional choice for families in Middle Tennessee, 
              combining educational excellence, community safety, and abundant recreational opportunities. 
              With its strong school system, low crime rates, and vibrant community life, 
              Gallatin offers an ideal environment for families seeking a high quality of life 
              with affordable living costs.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">School District Rating</h3>
                <div className="text-3xl font-bold text-primary mb-2">A-</div>
                <p className="text-sm text-muted-foreground">Niche.com rating for Sumner County Schools</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Community Safety</h3>
                <div className="text-3xl font-bold text-primary mb-2">81%</div>
                <p className="text-sm text-muted-foreground">of residents feel safe in Gallatin</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Cost of Living</h3>
                <div className="text-3xl font-bold text-primary mb-2">9% Lower</div>
                <p className="text-sm text-muted-foreground">than national average</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Employment</h3>
                <div className="text-3xl font-bold text-primary mb-2">3.20%</div>
                <p className="text-sm text-muted-foreground">unemployment rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Educational Excellence</h2>
            <p className="mb-4">
              The Sumner County School District provides comprehensive education from pre-K through 12th grade,
              maintaining high standards and strong student outcomes.
            </p>
            <ul className="space-y-2">
              <li>Highly regarded district with an A- rating from Niche.com</li>
              <li>Excellent student-teacher ratio of 15:1</li>
              <li>Average teacher salary of $54,305, attracting quality educators</li>
              <li>Private school options including Sumner Academy and St. John Vianney Catholic School</li>
              <li>Diverse after-school programs for extended learning opportunities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Community Safety</h2>
            <p className="mb-4">
              Gallatin maintains a strong commitment to public safety, with crime rates significantly 
              below state and national averages.
            </p>
            <ul className="space-y-2">
              <li>Overall crime rate of 1,292 per 100,000 people</li>
              <li>Violent crime rate of 307 per 100,000 people</li>
              <li>81% of residents report feeling safe: 29% "very safe" and 52% "pretty safe"</li>
              <li>Dedicated police department focused on maintaining high quality of life</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Family Activities & Recreation</h2>
            <p className="mb-4">
              Gallatin offers numerous recreational facilities and community events that cater to 
              families of all ages and interests.
            </p>
            <ul className="space-y-2">
              <li>Municipal Park with playground, walking trails, and skate park</li>
              <li>Triple Creek Park featuring playground, dog park, and all-inclusive Miracle Park</li>
              <li>Year-round community events and festivals</li>
              <li>Main Street Festival with over 200 vendors, live music, and children's area</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Economy & Cost of Living</h2>
            <p className="mb-4">
              Gallatin's economy shows strong potential for continued growth, with a cost of living 
              that remains accessible for families. The city's projected job growth of 54.8% over 
              the next ten years indicates a robust economic future, while the current unemployment 
              rate of 3.20% demonstrates stability. Housing costs remain significantly lower than 
              both state and national averages, making homeownership more attainable for families.
            </p>
          </section>

          {/* Full Report Link */}
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="https://docs.google.com/document/d/10_X_gYjm3kag5vBjioENT0mrLpoPsI-1KQfzHlZWkDo/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                View Full Report on Google Docs →
              </a>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
