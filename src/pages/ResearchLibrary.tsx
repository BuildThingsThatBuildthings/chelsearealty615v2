import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

const reports = [
  {
    id: "gallatin",
    title: "Discover Gallatin, TN: A Welcoming Hometown for Your Family",
    description: "Explore excellent schools, safe neighborhoods, and family-friendly activities in this charming Tennessee city.",
    date: "February 2024"
  },
  {
    id: "hendersonville",
    title: "Discover Hendersonville, TN: Your Family's Ideal Hometown",
    description: "Comprehensive guide to Hendersonville's schools, safety, recreation, economy, and housing market for families considering relocation.",
    date: "February 2024"
  },
  {
    id: "market-trends",
    title: "North Nashville Market Trends 2024",
    description: "Comprehensive analysis of real estate market trends, pricing data, and growth projections for North Nashville neighborhoods.",
    date: "February 2024"
  },
  {
    id: "community-development",
    title: "Community Development Impact Report",
    description: "Detailed overview of ongoing and planned community development projects and their impact on North Nashville residents.",
    date: "January 2024"
  },
  {
    id: "neighborhood-guide",
    title: "North Nashville Neighborhood Guide",
    description: "In-depth exploration of North Nashville's diverse neighborhoods, local amenities, schools, and community features.",
    date: "December 2023"
  }
]

export default function ResearchLibrary() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Library</h1>
        <p className="text-xl text-muted-foreground">
          Gain valuable insights about living in North Nashville through our comprehensive research reports
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>{report.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{report.description}</p>
              <Button asChild>
                <Link to={`/research-library/${report.id}`}>Read Report</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
