import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breaking Down Problems - Careers Track - Aryash Guru',
  description: 'Learn to decompose complex challenges into manageable pieces. Master chunking, divide and conquer, and the MECE framework.',
};

export default function BreakingDownProblemsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Breaking Down Problems
          </h1>
          <p className="text-xl text-gray-600">
            The secret to solving any problem? Make it smaller.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              When faced with a complex challenge, our brains often freeze. The problem feels too big, too vague, too overwhelming.
              The most effective problem-solvers have learned to break big problems into smaller, solvable pieces.
              This skill turns paralysis into progress and transforms seemingly impossible challenges into manageable tasks.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Chunking: Break It Into Bite-Sized Pieces</strong>
                  <p className="mt-1">Your brain can only hold about 4-7 items in working memory. Break any problem into chunks small enough to fit. &quot;Launch a new product&quot; becomes &quot;identify target customer&quot;, &quot;define core features&quot;, &quot;set pricing&quot;, and so on.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Divide and Conquer</strong>
                  <p className="mt-1">Tackle sub-problems independently. Often, solving one part reveals solutions to others. Start with the piece you understand best, build momentum, and let insights compound.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>MECE: Mutually Exclusive, Collectively Exhaustive</strong>
                  <p className="mt-1">Consultants at McKinsey use this framework to ensure nothing is missed or double-counted. Each sub-problem should be distinct (no overlap) and together they should cover everything (no gaps).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Find the Constraint</strong>
                  <p className="mt-1">What is the bottleneck? Every system has one limiting factor. Identify it first, because solving that often unlocks everything else. Improving non-constraints wastes effort.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Work Backwards from the Goal</strong>
                  <p className="mt-1">Start with the end state and trace back. What needs to be true for the goal to be achieved? What needs to happen before that? Keep going until you reach actions you can take today.</p>
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
                  &quot;I&apos;m struggling with this problem: [describe your challenge]. Help me break it down into smaller, manageable sub-problems using the MECE framework. For each sub-problem, suggest a first step I could take.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s how I broke down a problem at work: [your breakdown]. Are my categories MECE? What am I missing or overlapping? What would a consultant do differently?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The greatest weapon against stress is our ability to choose one thought over another.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— William James (applies to choosing which sub-problem to tackle first)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Super Thinking</em> by Gabriel Weinberg &amp; Lauren McCann</li>
              <li>&#8226; <em>The McKinsey Way</em> by Ethan Rasiel</li>
              <li>&#8226; <em>The Goal</em> by Eliyahu Goldratt (on finding constraints)</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/problem-solving" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Problem-Solving
          </Link>
          <Link href="/careers/problem-solving/finding-root-causes" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
