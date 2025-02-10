import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function MarketTrends() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/research-library">← Back to Library</Link>
          </Button>
        </div>

        <article className="prose prose-lg max-w-none">
          <h1>North Nashville Market Trends 2024</h1>
          <p className="text-muted-foreground">Published February 2024</p>

          <h2>Executive Summary</h2>
          <p>
            North Nashville's real estate market continues to show strong growth potential in 2024,
            with increasing property values and growing interest from both homebuyers and investors.
            This report provides a detailed analysis of current market conditions and future projections.
          </p>

          <h2>Key Findings</h2>
          <ul>
            <li>Average home prices increased by 8.5% compared to 2023</li>
            <li>New development projects are creating additional housing inventory</li>
            <li>Neighborhood amenities and infrastructure continue to improve</li>
            <li>Strong community engagement in local development decisions</li>
          </ul>

          <h2>Market Analysis</h2>
          <p>
            The North Nashville housing market has demonstrated remarkable resilience and growth
            over the past year. Property values have steadily increased, driven by several factors
            including improved infrastructure, new business developments, and growing interest in
            the area's rich cultural heritage.
          </p>

          <h2>Future Outlook</h2>
          <p>
            Based on current trends and planned developments, we project continued growth in the
            North Nashville real estate market throughout 2024 and beyond. The area is positioned
            to benefit from several major infrastructure projects and community initiatives that
            will likely drive further appreciation in property values.
          </p>

          <h2>Recommendations</h2>
          <p>
            For potential homebuyers and investors interested in North Nashville, we recommend:
          </p>
          <ul>
            <li>Consider long-term investment potential in emerging neighborhoods</li>
            <li>Research ongoing and planned community development projects</li>
            <li>Engage with local community organizations and events</li>
            <li>Monitor infrastructure improvements and their impact on property values</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
