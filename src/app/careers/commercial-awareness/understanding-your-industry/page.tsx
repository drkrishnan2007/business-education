import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Industry - Careers Track - Business Wisdom',
  description: 'Learn the competitive landscape, market trends, and disruption risks in your sector. Essential industry knowledge for career advancement.',
};

export default function UnderstandingYourIndustryLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Commercial Awareness
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Understanding Your Industry
          </h1>
          <p className="text-xl text-gray-600">
            Your company doesn&apos;t exist in isolation. It operates within an industry with its own rules, players, and forces.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              A company can do everything right internally and still fail if it doesn&apos;t understand its industry. Competitors, suppliers, customers, new entrants, and substitutes all shape what&apos;s possible. Professionals who understand industry dynamics can anticipate changes, identify threats before they become crises, and spot opportunities that others miss. This knowledge makes you valuable beyond your immediate role.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Know Your Competitors</strong>
                  <p className="mt-1">Who else does what your company does? What are they good at? Where do they fall short? How do they price their offerings? Understanding competitors isn&apos;t about paranoia - it&apos;s about knowing where your company fits in the landscape and what makes you distinctive.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Follow Market Trends</strong>
                  <p className="mt-1">Every industry is shaped by larger forces: technology, regulation, demographics, consumer behaviour, economic cycles. What trends are affecting your industry? Is it growing or shrinking? Consolidating or fragmenting? Moving online? Going global? Being automated? Read industry publications and follow thought leaders to stay current.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Understand Disruption Risks</strong>
                  <p className="mt-1">The biggest threats often come from outside your traditional competitors. Blockbuster wasn&apos;t killed by another video rental chain - it was killed by Netflix. What could disrupt your industry? New technology? Changing customer expectations? Regulatory shifts? The companies that survive are those that see disruption coming and adapt.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Map the Value Chain</strong>
                  <p className="mt-1">Every industry has a value chain - the sequence of activities from raw materials to end customer. Where does your company sit in this chain? Who are your suppliers? Who are your customers&apos; customers? Understanding the full chain helps you see where value is created and where it might shift.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Porter&apos;s Five Forces</strong>
                  <p className="mt-1">A classic framework: industry profitability is determined by five forces - rivalry among existing competitors, threat of new entrants, threat of substitutes, bargaining power of suppliers, and bargaining power of buyers. Analyse these for your industry to understand what drives profitability and where the pressure points are.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* AI Practice Section */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Practice with AI</h2>
            <p className="text-gray-700 mb-4">
              Use these prompts with ChatGPT, Claude, or any AI assistant to practice this skill:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#5b21b6]">
                <p className="font-medium text-[#5b21b6] mb-2">Practice Prompt:</p>
                <p className="text-gray-700 italic">
                  &quot;Analyse the [your industry] industry using Porter&apos;s Five Forces. Who are the main competitors? What are the barriers to entry? What substitutes exist? How much power do suppliers and buyers have?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;What are the three biggest trends that will shape the [your industry] industry over the next five years? What disruption risks should companies in this sector be preparing for?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The companies that get disrupted are those that focus on competitors rather than customers.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">&mdash; Clayton Christensen, The Innovator&apos;s Dilemma</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Innovator&apos;s Dilemma</em> by Clayton Christensen</li>
              <li>&#8226; <em>Blue Ocean Strategy</em> by W. Chan Kim &amp; Ren&eacute;e Mauborgne</li>
              <li>&#8226; <em>Competitive Strategy</em> by Michael Porter</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Back to Commercial Awareness
          </Link>
          <Link href="/careers/commercial-awareness/thinking-like-a-business-owner" className="btn-primary">
            Next Lesson &rarr;
          </Link>
        </nav>
      </div>
    </div>
  );
}
