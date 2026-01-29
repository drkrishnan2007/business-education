import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revenue, Costs, and Profit - Business Wisdom',
  description: 'Learn the three numbers every business must understand: revenue, costs, and profit. Discover Chanakya\'s timeless wisdom on managing money wisely.',
};

export default function RevenueCostsProfitPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/money" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← How Money Works
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Revenue, Costs, and Profit
          </h1>
          <p className="text-xl text-gray-600">
            Three numbers that tell you whether a business is healthy or sick.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Simplest Business */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Lemonade Stand
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine you start a lemonade stand. You buy lemons, sugar, and cups.
              You set up a table. Customers come and pay you for each glass of lemonade.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At the end of the day, you count your money. You made £50 from selling
              lemonade. But wait—did you really make £50?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Not quite. You spent £20 on lemons, sugar, and cups. So you actually
              made £30. This simple example shows the three numbers every business
              owner must understand.
            </p>
          </section>

          {/* Section 2: The Three Numbers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Three Numbers
            </h2>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Revenue (Money In)
                </h3>
                <p className="text-gray-600">
                  Revenue is all the money that comes into your business from sales.
                  If you sell 50 glasses of lemonade at £1 each, your revenue is £50.
                  Revenue is sometimes called &quot;turnover&quot; or &quot;sales.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Costs (Money Out)
                </h3>
                <p className="text-gray-600">
                  Costs are all the money you spend to run your business. This includes
                  everything from raw materials to rent to wages. Your lemonade stand
                  costs included lemons, sugar, cups, and maybe the table rental.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Profit (What is Left)
                </h3>
                <p className="text-gray-600">
                  Profit is what remains after you subtract costs from revenue.
                  It is the simplest equation in business: <strong>Profit = Revenue - Costs</strong>.
                  This is the money you actually keep.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Fixed vs Variable Costs */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Two Kinds of Costs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not all costs behave the same way. Understanding the difference is important.
            </p>
            <ul className="space-y-4 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>
                  <strong>Fixed costs</strong> stay the same no matter how much you sell.
                  Rent for your shop, salaries for permanent staff, insurance—these cost
                  the same whether you sell one item or a thousand.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>
                  <strong>Variable costs</strong> change with how much you sell.
                  If you sell more lemonade, you need more lemons and cups. These costs
                  go up and down with your sales.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A small corner shop has high fixed costs (rent, utilities) and lower variable
              costs. An online seller might have low fixed costs but higher variable costs
              per order (shipping, packaging).
            </p>
          </section>

          {/* Section 4: Why Profit Matters */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Profit Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Profit is not greed. Profit is survival.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A business without profit is like a person who spends more than they earn.
              It can survive for a while using savings or borrowing, but eventually it
              will fail.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Profit allows a business to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Pay the owner for their work and risk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Save money for difficult times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Invest in growth and improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Hire more people and create jobs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Give back to the community</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Without profit, none of this is possible. A business that makes no profit
              is a job, not a business—and often not even a secure job.
            </p>
          </section>

          {/* Section 5: Simple Example */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              A Real Example: The Local Tea Shop
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let us look at a small tea shop for one month:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
              <p className="mb-2"><strong>Revenue:</strong></p>
              <p className="ml-4">500 cups of tea × £2 = £1,000</p>
              <p className="mt-4 mb-2"><strong>Costs:</strong></p>
              <p className="ml-4">Tea and milk: £200 (variable)</p>
              <p className="ml-4">Cups and sugar: £50 (variable)</p>
              <p className="ml-4">Rent: £300 (fixed)</p>
              <p className="ml-4">Electricity: £50 (fixed)</p>
              <p className="ml-4">Total costs: £600</p>
              <p className="mt-4 mb-2"><strong>Profit:</strong></p>
              <p className="ml-4">£1,000 - £600 = £400</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The shop keeps £400 after paying all expenses. This is money the owner
              can take home, save, or invest back into the business.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Managing Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya understood the importance of balancing income and expenditure
              over 2,000 years ago:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;The king should know the income and expenditure of the treasury.
              Only by knowing both can he manage the kingdom wisely.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> You cannot manage what you do not measure.
              A business owner must know exactly how much money comes in and goes out.
              Guessing leads to failure.
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;He who spends beyond his means invites ruin.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Costs must never exceed revenue for long.
              This principle applies to kingdoms, businesses, and families alike.
              Spend less than you earn—always.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Revenue is all money coming in from sales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Costs are all money going out to run the business</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Profit = Revenue minus Costs—this is what you actually keep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Fixed costs stay the same; variable costs change with sales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Profit is not greed—it is how businesses survive and grow</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a small business you know—perhaps a local shop, restaurant, or
              service provider. What do you think are their biggest costs? Are most of
              their costs fixed or variable?
            </p>
            <p className="text-gray-600 text-sm italic">
              Try to estimate their revenue, costs, and profit. You might be surprised
              by how thin the margins are in many businesses.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/money/what-is-money"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What is Money?
          </Link>
          <Link
            href="/foundations/money/budgets-cash-flow"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Budgets and Cash Flow
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
