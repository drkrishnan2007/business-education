import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Working with Different People - Careers Track - Aryash Guru',
  description: 'Learn to collaborate effectively with diverse personalities, backgrounds, and working styles. Master the art of inclusive teamwork.',
};

export default function WorkingWithDifferentPeopleLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Working with Different People
          </h1>
          <p className="text-xl text-gray-600">
            The best teams are not made of similar people. They are made of different people who have learned to work together.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              In any workplace, you will encounter people with different personalities, cultural backgrounds, communication styles, and ways of thinking. Teams with cognitive diversity consistently outperform homogeneous groups on complex problems. Learning to bridge these differences is not just about being nice - it is a core professional skill that determines whether you can contribute to high-performing teams.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Seek Diversity of Thought</strong>
                  <p className="mt-1">The point of working with different people is not tolerance - it is advantage. Someone who thinks differently from you will spot problems you miss and suggest solutions you would never consider. Actively seek out perspectives that challenge your own.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Understand Personality Differences</strong>
                  <p className="mt-1">Some colleagues need to think out loud; others process internally before speaking. Some prefer detailed plans; others thrive with flexibility. Neither approach is wrong - they are just different. Recognise these patterns and adapt how you collaborate with each person.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Bridge Cultural Differences</strong>
                  <p className="mt-1">Cultural backgrounds shape how people give feedback, express disagreement, and build relationships. In some cultures, direct criticism is expected; in others, it is considered rude. Learn to read these signals and create space where everyone can contribute authentically.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Assume Positive Intent</strong>
                  <p className="mt-1">When someone does something that frustrates you, start by assuming they had good reasons. What looks like laziness might be a different work style. What seems like rudeness might be cultural directness. Ask questions before making judgements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Focus on Shared Goals</strong>
                  <p className="mt-1">When differences create friction, zoom out to what you are all trying to achieve. A shared purpose creates common ground. &quot;We all want this project to succeed&quot; is a powerful starting point for resolving almost any interpersonal tension.</p>
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
                  &quot;Role-play as a colleague who has a very different personality from me - maybe more introverted, more detail-oriented, or from a different cultural background. I will describe a work situation and you respond how that colleague might. Then help me understand their perspective.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I am struggling to work with someone who [describe the difference]. Help me understand why they might approach things this way and suggest three strategies for collaborating more effectively with them.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Trust is knowing that when a team member does push you, they are doing it because they care about the team.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Patrick Lencioni, The Five Dysfunctions of a Team</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Five Dysfunctions of a Team</em> by Patrick Lencioni</li>
              <li>&#8226; <em>The Culture Map</em> by Erin Meyer</li>
              <li>&#8226; <em>Quiet</em> by Susan Cain</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/collaboration" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Collaboration
          </Link>
          <Link href="/careers/collaboration/contributing-to-teams" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
