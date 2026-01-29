import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wealth and Giving - Business Wisdom',
  description: 'Discover the connection between creating wealth and giving back. Learn from Thirukkural and the Bharatiya tradition of dana (giving).',
};

export default function WealthAndGivingPage() {
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
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Wealth and Giving
          </h1>
          <p className="text-xl text-gray-600">
            The ancient truth: prosperity shared creates more prosperity.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Give */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Do Wealthy People Give?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Throughout history and across cultures, wealthy people have given away
              their money. Not all of them, certainly—but many. Why would someone who
              worked hard to build wealth simply give it away?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are several reasons:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Impact:</strong> After a certain point, more money does not make you happier. But using it to solve problems or help others brings deep satisfaction.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Legacy:</strong> Buildings crumble, businesses are forgotten. But a school or hospital that serves generations? That endures.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Meaning:</strong> Accumulating wealth feels empty without purpose. Giving provides that purpose—a sense that your life mattered.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Gratitude:</strong> Many wealthy people feel fortunate and want to share that fortune with others.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Notice that none of these require being forced. The best giving comes
              from genuine desire, not guilt or obligation.
            </p>
          </section>

          {/* Section 2: Giving While Living */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Giving While Living
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a growing movement called &quot;Giving While Living.&quot; The idea is
              simple: Why wait until you die to give your wealth away?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you give while you are alive:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>You can see the impact of your giving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>You can learn what works and adjust</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>You can use your skills and networks, not just your money</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>You can inspire others to give too</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Leaving everything in a will means trusting others to carry out your
              wishes after you are gone. Giving now means you can ensure it is done right.
            </p>
          </section>

          {/* Section 3: Corporate Giving */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When Businesses Give: Corporate Responsibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Businesses also give back. This is sometimes called Corporate Social
              Responsibility (CSR). It takes many forms:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Donating money to charities and causes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Giving employees paid time to volunteer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Reducing environmental harm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Paying fair wages and treating workers well</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Supporting local communities</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some do this genuinely. Others do it for public relations. The wisest
              businesses understand that doing good and doing well are not opposites—
              they reinforce each other.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A business that treats its workers poorly will struggle to keep good
              people. A business that harms its community will lose customers. In the
              long run, ethical behaviour is usually good business.
            </p>
          </section>

          {/* Section 4: The Multiplier Effect */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Multiplier Effect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something remarkable: Prosperity shared often creates more
              prosperity. Not less.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you help someone start a business, they may employ others.
              Those employees spend money in their community. That spending supports
              other businesses. And so on.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you fund a school, you educate children who grow up to solve
              problems, create businesses, and contribute to society in ways you
              could never predict.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the multiplier effect. One act of giving ripples outward,
              creating benefits far beyond the original gift. Hoarded wealth sits
              still. Shared wealth grows.
            </p>
          </section>

          {/* Wisdom Section 1: Thirukkural */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Giving
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Thirukkural, written over 2,000 years ago in Tamil Nadu, devotes
              an entire section to giving. Here is one of its most famous verses:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;The wealth of the generous never declines.
              Like a flowing spring, it replenishes itself.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> Giving does not deplete you. When you
              give freely, more comes to you—whether through new opportunities,
              relationships, or simply the satisfaction of a life well-lived.
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;What is the use of a miser&apos;s wealth?
              It neither helps others nor brings him joy.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Wealth that is never used—neither for
              yourself nor others—is pointless. It might as well not exist.
            </p>
          </section>

          {/* Wisdom Section 2: Dana and Paropakara */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Dana and Paropakara
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Sanskrit, <strong>Dana</strong> means giving or charity. It is considered
              one of the most important virtues—not optional, but essential to a
              good life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a famous saying:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Paropakaram idam shariram&quot;<br />
              (This body is meant for helping others)
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> Your abilities, your wealth, your time—
              these are not just for yourself. They are tools for serving others.
              A life focused only on accumulating for yourself misses the point.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And the concept of <strong>Vasudhaiva Kutumbakam</strong>—&quot;the world is
              one family&quot;—suggests that when anyone prospers, we all benefit.
              Prosperity is not a zero-sum game.
            </p>
          </section>

          {/* Section 5: How to Start */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Starting Small: Giving at Any Level
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You do not need to be wealthy to give. In fact, starting the habit
              of giving when you have little makes it easier to give when you have more.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can give:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Money:</strong> Even small amounts make a difference. Many great causes rely on small donations from many people.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Time:</strong> Volunteer for causes you care about. Your skills may be worth more than money.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Attention:</strong> Listen to someone who needs to be heard. Notice those who are overlooked.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Knowledge:</strong> Teach what you know. Mentoring costs nothing but changes lives.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The Thirukkural says that even a tiny gift, given with a full heart,
              is precious. The size of the gift matters less than the spirit behind it.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Wealthy people give for impact, legacy, meaning, and gratitude</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Giving while living lets you see and guide your impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Shared prosperity multiplies—it does not diminish</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Dana (giving) is an essential virtue in the Bharatiya tradition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>You can give money, time, attention, or knowledge at any level</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you had more than you needed, what would you give to? Who would you
              help? What problems would you want to solve? And—can you start now, in
              some small way, with what you already have?
            </p>
            <p className="text-gray-600 text-sm italic">
              The habit of generosity starts before wealth arrives. Those who give
              nothing when they have little rarely give much when they have plenty.
            </p>
          </section>

          {/* Topic Completion */}
          <section className="card p-8 mb-8 bg-gradient-to-r from-[#fef3e2] to-[#f5f3ff]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Congratulations!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have completed the &quot;How Money Works&quot; topic. You now understand:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">✓</span>
                <span>What money is and why we use it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">✓</span>
                <span>Revenue, costs, and profit—the core of any business</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">✓</span>
                <span>Budgets and why cash flow matters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">✓</span>
                <span>Why prosperity is honourable, not shameful</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">✓</span>
                <span>The relationship between wealth and giving</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              More importantly, you have learned from Chanakya, the Thirukkural, and
              the great Bharatiya merchant tradition. This wisdom has guided
              prosperous societies for millennia. Now it can guide you too.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/money/prosperity-principle"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: The Prosperity Principle
          </Link>
          <Link
            href="/foundations/money"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to Topic Overview
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
