import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budgets and Cash Flow - Business Wisdom',
  description: 'Learn why planning your money matters and how cash flow can make or break a business. Discover ancient wisdom on foresight and prudent management.',
};

export default function BudgetsCashFlowPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/money" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← How Money Works
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Budgets and Cash Flow
          </h1>
          <p className="text-xl text-gray-600">
            Why profitable businesses can still fail—and how to avoid that fate.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: What is a Budget */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What is a Budget?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A budget is a plan for your money. It answers two simple questions:
              How much money do I expect to receive? How much do I plan to spend?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a budget like a travel plan. Before a journey, you decide
              where you are going, how you will get there, and how much it will cost.
              You do not just set off and hope for the best.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Money works the same way. Without a plan, you will likely end up
              somewhere you did not want to be—often with an empty wallet.
            </p>
          </section>

          {/* Section 2: Income vs Expenses */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Income vs Expenses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A budget has two sides:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Income (Money Coming In)
                </h3>
                <p className="text-gray-600">
                  For a person, this is your salary, wages, or any money you receive.
                  For a business, this is revenue from sales. You need to estimate
                  this honestly—not what you hope to earn, but what you realistically expect.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Expenses (Money Going Out)
                </h3>
                <p className="text-gray-600">
                  All the money you spend. For a family: rent, food, bills, transport.
                  For a business: supplies, wages, rent, utilities. List everything—
                  small expenses add up quickly.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The golden rule: <strong>Income should be greater than expenses.</strong>
              If it is not, you need to either earn more or spend less. There is no
              third option.
            </p>
          </section>

          {/* Section 3: Cash Flow */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Timing Problem: Cash Flow
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a puzzle. A business makes a profit of £10,000 this year.
              But it cannot pay its bills this month. How is that possible?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The answer is <strong>cash flow</strong>—the timing of when money
              moves in and out.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine a builder who finishes a big job in January. The customer
              will pay £20,000, but not until March. Meanwhile, the builder must
              pay their workers in January, buy materials in February, and pay rent
              every month.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The builder is profitable—they will make money on the job. But they
              might run out of cash before the payment arrives. This is the cash
              flow problem.
            </p>
          </section>

          {/* Section 4: Why Businesses Fail */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Real Reason Businesses Fail
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most businesses do not fail because they are unprofitable.
              They fail because they run out of cash.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cash flow problems happen when:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Customers pay slowly but suppliers want payment quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>A big expense comes before you expected it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>You grow too fast and cannot afford to buy more stock</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>A major customer does not pay what they owe</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This is why experienced business owners say: <strong>&quot;Revenue is vanity,
              profit is sanity, but cash is king.&quot;</strong> You can have great sales
              and good profit margins, but if you cannot pay this week&apos;s bills,
              your business is in trouble.
            </p>
          </section>

          {/* Section 5: Personal Budgeting */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Personal Budgeting: Where to Start
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The same principles apply to your personal finances. Here is a simple
              approach:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Track everything:</strong> For one month, write down every penny you spend. You will be surprised where your money goes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Separate needs from wants:</strong> Rent and food are needs. The latest phone or eating out are wants.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Pay yourself first:</strong> Save something before spending on wants. Even a small amount builds up.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Build a buffer:</strong> Keep some money aside for unexpected expenses. Aim for one to three months of expenses.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Budgeting is not about denying yourself. It is about being intentional—
              spending on what truly matters to you and cutting what does not.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Planning and Foresight
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya was emphatic about the importance of planning ahead:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Before you start any work, always ask yourself: Why am I doing this?
              What might the results be? Will I succeed? Only when you think deeply
              and find satisfactory answers should you proceed.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> Do not spend money without a plan.
              Think through what you are trying to achieve, what it will cost, and
              whether it is worth it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Thirukkural, the ancient Tamil text, also speaks to this:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Weigh well your income and expenses, then live within your means.
              This is the wisdom that protects all other wisdom.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Financial discipline is foundational.
              Without it, nothing else you achieve will last.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>A budget is a plan for your money—not a restriction, but a direction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Income must be greater than expenses—there is no other path to stability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Cash flow is about timing—you can be profitable and still run out of money</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Most businesses fail from cash problems, not profit problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Track, plan, and build a buffer—these habits protect everything else</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Do you know where your money goes each month? If you had to list your
              top five expenses right now, could you? What might change if you tracked
              every expense for a month?
            </p>
            <p className="text-gray-600 text-sm italic">
              Many people find that simply being aware of their spending changes their
              behaviour—without any extra effort.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/money/revenue-costs-profit"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Revenue, Costs, and Profit
          </Link>
          <Link
            href="/topics/money/prosperity-principle"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: The Prosperity Principle
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
