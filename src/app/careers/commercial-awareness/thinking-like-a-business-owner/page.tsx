import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thinking Like a Business Owner - Careers Track - Business Wisdom',
  description: 'Develop an ownership mindset. Learn to think about ROI, opportunity costs, and resource constraints like a business owner.',
};

export default function ThinkingLikeABusinessOwnerLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Thinking Like a Business Owner
          </h1>
          <p className="text-xl text-gray-600">
            Employees think about tasks. Owners think about trade-offs, returns, and the bigger picture.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              The difference between a valued employee and an indispensable one often comes down to mindset. Those who think like owners understand that every decision involves trade-offs, every resource has an opportunity cost, and every action should generate a return. This doesn&apos;t mean becoming ruthlessly commercial - it means understanding the constraints and pressures that shape organisational decisions, and aligning your work with what truly matters.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>ROI Mindset</strong>
                  <p className="mt-1">Every investment of time, money, or effort should generate a return. When you propose something, think: what will this cost (in all senses) and what will it produce? Learn to frame your ideas in terms of the return they&apos;ll generate - not just activity, but outcomes. Owners ask &quot;what&apos;s the return?&quot; before spending resources.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Opportunity Cost</strong>
                  <p className="mt-1">Saying yes to one thing means saying no to everything else you could have done with those resources. Owners constantly weigh alternatives. Is this the best use of this budget? Of this person&apos;s time? Of this meeting slot? When you understand opportunity cost, you make better recommendations and decisions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Resource Constraints</strong>
                  <p className="mt-1">Every business operates with limited resources - money, people, time, attention. Owners don&apos;t just wish for more resources; they figure out how to achieve goals within constraints. When you understand resource limitations, you stop asking &quot;why can&apos;t we just...&quot; and start asking &quot;given what we have, what&apos;s the smartest move?&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Trade-off Thinking</strong>
                  <p className="mt-1">There are no perfect solutions - only trade-offs. Speed costs money. Quality takes time. Features add complexity. Owners understand that every choice involves giving something up. Instead of advocating for the ideal, they identify the trade-offs and make informed recommendations about which compromises are acceptable.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Long-term vs Short-term</strong>
                  <p className="mt-1">Owners balance immediate needs with long-term health. Quick wins matter, but not at the expense of the future. When you think like an owner, you consider: will this decision still look smart in a year? In five years? Sometimes the right answer is to sacrifice short-term gains for long-term advantage.</p>
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
                  &quot;I want to propose [your idea] to my manager. Help me think through the ROI: what resources will it require, what return will it generate, and what are the opportunity costs? How should I frame this as a business case?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;My team is debating whether to [option A] or [option B]. Act as a business owner and walk me through the trade-offs of each option. What questions should we be asking to make this decision?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Strategy is about making choices, trade-offs; it&apos;s about deliberately choosing to be different.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">&mdash; Michael Porter</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Good Strategy Bad Strategy</em> by Richard Rumelt</li>
              <li>&#8226; <em>The Effective Executive</em> by Peter Drucker</li>
              <li>&#8226; <em>Thinking in Bets</em> by Annie Duke</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Back to Commercial Awareness
          </Link>
          <Link href="/careers/commercial-awareness/adding-value" className="btn-primary">
            Next Lesson &rarr;
          </Link>
        </nav>
      </div>
    </div>
  );
}
