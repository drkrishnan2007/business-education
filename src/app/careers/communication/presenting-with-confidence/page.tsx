import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presenting with Confidence - Careers Track - Aryash Guru',
  description: 'Learn to deliver compelling presentations that engage and persuade. Build confidence in public speaking for career success.',
};

export default function PresentingWithConfidenceLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Communication
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 5 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Presenting with Confidence
          </h1>
          <p className="text-xl text-gray-600">
            Leadership visibility requires clear communication to groups.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Presentations are career accelerators. They give you visibility with senior leaders,
              establish your expertise, and influence decisions. Fear of public speaking is common,
              but presenting well is a learnable skill. The executives you admire weren&apos;t born
              confident speakers—they practiced until it became natural.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Know Your One Key Message</strong>
                  <p className="mt-1">If your audience remembers only one thing, what should it be? Build your entire presentation around that single message. Everything else is supporting detail.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Structure with PREP</strong>
                  <p className="mt-1">Point-Reason-Example-Point. State your point, explain why it matters, give a concrete example, then restate your point. This simple structure keeps you organised and your audience engaged.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Practice Out Loud</strong>
                  <p className="mt-1">Reading slides silently is not practice. Say the words aloud, standing up, as if presenting. Record yourself. It will feel awkward, but it&apos;s the only way to improve.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Pause Instead of Filler Words</strong>
                  <p className="mt-1">&quot;Um,&quot; &quot;like,&quot; and &quot;you know&quot; undermine your credibility. When you need to think, pause. Silence feels longer to you than to your audience, and pauses make you seem thoughtful.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Connect with the Audience</strong>
                  <p className="mt-1">Make eye contact with individuals, not the back wall. Ask rhetorical questions. Use &quot;you&quot; language: &quot;You might be wondering...&quot; The best presentations feel like conversations, not monologues.</p>
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
                  &quot;I need to present [topic] to [audience] for [duration]. Help me structure it using PREP format. Then I&apos;ll present it to you and you give feedback on clarity and engagement.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s my presentation outline: [outline]. Make it more engaging and ensure my key message is clear.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;They may forget what you said, but they will never forget how you made them feel.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Maya Angelou</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Talk Like TED</em> by Carmine Gallo</li>
              <li>&#8226; <em>Made to Stick</em> by Chip Heath &amp; Dan Heath</li>
            </ul>
          </section>

          {/* Completion Banner */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white">
            <h2 className="text-2xl font-serif mb-4">Communication Complete!</h2>
            <p className="mb-4 opacity-90">
              You&apos;ve finished all 5 lessons in the Communication topic. You now have practical
              frameworks for writing clear emails, speaking up in meetings, giving and receiving
              feedback, handling difficult conversations, and presenting with confidence.
            </p>
            <p className="opacity-90">
              Ready for the next challenge? Problem Solving teaches you how to break down complex
              issues and find solutions systematically.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Communication
          </Link>
          <Link href="/careers/problem-solving/breaking-down-problems" className="btn-primary">
            Next Topic: Problem Solving →
          </Link>
        </nav>
      </div>
    </div>
  );
}
