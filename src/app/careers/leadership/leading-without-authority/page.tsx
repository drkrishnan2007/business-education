import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Without Authority - Careers Track - Business Wisdom',
  description: 'Learn to influence outcomes and guide teams even without a formal title. Master the art of leadership through service and trust.',
};

export default function LeadingWithoutAuthorityLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Leadership
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Leading Without Authority
          </h1>
          <p className="text-xl text-gray-600">
            You do not need a title to make a difference. True leadership is earned, not granted.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most of the impact you make in your career will happen when you have no formal authority over others.
              You will need to influence peers, convince senior stakeholders, and coordinate across teams where nobody reports to you.
              The ability to lead without authority is what separates those who wait for permission from those who create change.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Influence Over Power</strong>
                  <p className="mt-1">Power forces compliance; influence inspires commitment. People follow those who earn their respect through competence, integrity, and genuine care for others. Focus on building influence by being consistently helpful and reliable.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Earn Trust Through Actions</strong>
                  <p className="mt-1">Trust is the currency of leadership. Deliver on your commitments, admit mistakes openly, and always follow through. Small consistent actions build trust faster than grand gestures.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Lead Up and Sideways</strong>
                  <p className="mt-1">Leadership is not just about those below you. Learn to influence your peers by finding common ground. Learn to lead up by making your manager&apos;s job easier and presenting solutions, not just problems.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Service Leadership</strong>
                  <p className="mt-1">The most effective leaders ask &quot;How can I help?&quot; rather than &quot;How can I get what I want?&quot; When you focus on serving others&apos; needs, they naturally want to support you in return.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Take Initiative Thoughtfully</strong>
                  <p className="mt-1">Step into leadership vacuums where nobody is taking responsibility. But do it with humility - offer to help coordinate rather than demanding control. Ask permission when appropriate, but do not wait for it when action is clearly needed.</p>
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
                  &quot;You are a senior colleague who is sceptical about a new process I want to propose. I have no authority to implement it directly. I will pitch my idea and try to get your buy-in. Push back on my suggestions and make me earn your support through good arguments and understanding your concerns.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I just tried to influence a colleague without authority. Here is what I said: [paste your approach]. Rate my influence tactics. Did I focus too much on what I wanted? How could I have better understood their perspective?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Leadership is not about being in charge. Leadership is about taking care of those in your charge.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Simon Sinek, Start With Why</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Start With Why</em> by Simon Sinek</li>
              <li>&#8226; <em>Turn the Ship Around!</em> by L. David Marquet</li>
              <li>&#8226; <em>How to Win Friends and Influence People</em> by Dale Carnegie</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Leadership
          </Link>
          <Link href="/careers/leadership/building-credibility-early" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
