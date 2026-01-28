import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Businesses Make Money - Business Wisdom',
  description: 'Understand revenue, costs, and profit. Learn different business models and why revenue alone is not enough. Discover Chanakya\'s teachings on treasury management.',
};

export default function HowBusinessesMakeMoneyPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/business" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Businesses Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            How Businesses Make Money
          </h1>
          <p className="text-xl text-gray-600">
            Revenue is the money coming in. Costs are the money going out.
            Profit is what remains. Simple to say, hard to master.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Three Numbers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Three Numbers Every Business Lives By
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every business, from a street vendor to a multinational company,
              lives by three numbers:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Revenue (Money Coming In)
                </h3>
                <p className="text-gray-600">
                  This is all the money customers pay you. If you sell 10 samosas
                  at Rs 20 each, your revenue is Rs 200. Revenue is the top number,
                  but it is not the most important one.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Costs (Money Going Out)
                </h3>
                <p className="text-gray-600">
                  This is all the money you spend to run the business. Ingredients,
                  rent, wages, electricity, transport&mdash;everything adds up. If it
                  costs Rs 8 to make each samosa, your cost for 10 is Rs 80.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Profit (What Remains)
                </h3>
                <p className="text-gray-600">
                  Revenue minus Costs equals Profit. If revenue is Rs 200 and
                  costs are Rs 80, your profit is Rs 120. This is the money that
                  keeps the business alive.
                </p>
              </div>
            </div>
            <div className="bg-[#5b21b6] text-white p-4 rounded-lg text-center text-lg">
              <strong>Revenue</strong> &minus; <strong>Costs</strong> = <strong>Profit</strong>
            </div>
          </section>

          {/* Section 2: Why Revenue Is Not Enough */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Trap of Big Revenue
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many people think a business is doing well because it has lots
              of customers and lots of sales. But revenue without profit is
              just activity, not success.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider two businesses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  Business A
                </h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>Revenue: Rs 10,00,000</li>
                  <li>Costs: Rs 9,50,000</li>
                  <li>Profit: Rs 50,000</li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-green-700 mb-2">
                  Business B
                </h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>Revenue: Rs 3,00,000</li>
                  <li>Costs: Rs 1,50,000</li>
                  <li>Profit: Rs 1,50,000</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Business A looks bigger but Business B is healthier. It keeps more
              of what it earns. Big revenue with tiny profit means lots of work
              for little reward.
            </p>
          </section>

          {/* Section 3: Ways Businesses Earn Money */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Different Ways to Make Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Businesses earn money in many ways. Here are the most common:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Selling Products:</strong> Make or buy something, sell it for more. A shop, a factory, an online store.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Selling Services:</strong> Use your skills or time to help others. A tutor, a doctor, a web designer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Subscriptions:</strong> Charge regularly for ongoing access. Netflix, gym memberships, newspapers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Advertising:</strong> Offer something free, earn from showing ads. YouTube, newspapers, free apps.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Commission:</strong> Connect buyers and sellers, take a percentage. Real estate agents, delivery apps.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Rent:</strong> Own something valuable, let others use it for a fee. Property, equipment, vehicles.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Some businesses use multiple ways. A shopping app might sell
              products, show ads, and charge sellers a commission&mdash;all at once.
            </p>
          </section>

          {/* Section 4: The Survival Fund */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Profit is the Survival Fund
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why does profit matter so much? Because profit is what allows a
              business to:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Survive bad times:</strong> When sales drop, profit from good times keeps you alive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Grow:</strong> Open new locations, hire more people, make better products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Improve:</strong> Buy better equipment, train staff, innovate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Reward:</strong> Pay the owner for their work and risk</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A business with no profit is living on borrowed time. It might
              look busy, but one bad month can end everything. Profit is the
              cushion that protects against uncertainty.
            </p>
          </section>

          {/* Section 5: Connecting to Earlier Lessons */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Remember: Cash Flow Matters Too
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you studied the Money topic, you learned about cash flow: the
              timing of money coming in and going out. Here is why it matters
              for profit:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A business can be profitable on paper but still fail. How? If
              costs come before revenue. Imagine:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>January: You spend Rs 50,000 on supplies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>February: You make products, no sales yet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>March: Rent is due, you have no money</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>April: You would have sold everything for Rs 80,000&mdash;but you closed in March</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Profit is calculated over time, but bills are paid in the moment.
              Managing cash&mdash;not just profit&mdash;is essential for survival.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Treasury Management
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya advised kings on managing the royal treasury. His
              principles apply perfectly to business:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;कोशमूलो दण्डः। दण्डमूलाः सर्वारम्भाः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;The treasury is the root of all power.
              And all enterprises depend on that power.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya also taught about growing the treasury wisely:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;कोशस्य हि वृद्धौ देशवृद्धिः, देशवृद्धौ प्रजावृद्धिः।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;When the treasury grows, the state
              grows. When the state grows, the people prosper.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> A healthy treasury (profit) is
              not selfish&mdash;it is the foundation of everything else. A business
              with strong profits can serve customers better, pay workers well,
              and contribute to society. Profit enables purpose.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Revenue minus Costs equals Profit&mdash;learn this formula</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Big revenue without profit is just busy work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Businesses can earn through products, services, subscriptions, ads, commissions, or rent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Profit is the survival fund that protects against bad times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya taught: the treasury is the root of all power and progress</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a local business you visit often&mdash;a shop, restaurant,
              or service. What do you think their main costs are? What would
              happen to them if revenue dropped by 50% for three months?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to start thinking about
              the money behind businesses you interact with.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business/who-pays-why"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Who Pays and Why
          </Link>
          <Link
            href="/topics/business/competition"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Competition
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
