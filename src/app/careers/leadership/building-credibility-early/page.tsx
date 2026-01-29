import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Credibility Early - Careers Track - Business Wisdom',
  description: 'Learn to establish trust and respect from your first days in a new role. Build a reputation for competence and character.',
};

export default function BuildingCredibilityEarlyLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Building Credibility Early
          </h1>
          <p className="text-xl text-gray-600">
            Your reputation is built one interaction at a time. Start strong and stay consistent.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              In any new role, people are watching to see what kind of professional you are.
              First impressions matter, but sustained credibility matters more.
              Those who build credibility early get trusted with bigger opportunities, while those who stumble may spend months recovering.
              Credibility is the foundation upon which leadership is built.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Deliver on Every Promise</strong>
                  <p className="mt-1">Nothing destroys credibility faster than broken commitments. Only promise what you can deliver. If you say you will send something by Friday, send it by Thursday. Under-promise and over-deliver until you have earned the right to be trusted with more.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Competence Plus Character</strong>
                  <p className="mt-1">Credibility requires both. Competence means knowing your job and doing it well. Character means being honest, treating people fairly, and acting with integrity even when it is inconvenient. You need both - one without the other is not enough.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Manage Expectations Proactively</strong>
                  <p className="mt-1">When you see a problem coming, raise it early. If a deadline is at risk, tell people before it is missed, not after. People forgive delays when warned in advance; they do not forgive surprises. Managing expectations is part of being reliable.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Be Quick to Credit, Slow to Blame</strong>
                  <p className="mt-1">Share credit generously when things go well. Take responsibility when things go wrong, especially if you were involved. People notice who deflects blame and who accepts it. The latter builds lasting credibility.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Show Up Prepared</strong>
                  <p className="mt-1">Read the materials before meetings. Do your research before asking questions. Come with ideas, not just problems. Being prepared shows respect for others&apos; time and demonstrates that you take your work seriously.</p>
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
                  &quot;You are my new manager. I have just joined the team and want to build credibility quickly. Ask me about my approach to the first 90 days. Challenge me if my plans seem unrealistic or if I am over-promising. Help me find the right balance between ambition and reliability.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I need to tell my manager that I will miss a deadline. Here is how I plan to communicate it: [paste your message]. Does this protect my credibility? Am I being too defensive or making excuses? How can I handle this better?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;It takes 20 years to build a reputation and five minutes to ruin it.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Warren Buffett</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Speed of Trust</em> by Stephen M.R. Covey</li>
              <li>&#8226; <em>Good to Great</em> by Jim Collins</li>
              <li>&#8226; <em>The First 90 Days</em> by Michael D. Watkins</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Leadership
          </Link>
          <Link href="/careers/leadership/motivating-others" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
