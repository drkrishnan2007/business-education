import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Resilience - Careers Track - Aryash Guru',
  description: 'Learn to bounce back from setbacks and maintain your performance under pressure. Build mental toughness for long-term career success.',
};

export default function BuildingResilienceLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Building Resilience
          </h1>
          <p className="text-xl text-gray-600">
            Setbacks are inevitable. How you respond to them defines your career.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Careers are long, and setbacks are guaranteed - a failed project, a missed promotion, a difficult colleague, a market downturn. Resilience isn&apos;t about avoiding these challenges; it&apos;s about recovering from them faster and learning from each experience. The most successful people aren&apos;t those who never fail - they&apos;re those who fail better.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Separate Facts from Narrative</strong>
                  <p className="mt-1">When setbacks occur, we often create catastrophic stories. Distinguish between what actually happened (&quot;I didn&apos;t get the promotion&quot;) and the story you&apos;re telling yourself (&quot;I&apos;ll never succeed here&quot;). Facts are manageable; spiralling narratives are not.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Reframe Challenges as Growth</strong>
                  <p className="mt-1">Carol Dweck&apos;s research on growth mindset shows that viewing abilities as developable leads to greater achievement. Instead of &quot;I failed&quot;, try &quot;I learned what doesn&apos;t work&quot;. Every setback contains information that can make you better.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Build Your Recovery Rituals</strong>
                  <p className="mt-1">Know what helps you bounce back. For some it&apos;s exercise, for others it&apos;s talking to a trusted friend, journaling, or simply sleeping on it. Have these tools ready before you need them.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Focus on What You Control</strong>
                  <p className="mt-1">The Stoics called this the &quot;dichotomy of control&quot;. You can&apos;t control market conditions, other people&apos;s decisions, or random events. You can control your effort, your attitude, and your response. Direct your energy accordingly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Maintain Perspective</strong>
                  <p className="mt-1">Ask yourself: Will this matter in five years? Often our biggest professional crises are barely remembered a year later. Zoom out. Your career is a marathon, not a sprint, and this moment is just one mile.</p>
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
                  &quot;I just experienced this setback at work: [describe situation]. Help me separate the facts from the story I&apos;m telling myself, and identify 3 possible lessons or opportunities in this situation.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Act as a coach. I&apos;m feeling [emotion] about [situation]. Ask me questions to help me gain perspective and focus on what I can control.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and it has been given to us in generous measure for accomplishing the greatest things.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Seneca, On the Shortness of Life</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Mindset: The New Psychology of Success</em> by Carol Dweck</li>
              <li>&#8226; <em>The Obstacle Is the Way</em> by Ryan Holiday</li>
              <li>&#8226; <em>Option B</em> by Sheryl Sandberg &amp; Adam Grant</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Self-Management
          </Link>
          <Link href="/careers/self-management/staying-adaptable" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
