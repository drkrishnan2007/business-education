import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When NOT to Use AI - Careers Track - Business Wisdom',
  description: 'Learn to recognise situations where human judgement is essential. Understand ethical boundaries, confidentiality, and when AI use is inappropriate.',
};

export default function WhenNotToUseAILesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← AI Literacy
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            When NOT to Use AI
          </h1>
          <p className="text-xl text-gray-600">
            Knowing when to put the tool down is as important as knowing how to use it.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              AI literacy isn&apos;t just about using AI well—it&apos;s about knowing when not to use it at all.
              Some situations call for human judgement, human connection, or human accountability. Using
              AI inappropriately can damage relationships, breach confidentiality, create legal risk, or
              simply rob you of learning opportunities. The wisest AI users know its boundaries.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Never Share Confidential Information</strong>
                  <p className="mt-1">Don&apos;t paste confidential documents, customer data, proprietary code, or personal information into AI tools. Many AI systems use inputs for training or store conversations. Ask yourself: &quot;Would I be comfortable if this appeared in tomorrow&apos;s news?&quot; If not, don&apos;t share it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Don&apos;t Automate High-Stakes Decisions</strong>
                  <p className="mt-1">AI shouldn&apos;t make decisions that significantly affect people&apos;s lives: hiring, firing, medical diagnoses, legal judgements, financial advice. AI can inform these decisions, but a human must make them. You can&apos;t outsource accountability to a machine.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Don&apos;t Use AI for Emotional Situations</strong>
                  <p className="mt-1">Delivering bad news, offering condolences, handling complaints from upset customers, or having difficult conversations—these require human empathy. AI-generated sympathy is hollow. People can tell when they&apos;re getting a bot, and it damages trust.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Preserve Your Learning Opportunities</strong>
                  <p className="mt-1">If you&apos;re supposed to be learning a skill, using AI to bypass the work defeats the purpose. The struggle is where learning happens. Early in your career especially, doing the hard work yourself builds capabilities AI can&apos;t give you. Don&apos;t outsource your own development.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Respect Ethical Boundaries</strong>
                  <p className="mt-1">Don&apos;t use AI to deceive people—whether that&apos;s faking academic work, impersonating others, creating misleading content, or manipulating people. The same ethical principles that apply to your work apply to AI-assisted work. If it would be wrong to do manually, it&apos;s wrong to do with AI.</p>
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
                  &quot;I&apos;m going to describe some workplace scenarios. For each one, tell me whether AI assistance is appropriate, inappropriate, or somewhere in between—and why. Ready? Scenario 1: [describe situation]&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;What are the most common mistakes people make when using AI at work? What boundaries should I set for myself? Help me create a personal policy for appropriate AI use.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Just because we can doesn&apos;t mean we should.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Common ethical principle</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Co-Intelligence: Living and Working with AI</em> by Ethan Mollick</li>
              <li>&#8226; <em>The Alignment Problem</em> by Brian Christian</li>
              <li>&#8226; <em>AI Snake Oil</em> by Arvind Narayanan &amp; Sayash Kapoor</li>
            </ul>
          </section>

          {/* Completion Banner */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white">
            <h2 className="text-2xl font-serif mb-4">AI Literacy Complete!</h2>
            <p className="mb-4 opacity-90">
              You&apos;ve finished all 4 lessons in the AI Literacy topic. You now understand what AI
              can and can&apos;t do, how to prompt effectively, how to review AI work critically, and
              when human judgement should take precedence.
            </p>
            <p className="mb-4 opacity-90">
              Congratulations! You&apos;ve completed the entire Careers Track. You&apos;ve built a
              foundation in communication, critical thinking, problem solving, collaboration,
              self-management, creativity, leadership, commercial awareness, negotiation, networking,
              and now AI literacy.
            </p>
            <p className="opacity-90">
              These skills compound over time. Keep practising, stay curious, and remember: wisdom
              isn&apos;t knowing everything—it&apos;s knowing what you don&apos;t know and being
              willing to learn.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to AI Literacy
          </Link>
          <Link href="/careers" className="btn-primary">
            Back to Careers Track →
          </Link>
        </nav>
      </div>
    </div>
  );
}
