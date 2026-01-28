import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Trust and Reputation - Business Wisdom',
  description: 'Trust takes years to build, seconds to break, and forever to repair. In business, reputation is your most valuable asset.',
};

export default function BuildingTrustPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/marketing" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Marketing Fundamentals
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Building Trust and Reputation
          </h1>
          <p className="text-xl text-gray-600">
            Trust takes years to build, seconds to break, and forever to repair.
            In business, reputation is your most valuable asset.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Trust Matters More Than Ever */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Trust Matters More Than Ever
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In our grandparents&apos; time, choices were limited. You bought from
              the one shop in your village, whether you trusted them or not. There
              was no alternative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, everything has changed:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Customers have infinite choices—they can buy from anyone, anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Information spreads instantly—one bad review can reach thousands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Switching costs are low—unhappy customers simply leave</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>People are overwhelmed with options—they use trust as a filter</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-lg font-serif text-[#5b21b6] text-center">
                When everything else is equal, trust decides who wins.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A business that people trust will survive competition, mistakes, and
              difficult times. A business without trust is always one bad day away
              from collapse.
            </p>
          </section>

          {/* Section 2: The Slow Path vs The Quick Path */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Slow Path vs The Quick Path
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are two ways to build a business:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Quick Path
                </h3>
                <p className="text-gray-600 mb-2">
                  Promise everything, deliver little. Use tricks to get customers.
                  Make sales now, worry about reputation later.
                </p>
                <p className="text-gray-600 italic">
                  Result: Short-term gains, long-term destruction.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Slow Path
                </h3>
                <p className="text-gray-600 mb-2">
                  Promise only what you can deliver. Build relationships before
                  transactions. Invest in trust before profit.
                </p>
                <p className="text-gray-600 italic">
                  Result: Slow start, sustainable success.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The quick path is tempting. You see results immediately. But every
              shortcut borrows from the future—and the future always collects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The businesses that last generations—the ones your grandchildren will
              know—all chose the slow path. Trust compounds over time, just like
              money in a savings account.
            </p>
          </section>

          {/* Section 3: Signals of Trust */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Signals of Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              How do people decide whether to trust a business? They look for signals:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Consistency
                </h3>
                <p className="text-gray-600">
                  Does this business deliver the same quality every time? The chai
                  that tastes the same today as it did last week builds trust. The
                  chai that varies wildly creates doubt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Does this business share information openly? Hidden fees, unclear
                  terms, and secrecy breed suspicion. Clear pricing and honest
                  communication build confidence.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Social Proof
                </h3>
                <p className="text-gray-600">
                  What do other customers say? Reviews, testimonials, and word of
                  mouth from real people carry more weight than any advertisement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Credentials
                </h3>
                <p className="text-gray-600">
                  What qualifications or experience does this business have?
                  Certifications, years in business, and expertise all signal
                  reliability.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  How They Handle Problems
                </h3>
                <p className="text-gray-600">
                  What happens when something goes wrong? A business that admits
                  mistakes and fixes them earns more trust than one that pretends
                  to be perfect.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every interaction with a customer either builds trust or erodes it.
              There is no neutral ground.
            </p>
          </section>

          {/* Section 4: Common Trust Destroyers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Common Trust Destroyers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is hard to build and easy to destroy. Watch out for these
              common mistakes:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Overpromising:</strong> Saying you can do something you cannot, then disappointing the customer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Hiding problems:</strong> Pretending everything is fine when it is not, until the customer discovers the truth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Inconsistency:</strong> Delivering great service sometimes and poor service other times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Blaming others:</strong> Making excuses instead of taking responsibility when things go wrong</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Treating customers differently:</strong> Being nice before the sale, cold after</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Hidden costs:</strong> Surprising customers with fees they did not expect</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              One broken promise can undo years of trust-building. The repair is
              always harder than the break.
            </p>
          </section>

          {/* Section 5: Reputation in the Digital Age */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reputation in the Digital Age
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, your reputation is not just what your neighbours say about
              you. It is searchable, shareable, and permanent:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Reviews persist:</strong> A negative review from 2015 can still appear at the top of search results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Complaints travel:</strong> An unhappy customer can tell thousands of people with one post</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Everything is recorded:</strong> Screenshots, emails, messages—nothing disappears</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>People research:</strong> Most customers search online before buying anything significant</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              But this works both ways. Good reputation spreads too:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Positive reviews build credibility automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Happy customers recommend you in WhatsApp groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Good stories get shared and reshared</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The digital age amplifies everything. Your reputation—good or bad—reaches
              further than ever before.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Reputation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Thirukkural, written over 2,000 years ago, contains timeless
              wisdom about reputation and conduct:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;உடையது விளம்பேல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do not boast about what you have.&quot;
              (Avvaiyar)
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;நன்றி மறப்பது நன்றன்று நன்றல்லது<br />
              அன்றே மறப்பது நன்று.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Forgetting kindness received is not good.
              But forgetting harm done to you immediately is good.&quot; (Kural 108)
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;ஒப்புரவினால் வருவது உயர்வு&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Helping others brings true elevation.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Let your work speak, not your words.
              Remember those who helped you, but do not hold grudges against those
              who wronged you. Your reputation grows from what you give, not from
              what you claim. These principles have not changed in 2,000 years—and
              they will not change in the next 2,000.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>In a world of infinite choices, trust is the filter that decides who wins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The slow path of building genuine trust beats the quick path of shortcuts every time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trust signals: consistency, transparency, social proof, credentials, and how you handle problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trust destroyers: overpromising, hiding problems, inconsistency, blaming others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>In the digital age, reputation is amplified—good and bad travel further than ever</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a brand or business you trust completely—one where you would
              recommend them to anyone without hesitation. What did they do to earn
              that level of trust? How long did it take?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to understand that deep trust
              is built through many small consistent actions over time, not through
              grand gestures.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/marketing/power-of-stories"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: The Power of Stories
          </Link>
          <Link
            href="/topics/marketing/spreading-the-word"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Spreading the Word
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
