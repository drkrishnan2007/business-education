import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giving & Receiving Feedback - Careers Track - Aryash Guru',
  description: 'Learn to give constructive feedback that helps people improve and receive feedback gracefully. Essential skills for professional growth.',
};

export default function GivingReceivingFeedbackLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Giving &amp; Receiving Feedback
          </h1>
          <p className="text-xl text-gray-600">
            Growth requires feedback. Most people avoid giving it honestly.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Feedback is the breakfast of champions. Without honest feedback, you can&apos;t improve.
              But most people either avoid giving feedback entirely or deliver it so harshly that
              it damages relationships. Learning to give feedback that helps people grow—and to receive
              feedback without becoming defensive—is one of the most valuable skills you can develop.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Be Specific, Not General</strong>
                  <p className="mt-1">&quot;Your presentation was good&quot; tells someone nothing. &quot;Your opening story grabbed my attention and your data was clear&quot; gives them something to repeat.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Focus on Behaviour, Not Character</strong>
                  <p className="mt-1">&quot;You interrupted three times in that meeting&quot; is feedback they can act on. &quot;You&apos;re rude&quot; is a character judgment that puts them on the defensive.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Use the SBI Model</strong>
                  <p className="mt-1">Situation-Behavior-Impact: &quot;In yesterday&apos;s meeting (situation), when you presented without checking the numbers (behavior), it made us look unprepared to the client (impact).&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Receive Without Defending</strong>
                  <p className="mt-1">When receiving feedback, resist the urge to explain or justify. Listen, ask clarifying questions, and say &quot;thank you.&quot; Process it later before deciding what to act on.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Say Thank You—Even When It Stings</strong>
                  <p className="mt-1">Someone giving you honest feedback is taking a risk to help you grow. Even if you disagree, thank them for the courage it took. You can decide later what to do with it.</p>
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
                  &quot;I need to give feedback to a colleague who [situation]. Help me structure it using the SBI model. Then roleplay as my colleague receiving it so I can practice.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Someone gave me this feedback: [feedback]. Help me understand what they might really mean and how I could act on it.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;We judge ourselves by our intentions, but others judge us by our behaviour.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Stephen Covey, The 7 Habits of Highly Effective People</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Thanks for the Feedback</em> by Douglas Stone &amp; Sheila Heen</li>
              <li>&#8226; <em>Radical Candor</em> by Kim Scott</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Communication
          </Link>
          <Link href="/careers/communication/difficult-conversations" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
