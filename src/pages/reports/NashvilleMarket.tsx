import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

export default function NashvilleMarket() {
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
            <h1 className="text-4xl font-bold mb-4">Nashville's Real Estate Remix: Record Prices Meet Changing Tempo</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Analyzing the shift from frenzy to balance while prices continue to climb
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Published February 2025</span>
              <span>•</span>
              <span>Location: Nashville-Davidson–Murfreesboro–Franklin Metro Area</span>
              <span>•</span>
              <span>Target: Homebuyers, Sellers, and Investors</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
            <p>
              Nashville's residential real estate market demonstrates remarkable resilience despite the cooling pace, 
              with home prices continuing to rise amid normalized demand. The market is transitioning from a red-hot 
              seller's market toward a more balanced environment, providing buyers with more time and options while 
              sellers still benefit from strong price appreciation. With nearly 100 new residents arriving daily and 
              inventory still below long-term norms, Nashville's fundamental housing demand remains robust even as 
              higher mortgage rates and affordability concerns have tempered the buying frenzy of 2021-2022.
            </p>
          </div>

          {/* Audio Player */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Listen to a podcast version of the report</h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <audio controls className="w-full mb-2">
                <source src="/audio/Nashville 2025 Real Estate Market Report.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-muted-foreground text-center">Feature currently in beta</p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Median Home Price</h3>
                <div className="text-3xl font-bold text-primary mb-2">$473,000</div>
                <p className="text-sm text-muted-foreground">up 7.4% from previous year</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Days on Market</h3>
                <div className="text-3xl font-bold text-primary mb-2">50-65 days</div>
                <p className="text-sm text-muted-foreground">compared to just 11 days in 2022</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Inventory Growth</h3>
                <div className="text-3xl font-bold text-primary mb-2">15% increase</div>
                <p className="text-sm text-muted-foreground">year-over-year</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Population Growth</h3>
                <div className="text-3xl font-bold text-primary mb-2">~100 new residents</div>
                <p className="text-sm text-muted-foreground">arriving daily</p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Price Trends</h2>
            <p className="mb-4">
              Nashville home values continue their upward trajectory despite market cooling. The median sale price 
              reached $473,000 in January 2025, with single-family homes hitting the $500,000 mark by the end of 2024. 
              This represents over 50% appreciation from pre-pandemic values ($322,500 in 2019), significantly outpacing 
              income growth. Price per square foot averages $270, up 4% year-over-year, with the luxury market expanding—13% 
              of listings now priced above $1 million.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Market Dynamics</h2>
            <p className="mb-4">
              The market has shifted from extreme urgency to a more measured pace. Homes now take 50-65 days to sell 
              (compared to just 11 days in early 2022), giving buyers time to shop and negotiate. Inventory has increased 
              to about 4 months' supply (10,109 homes), providing more options though still below the 6-month benchmark 
              for a balanced market. The market has moved from multiple offers over asking to homes typically receiving 
              about 2 offers and selling at or slightly below list price.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Affordability Challenges</h2>
            <p className="mb-4">
              Mortgage rates have dramatically impacted buying power, rising from historic lows (~2.7% in 2021) to around 
              7% by late 2023. This has increased monthly payments by approximately $1,200 on a $400,000 loan compared to 
              2021 rates. The rent-vs-buy equation has shifted significantly—mortgage payments now average about 2.5× the 
              cost of renting similar properties (compared to 1.5× pre-pandemic), creating one of the highest buy-to-rent 
              cost ratios in the country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Market Opportunities</h2>
            <p className="mb-4">
              The evolving market creates distinct advantages for different participants. Sellers still benefit from 
              substantial equity gains, though strategic pricing is now essential. Buyers have regained negotiating 
              leverage and time for due diligence, with opportunities to request concessions like interest rate buydowns. 
              New construction offers additional inventory with builder incentives, while the "lock-in effect" (sellers 
              reluctant to give up low mortgage rates) limits resale inventory. Professional realtor guidance has become 
              increasingly valuable for navigating pricing strategies, negotiations, and the nuanced neighborhood-by-neighborhood 
              variations across Middle Tennessee.
            </p>
          </section>

          {/* Full Report Link */}
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="https://docs.google.com/document/d/12xubuspWfZNIWe7RvYSS3SngyJ51SleaiihvUSFVdJY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Full Report on Google Docs →
              </a>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
