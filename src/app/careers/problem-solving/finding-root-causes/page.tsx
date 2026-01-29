import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finding Root Causes - Careers Track - Aryash Guru',
  description: 'Learn to dig beneath symptoms to find what is really causing problems. Master the 5 Whys, fishbone diagrams, and first principles thinking.',
};

export default function FindingRootCausesLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Finding Root Causes
          </h1>
          <p className="text-xl text-gray-600">
            Stop treating symptoms. Fix what is actually broken.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most people solve the wrong problem. They treat symptoms while the root cause keeps generating new problems.
              If your car keeps overheating, you can keep adding coolant (treating the symptom) or fix the leak (solving the root cause).
              Learning to dig deeper saves time, money, and frustration in every area of work and life.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>The 5 Whys Technique</strong>
                  <p className="mt-1">Ask &quot;why?&quot; five times to drill down to root causes. Why did the customer complain? The delivery was late. Why? The order was delayed in processing. Why? The system crashed. Why? It ran out of memory. Why? No one monitors server capacity. Now you have something actionable.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Fishbone Diagrams (Ishikawa)</strong>
                  <p className="mt-1">Map all possible causes in categories: People, Process, Equipment, Materials, Environment, Management. This visual tool helps teams see the full picture and ensures nothing is overlooked.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>First Principles Thinking</strong>
                  <p className="mt-1">Strip away assumptions to find fundamental truths. Instead of &quot;batteries are expensive because they always have been,&quot; Elon Musk asked: what are batteries made of, and what do those raw materials cost? This led to cheaper batteries.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Distinguish Correlation from Causation</strong>
                  <p className="mt-1">Just because two things happen together does not mean one causes the other. Ice cream sales and drowning both rise in summer, but ice cream does not cause drowning. Always verify the causal link before acting.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Look for Patterns</strong>
                  <p className="mt-1">One incident might be random. Three similar incidents suggest a systemic issue. Track problems over time to spot patterns that point to deeper causes.</p>
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
                  &quot;I&apos;m dealing with this recurring problem: [describe issue]. Walk me through a 5 Whys analysis. After each answer I give, prompt me with the next &apos;why&apos; until we find a root cause we can actually address.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Help me create a fishbone diagram for this problem: [your problem]. What categories of causes should I consider? What questions should I ask to uncover causes in each category?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;If I had an hour to solve a problem, I&apos;d spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Attributed to Albert Einstein</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Thinking, Fast and Slow</em> by Daniel Kahneman</li>
              <li>&#8226; <em>The Art of Thinking Clearly</em> by Rolf Dobelli</li>
              <li>&#8226; <em>The Lean Startup</em> by Eric Ries (on validated learning)</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/problem-solving" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Problem-Solving
          </Link>
          <Link href="/careers/problem-solving/making-decisions" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
