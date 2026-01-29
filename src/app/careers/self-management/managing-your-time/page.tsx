import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managing Your Time - Careers Track - Aryash Guru',
  description: 'Learn practical time management techniques that actually work. Master prioritisation, time blocking, and the art of saying no.',
};

export default function ManagingYourTimeLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Self-Management
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Managing Your Time
          </h1>
          <p className="text-xl text-gray-600">
            You can&apos;t manage time - you can only manage yourself within it.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Everyone has the same 24 hours, yet some people accomplish far more than others. The difference isn&apos;t talent or luck - it&apos;s how they prioritise and protect their time. In your career, the ability to focus on what matters most will determine your progress and your sanity.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>The Eisenhower Matrix</strong>
                  <p className="mt-1">Divide tasks into four quadrants: urgent &amp; important (do first), important but not urgent (schedule), urgent but not important (delegate), neither (eliminate). Most people spend too much time on urgent-but-unimportant tasks at the expense of important-but-not-urgent work.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Time Blocking</strong>
                  <p className="mt-1">Don&apos;t work from a to-do list alone. Assign specific blocks of time on your calendar for specific types of work. What gets scheduled gets done. Protect your deep work time like you would a meeting with your most important client.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>The Art of Saying No</strong>
                  <p className="mt-1">Every yes is a no to something else. When someone asks for your time, you&apos;re not just saying yes to their request - you&apos;re saying no to everything else you could do in that time. Be polite but protective of your priorities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Deep Work Over Shallow Work</strong>
                  <p className="mt-1">Deep work creates value; shallow work (emails, admin, meetings) consumes it. Cal Newport recommends scheduling at least 3-4 hours of uninterrupted deep work daily. Turn off notifications, close your email, and focus on one cognitively demanding task.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Weekly Review</strong>
                  <p className="mt-1">Spend 30 minutes each week reviewing what you accomplished, what fell through the cracks, and what your priorities should be for the week ahead. Without reflection, you&apos;ll keep making the same mistakes.</p>
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
                  &quot;I have these 10 tasks on my to-do list this week: [list tasks]. Help me categorise them using the Eisenhower Matrix and suggest which 3 I should focus on first.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s how I spent my time yesterday: [describe your day]. What percentage was deep work vs shallow work? What could I eliminate or batch together?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;What is important is seldom urgent and what is urgent is seldom important.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Dwight D. Eisenhower</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Deep Work</em> by Cal Newport</li>
              <li>&#8226; <em>Essentialism</em> by Greg McKeown</li>
              <li>&#8226; <em>The 7 Habits of Highly Effective People</em> by Stephen Covey</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Self-Management
          </Link>
          <Link href="/careers/self-management/building-resilience" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
