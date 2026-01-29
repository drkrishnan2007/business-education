import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handling Conflict in Teams - Careers Track - Aryash Guru',
  description: 'Learn to navigate disagreements constructively, depersonalize conflict, and maintain working relationships while resolving differences.',
};

export default function HandlingConflictInTeamsLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/collaboration" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Collaboration
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Handling Conflict in Teams
          </h1>
          <p className="text-xl text-gray-600">
            Conflict is not a sign of a broken team. Avoiding conflict is.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Healthy teams disagree. When people with different perspectives work on hard problems, tension is inevitable. The teams that excel are not those without conflict - they are those who handle conflict productively. Learning to disagree without damaging relationships, to depersonalise issues, and to find common ground is essential for anyone who wants to do meaningful collaborative work.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Separate the Person from the Problem</strong>
                  <p className="mt-1">When you disagree with someone&apos;s idea, be crystal clear that you are critiquing the idea, not the person. Say &quot;I see a risk with this approach&quot; rather than &quot;You have not thought this through.&quot; Attack problems together; never attack each other.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Seek to Understand First</strong>
                  <p className="mt-1">Before arguing your position, make sure you truly understand theirs. Ask clarifying questions. Repeat back what you have heard. Often what looks like disagreement is actually misunderstanding. And when you do understand, your counterargument will be much stronger.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Focus on Interests, Not Positions</strong>
                  <p className="mt-1">When two people argue about solutions, they often share the same underlying goal. &quot;We should launch now&quot; vs &quot;We need more testing&quot; might both come from wanting the product to succeed. Finding that shared interest creates a foundation for resolution.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Address Conflict Early</strong>
                  <p className="mt-1">Small tensions left unaddressed become major problems. If something is bothering you, raise it while it is still small. The conversation &quot;I noticed you interrupted me twice in that meeting&quot; is much easier than &quot;You have been dismissing my contributions for months.&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Commit to Decisions, Even in Disagreement</strong>
                  <p className="mt-1">Once a decision is made, support it fully - even if you argued against it. &quot;Disagree and commit&quot; means you voice your concerns during discussion, but once the team decides, you execute as though it were your own idea. Undermining decisions you disagreed with destroys team trust.</p>
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
                  &quot;Role-play as a colleague who strongly disagrees with my proposal. Push back on my ideas firmly but professionally. I will practice responding to your objections without getting defensive. After a few exchanges, give me feedback on how I handled the disagreement.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I am having a conflict with a team member about [describe situation]. Help me see their perspective. What might be their underlying interests? How could I raise this with them in a way that focuses on the problem, not the person?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The key is not to eliminate conflict, but to transform it. To change the way we deal with our differences - from destructive fighting to constructive negotiation.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— William Ury, Getting to Yes</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Radical Candor</em> by Kim Scott</li>
              <li>&#8226; <em>Crucial Conversations</em> by Patterson, Grenny, McMillan &amp; Switzler</li>
              <li>&#8226; <em>The Five Dysfunctions of a Team</em> by Patrick Lencioni</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/collaboration" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Collaboration
          </Link>
          <Link href="/careers/collaboration/remote-hybrid-collaboration" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
