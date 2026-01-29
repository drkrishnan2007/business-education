import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weighing Trade-offs - Business Wisdom',
  description: 'Nothing is free and everything has a cost. Learn to see the hidden prices of every choice and make decisions with open eyes.',
};

export default function WeighingTradeoffsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/decisions" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Decisions Get Made
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Weighing Trade-offs
          </h1>
          <p className="text-xl text-gray-600">
            Every choice has a cost. The question is not whether to pay,
            but what you are willing to pay for what you truly want.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Nothing is Free */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Nothing is Free
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Economists have a phrase: <strong>&quot;There is no such thing
              as a free lunch.&quot;</strong> Even when something appears
              free, someone is paying&mdash;often you, in ways you do not
              notice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every decision involves giving up something. Choose to spend
              time with family, and you give up time building your career.
              Choose to save money, and you give up experiences you could
              have had. Choose safety, and you give up possibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>This is not bad news.</strong> It is simply reality.
              Once you accept it, you stop searching for choices with no
              downsides&mdash;and start making honest trade-offs.
            </p>
          </section>

          {/* Section 2: Opportunity Cost */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Opportunity Cost: The Hidden Price
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The true cost of any choice is not just what you spend. It
              is also what you give up by not choosing something else.
              This is called <strong>opportunity cost</strong>.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The gold chain
                </h3>
                <p className="text-gray-600 mb-0">
                  Your parents gift you a gold chain worth ₹1 lakh. You
                  wear it occasionally. But the opportunity cost is what
                  that ₹1 lakh could have become if invested for 20 years.
                  The chain costs more than its price tag.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The weekend decision
                </h3>
                <p className="text-gray-600 mb-0">
                  You spend Saturday watching television. The cost is not
                  zero&mdash;it is whatever else you could have done:
                  learning a skill, building a relationship, starting a
                  project. Time spent is gone forever.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The safe job
                </h3>
                <p className="text-gray-600 mb-0">
                  Staying in a comfortable but unfulfilling job seems
                  risk-free. But the opportunity cost might be years of
                  growth, learning, and accomplishment you will never have.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Opportunity cost is invisible but real.</strong> To
              make good decisions, you must see not just what you gain,
              but what you forgo.
            </p>
          </section>

          {/* Section 3: The TANSTAAFL Principle */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When Something Looks Free, Ask: Who Pays?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Free email. Free social media. Free apps. But these services
              cost billions to build and run. <strong>If you are not
              paying, you are the product.</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Free social media costs your attention and data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Free financial advice often hides sales commissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Free samples create obligation and habit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;Buy one get one free&quot; means you pay for both in the original price</span>
              </li>
            </ul>
            <div className="border-l-4 border-[#d97706] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The principle:</strong> When you cannot see the
                cost, look harder. The cost is there&mdash;it is just
                hidden.
              </p>
            </div>
          </section>

          {/* Section 4: Trade-offs in Practice */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Common Trade-offs You Will Face
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Life presents certain trade-offs again and again. Knowing
              them helps you choose consciously instead of by default.
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-[#5b21b6] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Time vs Money
                </h3>
                <p className="text-gray-600 mb-0">
                  You can often trade one for the other. Work more hours
                  to earn more money. Spend money to save time. But time
                  is limited in a way money is not&mdash;you cannot earn
                  more hours.
                </p>
              </div>

              <div className="border-l-4 border-[#5b21b6] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Security vs Growth
                </h3>
                <p className="text-gray-600 mb-0">
                  The safest path is rarely the one with most opportunity.
                  Staying where you are feels secure; taking chances feels
                  risky. But security without growth becomes its own risk.
                </p>
              </div>

              <div className="border-l-4 border-[#5b21b6] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Speed vs Quality
                </h3>
                <p className="text-gray-600 mb-0">
                  You can do something fast or do it well, but doing both
                  is hard. Know which matters more for each situation.
                  Sometimes &quot;good enough now&quot; beats &quot;perfect
                  later.&quot;
                </p>
              </div>

              <div className="border-l-4 border-[#5b21b6] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Present vs Future
                </h3>
                <p className="text-gray-600 mb-0">
                  Enjoy today or prepare for tomorrow? Spend now or save
                  for later? Neither extreme is right. The skill is
                  finding your balance.
                </p>
              </div>

              <div className="border-l-4 border-[#5b21b6] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Depth vs Breadth
                </h3>
                <p className="text-gray-600 mb-0">
                  Master one thing or know many things a little? Both have
                  value. Specialists often earn more; generalists adapt
                  better. Choose based on your goals and temperament.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Making Trade-offs Consciously */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Weigh Trade-offs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A practical approach for difficult decisions:
            </p>
            <ol className="space-y-4 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Name what you are trading.</strong> Be specific.
                  Not &quot;this job vs that job&quot; but &quot;more money vs
                  more time with family.&quot;
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Consider all costs&mdash;including hidden
                  ones.</strong> What is the opportunity cost? What might
                  you regret? What is the cost of not deciding?
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Know your values.</strong> Trade-offs are easier
                  when you know what matters most to you. Without values,
                  every choice feels equally hard.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Accept the cost.</strong> Once you choose, own
                  the trade-off fully. Do not choose one thing and then
                  resent paying its price.
                </div>
              </li>
            </ol>
          </section>

          {/* Section 6: The Cost of Not Choosing */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Cost of Not Choosing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One trade-off people often miss: <strong>indecision itself
              has a cost.</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>While you deliberate, opportunities pass</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Mental energy spent worrying is not spent creating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Relationships stall when you cannot commit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Circumstances may decide for you&mdash;usually worse than you would have</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Sometimes the best trade-off is accepting a good-enough
              choice now rather than waiting for a perfect choice that may
              never come.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Trade-offs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood that ethical wealth comes at a
              price&mdash;but that price is worth paying:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;அறன்ஈனும் இன்பமும் ஈனும் திறனறிந்து<br />
              தீதின்றி வந்த பொருள்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Wealth acquired sinlessly yields
              both virtue and happiness.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              He also warned about wealth gained without ethics:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;அருளொடும் அன்பொடும் வாராப் பொருளாக்கம்<br />
              புல்லார் புரள விடல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Discard wealth obtained without
              love and grace.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Some things are not worth
              their cost. You can gain money while losing integrity. You
              can win arguments while losing relationships. The wise
              person counts all costs&mdash;including those to character
              and conscience&mdash;before deciding.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every choice has a cost&mdash;there is no such thing as a free lunch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Opportunity cost is what you give up by not choosing something else</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>When something looks free, ask: who pays and how?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Know your values&mdash;they make trade-offs clearer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Indecision itself has a cost&mdash;sometimes the biggest one</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about something you recently decided not to buy or not
              to do because it was &quot;too expensive.&quot; What was the
              opportunity cost of NOT doing it? Was that cost actually
              lower or higher than you thought?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to practise seeing
              costs on both sides of a decision.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/decisions/gathering-information"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Gathering Information
          </Link>
          <Link
            href="/foundations/decisions/solo-vs-group"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: When to Decide Alone vs Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
