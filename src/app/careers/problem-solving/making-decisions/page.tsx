import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Making Decisions - Careers Track - Aryash Guru',
  description: 'Learn frameworks for making better decisions under uncertainty. Master decision matrices, reversibility thinking, and when to trust your gut.',
};

export default function MakingDecisionsLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/problem-solving" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Problem-Solving
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Making Decisions
          </h1>
          <p className="text-xl text-gray-600">
            Choose confidently, even when you cannot know everything.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Indecision is often worse than a wrong decision. The inability to choose leads to missed opportunities, frustrated teams, and stalled projects.
              Great decision-makers are not always right, but they know how to make good choices with incomplete information, move forward confidently, and adjust course when needed.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Reversible vs Irreversible Decisions</strong>
                  <p className="mt-1">Jeff Bezos calls these Type 1 and Type 2 decisions. Type 2 (reversible) decisions should be made quickly with 70% of the information you wish you had. Type 1 (irreversible) decisions deserve careful analysis. Most decisions are Type 2.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>The Decision Matrix</strong>
                  <p className="mt-1">List your options as rows and your criteria as columns. Score each option against each criterion. Weight the criteria by importance. This makes trade-offs visible and decisions more objective.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Pre-Mortem: Imagine Failure</strong>
                  <p className="mt-1">Before committing, imagine the decision failed spectacularly. Why did it fail? This surfaces risks you might have glossed over in your enthusiasm and helps you prepare contingency plans.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>The 10/10/10 Rule</strong>
                  <p className="mt-1">How will you feel about this decision 10 minutes from now? 10 months from now? 10 years from now? This framework helps distinguish short-term discomfort from long-term regret.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Know When to Trust Your Gut</strong>
                  <p className="mt-1">Intuition is powerful when you have deep experience in a domain. A firefighter&apos;s gut feeling is trained by thousands of fires. In unfamiliar territory, rely more on frameworks and data.</p>
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
                  &quot;I&apos;m trying to decide between [Option A] and [Option B]. Help me build a decision matrix. What criteria should I consider? After I score them, help me interpret the results and check my reasoning.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Run a pre-mortem on this decision I&apos;m about to make: [describe decision]. Imagine it&apos;s one year later and things went badly wrong. What are the most likely reasons it failed? What should I do now to prevent those failures?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Theodore Roosevelt</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Thinking, Fast and Slow</em> by Daniel Kahneman</li>
              <li>&#8226; <em>Decisive</em> by Chip &amp; Dan Heath</li>
              <li>&#8226; <em>Sources of Power</em> by Gary Klein (on intuition)</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/problem-solving" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Problem-Solving
          </Link>
          <Link href="/careers/problem-solving/learning-from-mistakes" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
