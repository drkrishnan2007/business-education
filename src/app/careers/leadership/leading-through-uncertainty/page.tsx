import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Through Uncertainty - Careers Track - Business Wisdom',
  description: 'Learn to guide teams when the path forward is unclear. Stay calm under pressure and make decisions with incomplete information.',
};

export default function LeadingThroughUncertaintyLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Leading Through Uncertainty
          </h1>
          <p className="text-xl text-gray-600">
            True leadership emerges when nobody knows what to do next. Be the calm in the storm.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              The world is increasingly uncertain - markets shift, technologies disrupt, and unexpected events upend plans.
              When things are stable, anyone can manage.
              But when uncertainty hits, people look for those who can stay calm, communicate clearly, and help the team move forward.
              This is when leadership truly counts.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Stay Calm Under Pressure</strong>
                  <p className="mt-1">Your team takes emotional cues from you. Panic spreads faster than calm, but so does composure. This does not mean hiding your concerns - it means processing them privately and presenting a steady presence publicly. Practice techniques like deep breathing and pausing before reacting.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Communicate Transparently</strong>
                  <p className="mt-1">In uncertain times, say what you know, what you do not know, and what you are doing to find out. People can handle bad news far better than they handle silence and confusion. Frequent, honest updates - even when there is little new to share - build trust.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Decide with Incomplete Information</strong>
                  <p className="mt-1">Waiting for perfect information means waiting forever. In uncertainty, make the best decision you can with what you have, commit to it, and adjust as you learn more. A good decision made quickly often beats a perfect decision made too late.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Create Small Certainties</strong>
                  <p className="mt-1">When the big picture is unclear, create small islands of certainty. Clear priorities, regular check-ins, and predictable routines help people feel grounded. Focus on what you can control and make that as stable as possible.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Embrace Learning Over Knowing</strong>
                  <p className="mt-1">The leaders who thrive in uncertainty are those who admit they do not have all the answers and actively seek them. Ask questions. Listen to diverse perspectives. Run small experiments. Be willing to change course when the evidence demands it.</p>
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
                  &quot;You are anxious team members who have just heard rumours that our department might be restructured. I need to address the team without knowing all the details myself. Play multiple team members with different concerns - some want reassurance, some want facts, some are ready to panic. Help me practice handling this uncertain situation.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;We face an urgent decision but only have partial information. Here is the situation: [describe it]. Here is how I am thinking about the decision: [your approach]. Am I waiting too long for certainty? Am I being reckless? Help me find the right balance.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Eric Hoffer</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Turn the Ship Around!</em> by L. David Marquet</li>
              <li>&#8226; <em>Good to Great</em> by Jim Collins</li>
              <li>&#8226; <em>Thinking in Bets</em> by Annie Duke</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Leadership
          </Link>
          <Link href="/careers/commercial-awareness/how-your-company-makes-money" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
