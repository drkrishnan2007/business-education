import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Difficult Conversations - Careers Track - Aryash Guru',
  description: 'Learn to navigate challenging discussions with confidence and empathy. Handle workplace conflicts and tough conversations professionally.',
};

export default function DifficultConversationsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Difficult Conversations
          </h1>
          <p className="text-xl text-gray-600">
            Avoiding hard conversations makes problems worse. Learn to face them.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              The conversations you&apos;re avoiding are often the ones you most need to have.
              Whether it&apos;s asking for a raise, addressing a colleague&apos;s behaviour, or disagreeing
              with your boss, difficult conversations are unavoidable in professional life.
              The cost of avoidance is high: resentment builds, problems worsen, and relationships suffer.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Separate Intent from Impact</strong>
                  <p className="mt-1">Someone&apos;s intent and the impact of their actions are different things. They may not have meant to upset you, but it&apos;s still valid to address how their behaviour affected you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Start with Shared Goals</strong>
                  <p className="mt-1">Begin by establishing common ground. &quot;We both want this project to succeed&quot; or &quot;I know we both care about the team&quot; creates a collaborative frame instead of an adversarial one.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Use &quot;I&quot; Statements</strong>
                  <p className="mt-1">&quot;I felt frustrated when the deadline was missed&quot; is less accusatory than &quot;You missed the deadline.&quot; &quot;I&quot; statements describe your experience without assigning blame.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Listen to Understand, Not Respond</strong>
                  <p className="mt-1">When they speak, don&apos;t plan your rebuttal. Actually listen. Ask questions. You might learn something that changes your perspective entirely.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Acknowledge Emotions</strong>
                  <p className="mt-1">Don&apos;t ignore the emotional dimension. &quot;I can see this is frustrating&quot; or &quot;I understand this is hard to hear&quot; shows empathy and often de-escalates tension.</p>
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
                  &quot;I need to have a difficult conversation with [who] about [what]. Help me plan what to say, anticipate their reaction, and practice the conversation with you playing their role.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;This conversation went badly: [describe what happened]. Help me understand what went wrong and how I could approach it differently.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;In the middle of difficulty lies opportunity.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Albert Einstein (often quoted in Crucial Conversations)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Difficult Conversations</em> by Douglas Stone, Bruce Patton &amp; Sheila Heen</li>
              <li>&#8226; <em>Crucial Conversations</em> by Patterson, Grenny, McMillan &amp; Switzler</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Communication
          </Link>
          <Link href="/careers/communication/presenting-with-confidence" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
