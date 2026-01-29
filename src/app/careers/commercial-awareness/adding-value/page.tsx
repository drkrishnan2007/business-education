import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adding Value - Careers Track - Business Wisdom',
  description: 'Learn to focus on impact over activity. Solve problems proactively and connect your work to revenue and cost outcomes.',
};

export default function AddingValueLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Commercial Awareness
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Adding Value (Not Just Doing Tasks)
          </h1>
          <p className="text-xl text-gray-600">
            Being busy isn&apos;t the same as being valuable. Impact matters more than activity.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Many employees confuse effort with contribution. They work hard, complete their tasks, and wonder why they don&apos;t advance. The truth is: organisations reward value creation, not activity. The most valued employees aren&apos;t necessarily the busiest - they&apos;re the ones who solve problems that matter, identify opportunities before they&apos;re obvious, and consistently make things better. Learning to add value is the ultimate career skill.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Impact Over Activity</strong>
                  <p className="mt-1">Stop measuring yourself by hours worked or tasks completed. Start measuring yourself by outcomes created. What actually changed because of your work? Did revenue go up? Did costs go down? Did customers become happier? Did something become faster, better, or cheaper? Focus on the result, not the effort.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Solve Problems Proactively</strong>
                  <p className="mt-1">Average employees wait to be told what to do. Valuable employees identify problems and solve them - often before anyone else notices. Look for friction, inefficiency, customer complaints, repeated mistakes. Then fix them. Don&apos;t wait for permission to make things better.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Connect Your Work to Money</strong>
                  <p className="mt-1">Every valuable action either increases revenue (more sales, better retention, higher prices) or reduces costs (less waste, fewer errors, faster processes). Learn to trace the line from what you do to these financial outcomes. When you can articulate how your work affects the bottom line, you become harder to replace and easier to promote.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Look for Leverage Points</strong>
                  <p className="mt-1">Some actions have disproportionate impact. Teaching someone a skill multiplies your effect. Creating a template that gets reused saves hours across the organisation. Fixing a root cause prevents dozens of downstream problems. Find the leverage points where small efforts create big results.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Make Your Value Visible</strong>
                  <p className="mt-1">Creating value isn&apos;t enough - you need to communicate it. This isn&apos;t bragging; it&apos;s ensuring your contributions are recognised. Keep track of your wins. Quantify your impact where possible. Share successes appropriately. If you don&apos;t tell your story, no one else will.</p>
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
                  &quot;Here are the main tasks I do in my job: [list your responsibilities]. Help me identify which ones have the highest impact on revenue or cost savings. Where could I shift my focus to add more value?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I want to articulate my value to my manager. Here are three things I&apos;ve accomplished recently: [describe them]. Help me frame these in terms of business impact. How can I quantify the value I&apos;ve created?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The best way to predict the future is to create it.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">&mdash; Peter Drucker</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Innovator&apos;s Dilemma</em> by Clayton Christensen</li>
              <li>&#8226; <em>Blue Ocean Strategy</em> by W. Chan Kim &amp; Ren&eacute;e Mauborgne</li>
              <li>&#8226; <em>Good Strategy Bad Strategy</em> by Richard Rumelt</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Back to Commercial Awareness
          </Link>
          <Link href="/careers/negotiation/negotiating-your-salary" className="btn-primary">
            Next: Negotiation &rarr;
          </Link>
        </nav>
      </div>
    </div>
  );
}
