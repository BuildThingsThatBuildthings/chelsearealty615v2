import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

export default function Hendersonville() {
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
            <h1 className="text-4xl font-bold mb-4">Hendersonville, TN Market Report</h1>
            <p className="text-xl text-muted-foreground mb-2">
              A comprehensive analysis for families seeking their ideal hometown in Middle Tennessee
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
              Hendersonville emerges as a premier choice for families in Middle Tennessee, 
              offering an exceptional blend of educational excellence, safety, and quality of life. 
              With highly-rated schools, low crime rates, and abundant recreational opportunities, 
              the city provides an ideal environment for families seeking a thriving community with 
              a strong economic foundation.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Safety Rating</h3>
                <div className="text-3xl font-bold text-primary mb-2">Top 10%</div>
                <p className="text-sm text-muted-foreground">in Tennessee for community safety</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Education Quality</h3>
                <div className="text-3xl font-bold text-primary mb-2">95.4%</div>
                <p className="text-sm text-muted-foreground">high school graduation rate</p>
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
                <div className="text-3xl font-bold text-primary mb-2">2.2%</div>
                <p className="text-sm text-muted-foreground">unemployment rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Educational Excellence</h2>
            <p className="mb-4">
              Hendersonville's educational system stands out as one of its strongest assets, 
              providing students with exceptional learning opportunities and resources.
            </p>
            <ul className="space-y-2">
              <li>Outstanding graduation rate of 95.4% in Sumner County Schools</li>
              <li>Personalized learning environment with a 14:1 student-teacher ratio</li>
              <li>Home to Merrol Hyde Magnet School, consistently ranked among Tennessee's elite educational institutions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Community Safety</h2>
            <p className="mb-4">
              Safety statistics demonstrate Hendersonville's commitment to maintaining a secure 
              environment for residents.
            </p>
            <ul className="space-y-2">
              <li>Overall crime rate of 1,288 per 100,000 people, significantly below state and national averages</li>
              <li>Violent crime rate of 0.89 per 1,000 residents (compared to Tennessee's 5.95)</li>
              <li>Proactive community policing and neighborhood watch programs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Lifestyle & Recreation</h2>
            <p className="mb-4">
              Residents enjoy a rich variety of outdoor activities and community events 
              throughout the year.
            </p>
            <ul className="space-y-2">
              <li>Multiple recreational facilities including Drakes Creek Park and Sanders Ferry Park</li>
              <li>Year-round activities at Old Hickory Lake: boating, fishing, and swimming</li>
              <li>Family-oriented community events including the Tennessee Apple Festival and Christmas Parade</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Housing Market Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Median Home Price</h3>
                  <div className="text-2xl font-bold mb-2">$485,000</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Average 2-Bed Rental</h3>
                  <div className="text-2xl font-bold mb-2">$1,635/month</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Economic Vitality</h2>
            <p className="mb-4">
              Hendersonville maintains a robust economy with diverse employment opportunities 
              and a cost of living 9% below the national average. Key industries include 
              healthcare, retail, and education, providing stable employment prospects for 
              residents.
            </p>
          </section>

          {/* Full Report Link */}
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="https://docs.google.com/document/d/1jbt-X5rHmukYq9Bbz6k7bhPQXmtAA1C-0nxa_CtLcfw/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                View Full Report on Google Docs →
              </a>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
