import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributing to Teams - Careers Track - Aryash Guru',
  description: 'Learn how to find your role in a team, add real value, and become the colleague everyone wants to work with.',
};

export default function ContributingToTeamsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Contributing to Teams
          </h1>
          <p className="text-xl text-gray-600">
            The best team players are not those who do the most. They are those who make everyone else better.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Teams accomplish things that individuals cannot. But simply being assigned to a team does not make you a contributor. Real contribution means understanding team dynamics, finding where you can add unique value, and supporting others to do their best work. These skills determine whether colleagues seek you out for projects or quietly avoid working with you.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Find Your Role</strong>
                  <p className="mt-1">Every team needs different contributions: someone who drives forward, someone who spots risks, someone who keeps morale up, someone who handles details. Observe what the team needs and where your strengths fit. The most valuable team members fill gaps, not just do what they are comfortable with.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Do the Work Nobody Wants to Do</strong>
                  <p className="mt-1">Taking notes in meetings, chasing up actions, organising files - these unglamorous tasks are often what makes projects succeed or fail. Volunteering for them shows reliability and makes the whole team more effective. It also builds goodwill.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Make Others Look Good</strong>
                  <p className="mt-1">Share credit generously. Acknowledge others&apos; contributions publicly. Help colleagues develop their ideas rather than competing. Teams where members support each other outperform teams full of individual stars competing for recognition.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Be Reliably Consistent</strong>
                  <p className="mt-1">Deliver what you promise, when you promise it. If you cannot, communicate early. Nothing damages team trust faster than someone who regularly misses deadlines or produces inconsistent quality. Being dependable matters more than being brilliant.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Speak Up and Stay Engaged</strong>
                  <p className="mt-1">Passive team members who never share ideas or concerns are not really contributing. You were included for a reason - share your perspective. Ask questions that move discussions forward. Challenge assumptions respectfully. Silent agreement is not collaboration.</p>
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
                  &quot;I have just joined a new project team. Based on my strengths [describe them], what roles might I naturally fill? What gaps should I look for that I could volunteer to fill? How do I figure out what the team actually needs?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here is how I have been contributing to my team recently: [describe]. Am I adding real value? What else could I be doing? Give me honest feedback on whether I am being a good team player.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Great teams do not hold back with one another. They are unafraid to air their dirty laundry. They admit their mistakes, their weaknesses, and their concerns without fear of reprisal.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Patrick Lencioni, The Five Dysfunctions of a Team</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Teaming</em> by Amy Edmondson</li>
              <li>&#8226; <em>The Five Dysfunctions of a Team</em> by Patrick Lencioni</li>
              <li>&#8226; <em>Give and Take</em> by Adam Grant</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/collaboration" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Collaboration
          </Link>
          <Link href="/careers/collaboration/handling-conflict-in-teams" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
