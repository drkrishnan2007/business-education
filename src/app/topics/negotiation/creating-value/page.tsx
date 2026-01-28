import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creating Value - Business Wisdom',
  description: 'Learn how to make the pie bigger before dividing it. Great negotiators create value so everyone gains more than they expected.',
};

export default function CreatingValuePage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Negotiate
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Creating Value
          </h1>
          <p className="text-xl text-gray-600">
            Before you fight over the pie, ask: can we make the pie bigger?
            Great negotiators find ways for everyone to gain more.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Fixed Pie Myth */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Fixed Pie Myth
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people approach negotiation as if there is a fixed pie.
              If you get more, I get less. If I win, you lose.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is sometimes true. If we are splitting Rs 1000, every rupee
              you take is a rupee I do not get.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But most real negotiations are not like this. They have multiple
              issues, different priorities, and opportunities to create new
              value. <strong>The pie is not fixed&mdash;it can grow.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              The best negotiators know: expand the pie first, then divide it.
            </p>
          </section>

          {/* Section 2: How Value Gets Created */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How Value Gets Created
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Value is created when people trade things they value differently.
              Here is the key insight:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-6 rounded-lg mb-4">
              <p className="text-gray-700 text-lg text-center">
                <strong>If I value something less than you do, and you value
                something less than I do, we can trade&mdash;and both be better off.</strong>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think back to the orange story: one sister wanted the peel, one
              wanted the flesh. By understanding their different interests,
              both could get 100% of what they valued.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is not magic. It is finding the trades that make sense.
            </p>
          </section>

          {/* Section 3: Examples */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Real Examples of Value Creation
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#5b21b6] pl-4">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Salary Negotiation
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Fixed pie thinking:</strong> I want Rs 80,000. They
                  offer Rs 70,000. We haggle over the difference.
                </p>
                <p className="text-gray-700">
                  <strong>Value creation:</strong> What if the company cannot
                  pay Rs 80,000 but can offer work-from-home Fridays (costs them
                  nothing, worth a lot to you)? Or training courses? Or a signing
                  bonus spread over time? Or a performance bonus? Suddenly, the
                  total package can exceed what either side expected.
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <h3 className="font-serif text-lg text-[#f97316] mb-2">
                  House Sale
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Fixed pie thinking:</strong> Buyer wants lowest price.
                  Seller wants highest price. Fight over every lakh.
                </p>
                <p className="text-gray-700">
                  <strong>Value creation:</strong> Seller needs to move out in
                  2 months but buyer can wait 4 months. Seller offers lower price
                  for faster closing. Buyer includes the furniture seller was
                  going to sell anyway. Both gain.
                </p>
              </div>

              <div className="border-l-4 border-[#eab308] pl-4">
                <h3 className="font-serif text-lg text-[#eab308] mb-2">
                  Business Partnership
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Fixed pie thinking:</strong> Argue over profit split
                  percentages endlessly.
                </p>
                <p className="text-gray-700">
                  <strong>Value creation:</strong> One partner cares more about
                  monthly income, the other about long-term equity. One wants
                  decision-making power, the other wants less workload. Structure
                  the deal so each gets what they value most.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Techniques */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Techniques for Creating Value
            </h2>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Add Issues to the Negotiation
                </h3>
                <p className="text-gray-600">
                  The more issues on the table, the more opportunities to trade.
                  Do not negotiate price alone&mdash;include timing, quality,
                  payment terms, warranties, extras. One-issue negotiations are
                  usually zero-sum. Multi-issue negotiations create value.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Find Different Valuations
                </h3>
                <p className="text-gray-600">
                  Ask: what costs me little but is valuable to them? What costs
                  them little but is valuable to me? These are the golden trades.
                  A restaurant giving a free dessert (costs Rs 50) might win a
                  customer worth Rs 5000 over time.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Explore Differences in Timing
                </h3>
                <p className="text-gray-600">
                  If I need money now and you need it later, we can structure
                  payments to help both. If you need certainty now and I am
                  willing to take risk, we can find arrangements that work.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. Look for Shared Interests
                </h3>
                <p className="text-gray-600">
                  Some things benefit both sides. Can you collaborate on
                  marketing? Share costs? Reduce bureaucracy? Build something
                  together that neither could build alone?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  5. Ask &quot;What If?&quot;
                </h3>
                <p className="text-gray-600">
                  &quot;What if we changed the delivery schedule?&quot; &quot;What if
                  payment was monthly instead of upfront?&quot; &quot;What if we
                  added a trial period?&quot; Each &quot;what if&quot; explores new
                  possibilities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Sharing Information */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Importance of Sharing Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Value creation requires sharing information about your interests.
              This feels risky&mdash;what if they use it against you?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the balance:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600">&bull;</span>
                <span><strong>Share:</strong> What you value, what matters to you, your interests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600">&bull;</span>
                <span><strong>Protect:</strong> Your walk-away point, your best alternative</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              If both sides hide everything, you cannot find creative solutions.
              If you reveal too much, you might get exploited.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Start by sharing interests gradually. If the other side
              reciprocates, share more. Build trust step by step.
            </p>
          </section>

          {/* Section 6: When Value Cannot Be Created */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When the Pie Really Is Fixed
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes, after exploring every option, there is genuinely
              no way to create more value. You have tried adding issues,
              finding trades, exploring timing&mdash;nothing works.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Then you must divide what exists. This is where:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Your alternatives matter (if you can walk away, you have power)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Objective standards help (what is market rate? What is fair?)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Relationship matters (will you work together again?)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              But always try to create value first. You might be surprised
              what is possible.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Mutual Benefit
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood that generosity creates abundance:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;ஈத்துவக்கும் இன்பம் அறியார்கொல் தாமுடைமை<br />
              வைத்திழக்கும் வன்கணவர்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;The hard-hearted who hoard wealth
              never experience the joy of giving.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And Chanakya on strategic generosity:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;दानेन तुल्यं न भवति किंचिद्<br />
              दानेन नित्यं सुखिनो भवन्ति&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Nothing equals the power of giving.
              Those who give are always happy.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Looking for ways to help the
              other side often helps you too. Generosity in negotiation is
              not weakness&mdash;it is strategy. When you help others get what
              they need, they help you get what you need.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The pie is usually not fixed&mdash;it can grow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Value is created by trading things valued differently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Add issues, explore timing, find cheap-for-me/valuable-for-you trades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Share interests (carefully) to find creative solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Expand the pie first, then divide it</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a situation where you and someone else wanted different
              things. Was there a creative solution that could have given both
              of you more of what you wanted? What would you have needed to
              know about each other to find it?
            </p>
            <p className="text-gray-600 text-sm italic">
              Often we accept less because we do not think to ask &quot;what else
              is possible?&quot;
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/negotiation/preparation"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Preparation is Everything
          </Link>
          <Link
            href="/topics/negotiation/walking-away"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Walking Away
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
