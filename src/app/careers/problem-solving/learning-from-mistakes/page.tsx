import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning from Mistakes - Careers Track - Aryash Guru',
  description: 'Transform failures into valuable lessons. Learn blameless post-mortems, growth mindset, and how the best organisations turn setbacks into improvements.',
};

export default function LearningFromMistakesLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Learning from Mistakes
          </h1>
          <p className="text-xl text-gray-600">
            Failure is not the opposite of success. It is part of it.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Everyone makes mistakes. What separates great professionals from average ones is not the absence of failure but how they respond to it.
              Organisations that learn from failures outperform those that hide or punish them. Silicon Valley&apos;s &quot;fail fast&quot; culture is not about celebrating failure but about extracting maximum learning from every setback.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Blameless Post-Mortems</strong>
                  <p className="mt-1">Focus on systems, not people. Instead of &quot;Who messed up?&quot; ask &quot;What conditions allowed this to happen?&quot; When people feel safe admitting mistakes, you get honest analysis. When they fear punishment, you get cover-ups.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Separate Outcome from Process</strong>
                  <p className="mt-1">A good decision can still lead to a bad outcome due to factors outside your control. Judge your process, not just results. A poker player who makes the statistically correct bet is not wrong just because they lost that hand.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Growth Mindset</strong>
                  <p className="mt-1">Carol Dweck&apos;s research shows that believing abilities can be developed leads to greater achievement than believing they are fixed. See mistakes as data about what to improve, not evidence of permanent limitation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Document and Share Learnings</strong>
                  <p className="mt-1">Write down what went wrong and why. Share it with your team. The same mistake made twice is inexcusable. The goal is not to never fail but to never fail the same way twice.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Fix the System, Not Just the Symptom</strong>
                  <p className="mt-1">If a mistake happened because a process was confusing, clarify the process. If it happened because information was missing, improve communication. Make it harder for the same error to occur again.</p>
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
                  &quot;Help me run a blameless post-mortem on this situation: [describe what went wrong]. Guide me through analysing what happened, why it happened, and what systemic changes could prevent it in future. Focus on systems, not blame.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I made this mistake at work: [describe mistake]. Help me reframe this with a growth mindset. What can I learn from this? How can I turn this setback into an advantage? What specific improvements should I make?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;I have not failed. I&apos;ve just found 10,000 ways that won&apos;t work.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Thomas Edison</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Mindset</em> by Carol Dweck</li>
              <li>&#8226; <em>Black Box Thinking</em> by Matthew Syed</li>
              <li>&#8226; <em>The Art of Thinking Clearly</em> by Rolf Dobelli</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/problem-solving" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Problem-Solving
          </Link>
          <Link href="/careers/self-management/managing-your-time" className="btn-primary">
            Next: Self-Management →
          </Link>
        </nav>
      </div>
    </div>
  );
}
