import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managing Your Energy - Careers Track - Aryash Guru',
  description: 'Learn to sustain high performance by understanding your personal rhythms. Manage your energy, not just your time.',
};

export default function ManagingYourEnergyLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 5 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Managing Your Energy
          </h1>
          <p className="text-xl text-gray-600">
            Time is finite. Energy is renewable - if you know how to manage it.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Time management only gets you so far. You can have a perfectly organised schedule but still accomplish little if your energy is depleted. High performers understand that sustained excellence requires managing physical, emotional, and mental energy - not just hours. Burnout isn&apos;t just about working too much; it&apos;s about spending too much energy without enough recovery.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Ultradian Rhythms</strong>
                  <p className="mt-1">Your body operates in 90-120 minute cycles of high and low alertness throughout the day. Work with these rhythms, not against them. Do your most demanding work during peak energy periods, and take genuine breaks when energy dips. Pushing through fatigue has diminishing returns.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Recovery Is Productive</strong>
                  <p className="mt-1">Rest isn&apos;t the absence of work - it&apos;s an investment in future performance. Athletes understand this instinctively. Sleep, exercise, nutrition, and breaks aren&apos;t luxuries; they&apos;re the foundation of sustained high performance. Skipping them is borrowing from tomorrow.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Know Your Peak Hours</strong>
                  <p className="mt-1">Everyone has times of day when they&apos;re naturally sharper. For most people, this is 2-4 hours in the morning. Identify your peak and protect it fiercely for your most important cognitive work. Don&apos;t waste peak hours on emails and meetings.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Manage Emotional Energy</strong>
                  <p className="mt-1">Negative emotions - frustration, anxiety, resentment - drain energy. Positive engagement - purpose, connection, accomplishment - generates it. Notice what energises you and what depletes you. Adjust your work and relationships accordingly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Build Energy-Generating Habits</strong>
                  <p className="mt-1">Small daily habits compound. Seven hours of sleep, 30 minutes of movement, a proper lunch break, one meaningful conversation. These aren&apos;t indulgences - they&apos;re the practices that separate sustainable performers from those who burn bright and then burn out.</p>
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
                  &quot;Here&apos;s my typical workday: [describe your schedule]. Help me redesign it to align my most important tasks with my likely peak energy times, and build in recovery periods.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I often feel exhausted by 3pm. Here&apos;s what my morning looks like: [describe]. What changes would help me sustain energy throughout the day?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Energy, not time, is the fundamental currency of high performance.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Jim Loehr &amp; Tony Schwartz, The Power of Full Engagement</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Power of Full Engagement</em> by Jim Loehr &amp; Tony Schwartz</li>
              <li>&#8226; <em>When: The Scientific Secrets of Perfect Timing</em> by Daniel Pink</li>
              <li>&#8226; <em>Atomic Habits</em> by James Clear</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Self-Management
          </Link>
          <Link href="/careers/critical-thinking/questioning-information" className="btn-primary">
            Next: Critical Thinking →
          </Link>
        </nav>
      </div>
    </div>
  );
}
