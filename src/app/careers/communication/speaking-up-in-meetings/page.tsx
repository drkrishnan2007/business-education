import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaking Up in Meetings - Careers Track - Aryash Guru',
  description: 'Learn to contribute effectively in meetings and make your voice heard. Essential skills for career visibility and growth.',
};

export default function SpeakingUpInMeetingsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Speaking Up in Meetings
          </h1>
          <p className="text-xl text-gray-600">
            Ideas unshared are ideas lost. Learn to make your voice heard.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Your visibility at work depends on being seen and heard. Ideas kept to yourself
              don&apos;t help the team and don&apos;t advance your career. Many talented people stay
              invisible because they wait for the &quot;perfect&quot; moment to speak up. The truth is:
              contributing in meetings is a skill you can practice and improve.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Prepare One Point to Make</strong>
                  <p className="mt-1">Before every meeting, identify one thing you could contribute. Review the agenda, think about what you know, and prepare a brief comment or question.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Use the &quot;Yes, and...&quot; Technique</strong>
                  <p className="mt-1">Build on others&apos; ideas rather than contradicting them. &quot;Yes, and we could also consider...&quot; is more collaborative than &quot;No, but...&quot; and makes people receptive to your input.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Ask Questions to Add Value</strong>
                  <p className="mt-1">If you don&apos;t have a statement to make, ask a thoughtful question. &quot;Have we considered how this affects the customer?&quot; shows engagement and can shift the conversation productively.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Keep It Brief</strong>
                  <p className="mt-1">Respect everyone&apos;s time. Make your point in 30 seconds or less. The most influential contributors often speak less frequently but more memorably.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Time Your Contribution</strong>
                  <p className="mt-1">Speak early in the meeting when topics are fresh. Waiting too long often means someone else will make your point, or the conversation will move on.</p>
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
                  &quot;You&apos;re running a meeting about [topic]. I&apos;m a junior team member. After you share the meeting topic, I&apos;ll practice contributing. Give me feedback on whether my point was clear, well-timed, and valuable.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I want to raise this point in tomorrow&apos;s meeting: [point]. Help me make it more concise and impactful.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The single biggest problem in communication is the illusion that it has taken place.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— George Bernard Shaw</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Crucial Conversations</em> by Patterson, Grenny, McMillan &amp; Switzler</li>
              <li>&#8226; <em>How to Win Friends and Influence People</em> by Dale Carnegie</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Communication
          </Link>
          <Link href="/careers/communication/giving-receiving-feedback" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
