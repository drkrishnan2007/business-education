import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Negotiating Your Salary - Careers Track - Business Wisdom',
  description: 'Learn to negotiate your salary with confidence. Research market rates, frame your value, handle objections, and explore the full compensation package.',
};

export default function NegotiatingYourSalaryLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Negotiating Your Salary
          </h1>
          <p className="text-xl text-gray-600">
            Your salary sets the baseline for future earnings - negotiate it well.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most people accept the first salary offer they receive, leaving significant money on the table. Research shows that failing to negotiate your starting salary can cost you over half a million pounds over a career. Yet many feel uncomfortable asking - they worry about seeming greedy or losing the offer. The truth is, employers expect negotiation and often respect candidates who advocate for themselves professionally.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Research Market Rates First</strong>
                  <p className="mt-1">Never negotiate blind. Use Glassdoor, LinkedIn Salary, industry surveys, and your network to understand what the role pays. Know the range for your experience level, location, and industry. This data gives you confidence and credibility when you name your number.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Timing Is Everything</strong>
                  <p className="mt-1">The best time to negotiate is after you have an offer but before you accept. At this point, they&apos;ve decided they want you - you have maximum leverage. During interviews, deflect salary questions with: &quot;I&apos;d like to learn more about the role before discussing compensation.&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Frame Your Value, Not Your Needs</strong>
                  <p className="mt-1">Don&apos;t say &quot;I need more money because my rent is high.&quot; Instead, focus on the value you bring: &quot;Based on my experience with X and the results I&apos;ve delivered in Y, I believe a salary of Z better reflects my contribution.&quot; Make it about what you&apos;re worth, not what you want.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Handle Objections Gracefully</strong>
                  <p className="mt-1">When they push back, don&apos;t fold immediately. Ask: &quot;What would it take to get to that number?&quot; or &quot;Is there flexibility in other areas?&quot; If they cite budget constraints, explore a review in 6 months or a signing bonus. Stay calm and collaborative, never adversarial.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Negotiate the Full Package</strong>
                  <p className="mt-1">Salary is just one component. Consider bonuses, equity, pension contributions, holiday days, flexible working, professional development budget, and job title. Sometimes companies have more flexibility on these than base salary. A lower salary with better equity or more holiday might be the better deal.</p>
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
                  &quot;Roleplay as a hiring manager. You&apos;ve just offered me a salary of £45,000 for a marketing manager role. I want to negotiate for £52,000. Let me practice my negotiation and give me feedback on my approach.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s how I plan to negotiate my salary: [describe your approach]. What am I doing well? What objections should I prepare for? How could I strengthen my case?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;He who has learned to disagree without being disagreeable has discovered the most valuable secret of negotiation.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Chris Voss</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Split the Difference</em> by Chris Voss</li>
              <li>&#8226; <em>Getting to Yes</em> by Roger Fisher &amp; William Ury</li>
              <li>&#8226; <em>Bargaining for Advantage</em> by G. Richard Shell</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Negotiation
          </Link>
          <Link href="/careers/negotiation/negotiating-workload-deadlines" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
