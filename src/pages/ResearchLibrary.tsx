import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

const reports = [
  {
    id: "white-house",
    title: "Discover White House, TN: Your Family's Ideal Hometown",
    description: "Explore excellent schools, safe neighborhoods, and family-friendly activities in this growing Tennessee town.",
    date: "February 2024",
    city: "White House"
  },
  {
    id: "gallatin",
    title: "Discover Gallatin, TN: A Welcoming Hometown for Your Family",
    description: "Explore excellent schools, safe neighborhoods, and family-friendly activities in this charming Tennessee city.",
    date: "February 2024",
    city: "Gallatin"
  },
  {
    id: "hendersonville",
    title: "Discover Hendersonville, TN: Your Family's Ideal Hometown",
    description: "Comprehensive guide to Hendersonville's schools, safety, recreation, economy, and housing market for families considering relocation.",
    date: "February 2024",
    city: "Hendersonville"
  }
]

export default function ResearchLibrary() {
  const [selectedCity, setSelectedCity] = useState<string>("all")

  const cities = Array.from(new Set(reports.map(report => report.city))).sort()
  
  const filteredReports = selectedCity === "all" 
    ? reports 
    : reports.filter(report => report.city === selectedCity)

  return (
    <div className="container mx-auto py-12">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Library</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Gain valuable insights about living in Middle Tennessee through our comprehensive city guides
        </p>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Button 
            variant={selectedCity === "all" ? "default" : "outline"}
            onClick={() => setSelectedCity("all")}
            className="min-w-[100px]"
          >
            All Cities
          </Button>
          {cities.map(city => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              onClick={() => setSelectedCity(city)}
              className="min-w-[100px]"
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredReports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription className="flex flex-col gap-1">
                <span>{report.date}</span>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 w-fit">
                  {report.city}
                </span>
              </CardDescription>
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
