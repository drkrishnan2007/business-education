import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Win-Win Thinking - Careers Track - Business Wisdom',
  description: 'Learn to create outcomes where all parties benefit. Master interests vs positions, creative options, and relationship-preserving negotiation.',
};

export default function WinWinThinkingLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Negotiation
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Win-Win Thinking
          </h1>
          <p className="text-xl text-gray-600">
            The best negotiations leave both sides better off than when they started.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most people approach negotiation as a zero-sum game: for me to win, you must lose. But in professional settings, you negotiate repeatedly with the same people - colleagues, clients, suppliers. If you &quot;win&quot; by making others lose, you damage relationships and make future negotiations harder. Win-win thinking finds creative solutions that satisfy everyone&apos;s core needs, building trust and opening doors for future collaboration.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Expand the Pie</strong>
                  <p className="mt-1">Before dividing resources, look for ways to create more value. Two departments fighting over one budget might discover they can jointly apply for innovation funding. A buyer and seller stuck on price might find value in payment terms, volume commitments, or service additions. Ask: &quot;What could make this bigger?&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Focus on Interests, Not Positions</strong>
                  <p className="mt-1">Positions are what people say they want. Interests are why they want it. Two people might both want the corner office (position), but one wants natural light for wellbeing while the other wants status for client meetings (interests). Understanding interests opens creative solutions - perhaps a light therapy lamp and a bookable meeting room satisfy both.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Generate Multiple Options</strong>
                  <p className="mt-1">Don&apos;t negotiate over a single proposal. Generate at least three options before evaluating any. This prevents premature commitment and reveals creative possibilities. Ask: &quot;What if we...?&quot; and &quot;Have we considered...?&quot; Brainstorm before bargaining.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Preserve the Relationship</strong>
                  <p className="mt-1">Be hard on the problem, soft on the people. Separate the issue from the individual. Never attack someone&apos;s character or competence. Even when you disagree strongly, maintain respect. Say &quot;I see this differently&quot; rather than &quot;you&apos;re wrong.&quot; Today&apos;s opponent may be tomorrow&apos;s ally.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Use Objective Criteria</strong>
                  <p className="mt-1">When parties disagree, find external standards both can accept. Market rates, industry benchmarks, precedent, expert opinion, or fair procedures can break deadlocks. &quot;Let&apos;s look at what the market pays for this role&quot; is more persuasive than &quot;I deserve more.&quot; Objective criteria depersonalise the negotiation.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* AI Practice Section */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">🤖 Practice with AI</h2>
            <p className="text-gray-700 mb-4">
              Use these prompts with ChatGPT, Claude, or any AI assistant to practice this skill:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#5b21b6]">
                <p className="font-medium text-[#5b21b6] mb-2">Practice Prompt:</p>
                <p className="text-gray-700 italic">
                  &quot;I&apos;m negotiating with a colleague over who leads a high-profile project. We both want it for career development. Help me brainstorm five creative options that could satisfy both our underlying interests.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s a negotiation I&apos;m in: [describe situation and what each party wants]. Help me identify the underlying interests behind each position and suggest win-win solutions.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The reason you negotiate is to produce something better than the results you can obtain without negotiating.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Roger Fisher &amp; William Ury</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Getting to Yes</em> by Roger Fisher &amp; William Ury</li>
              <li>&#8226; <em>The 7 Habits of Highly Effective People</em> by Stephen Covey</li>
              <li>&#8226; <em>Bargaining for Advantage</em> by G. Richard Shell</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Negotiation
          </Link>
          <Link href="/careers/negotiation/negotiating-in-teams" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
