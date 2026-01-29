import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Negotiating in Teams - Careers Track - Business Wisdom',
  description: 'Master team negotiations: internal alignment, speaking with one voice, good cop/bad cop dynamics, and building coalitions for better outcomes.',
};

export default function NegotiatingInTeamsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Negotiating in Teams
          </h1>
          <p className="text-xl text-gray-600">
            When multiple people negotiate together, coordination is everything.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              In professional settings, you rarely negotiate alone. You might represent your department in budget discussions, join a project team negotiating with clients, or advocate alongside colleagues for better working conditions. Team negotiations are more complex than solo ones - you must align internally before you can negotiate externally. A team that contradicts itself or shows division gets a worse deal every time.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Align Internally First</strong>
                  <p className="mt-1">Before any external negotiation, get your team on the same page. What are your must-haves vs nice-to-haves? What&apos;s your walk-away point? Who speaks to what? Disagreements should happen in private, never in front of the other party. A divided team negotiates from weakness.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Speak with One Voice</strong>
                  <p className="mt-1">Designate a lead negotiator. Others can contribute when called upon, but avoid multiple people making offers or commitments. If someone says something unhelpful, the lead should smoothly redirect: &quot;What Sarah means is...&quot; or &quot;Let&apos;s take that offline and come back to you.&quot; Consistency builds credibility.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Understand Good Cop/Bad Cop</strong>
                  <p className="mt-1">This classic tactic uses one tough negotiator and one friendly one. The &quot;bad cop&quot; makes extreme demands while the &quot;good cop&quot; offers reasonable-seeming compromises. Recognise when it&apos;s being used on you - and consider whether to use it strategically. The key is that both roles serve the same goal.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Build Coalitions</strong>
                  <p className="mt-1">Before formal negotiations, identify potential allies. Who else benefits from your proposal? Can you combine forces? In organisational politics, the team that builds broader support before the meeting often wins. A coalition also lets you say &quot;this isn&apos;t just our view - teams X and Y agree.&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Assign Roles Strategically</strong>
                  <p className="mt-1">Different team members can play different roles: the lead negotiator, the note-taker who catches details, the expert who answers technical questions, the observer who reads the room. Brief everyone on their role beforehand. Even the &quot;silent&quot; members should know when to speak and when to stay quiet.</p>
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
                  &quot;My team is about to negotiate our annual budget with senior leadership. We have three people attending with different views on priorities. Help me design a pre-meeting alignment session to get us on the same page.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I think the other side in our negotiation is using good cop/bad cop on us. Here&apos;s what&apos;s happening: [describe]. Am I right? How should we respond?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;In any negotiation, the side that is more prepared and more unified will have the advantage.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— G. Richard Shell</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Split the Difference</em> by Chris Voss</li>
              <li>&#8226; <em>Getting to Yes</em> by Roger Fisher &amp; William Ury</li>
              <li>&#8226; <em>Bargaining for Advantage</em> by G. Richard Shell</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Negotiation
          </Link>
          <Link href="/careers/networking/building-relationships" className="btn-primary">
            Next Topic: Networking →
          </Link>
        </nav>
      </div>
    </div>
  );
}
