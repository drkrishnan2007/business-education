import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Negotiating Workload & Deadlines - Careers Track - Business Wisdom',
  description: 'Learn to push back on unrealistic deadlines, manage expectations, and negotiate workload without damaging relationships.',
};

export default function NegotiatingWorkloadDeadlinesLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Negotiation
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Negotiating Workload &amp; Deadlines
          </h1>
          <p className="text-xl text-gray-600">
            The skill of saying no without burning bridges.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most workplace stress comes not from hard work, but from impossible expectations. When you accept every request and every deadline without pushback, you set yourself up for burnout and poor quality work. The professionals who thrive learn to negotiate scope, timing, and priorities - protecting both their wellbeing and their reputation for delivering quality work on time.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Say No Constructively</strong>
                  <p className="mt-1">Never just say &quot;no&quot; or &quot;I can&apos;t.&quot; Instead, try: &quot;I can do this if we push back the deadline on project X&quot; or &quot;I can deliver the core features by Friday, but the extras would need another week.&quot; Offer alternatives that show you want to help while being realistic about constraints.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Present Trade-offs Clearly</strong>
                  <p className="mt-1">When asked to take on more, make the trade-off explicit: &quot;I can take on this project. To do it well, I&apos;d need to deprioritise either A or B. Which would you prefer?&quot; This shifts the decision to the person making the request and protects you from being blamed for dropped balls.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Manage Expectations Early</strong>
                  <p className="mt-1">The worst time to renegotiate a deadline is the day before it&apos;s due. If you see trouble coming, flag it immediately: &quot;I wanted to give you early warning - I&apos;m concerned about hitting the Friday deadline because...&quot; Early warning builds trust; last-minute surprises destroy it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Build in Buffer Time</strong>
                  <p className="mt-1">Everything takes longer than expected. When estimating timelines, add 20-50% buffer for unknowns. Deliver early and you&apos;re a hero. Deliver late and you&apos;ve damaged trust. Under-promise and over-deliver, not the reverse.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Distinguish Urgent from Important</strong>
                  <p className="mt-1">Not everything marked &quot;urgent&quot; truly is. Ask: &quot;What happens if this is delayed by a day?&quot; or &quot;What&apos;s driving the deadline?&quot; Sometimes the urgency is artificial or negotiable. Understanding the real stakes helps you prioritise effectively and push back appropriately.</p>
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
                  &quot;Roleplay as my manager. You&apos;ve just assigned me a new high-priority project due Friday, but I already have two deadlines that day. Help me practice pushing back and negotiating priorities.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I need to tell my boss that a project will be delayed. Here&apos;s my draft message: [paste message]. How can I communicate this more effectively while maintaining trust?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The difference between successful people and very successful people is that very successful people say no to almost everything.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Warren Buffett</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Essentialism</em> by Greg McKeown</li>
              <li>&#8226; <em>Getting to Yes</em> by Roger Fisher &amp; William Ury</li>
              <li>&#8226; <em>Crucial Conversations</em> by Kerry Patterson et al.</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Negotiation
          </Link>
          <Link href="/careers/negotiation/win-win-thinking" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
