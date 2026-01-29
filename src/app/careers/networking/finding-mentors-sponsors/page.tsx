import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finding Mentors & Sponsors - Careers Track - Business Wisdom',
  description: 'Learn the difference between mentors and sponsors, how to ask for guidance, and how to be an excellent mentee.',
};

export default function FindingMentorsSponsorsLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/networking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Networking
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Finding Mentors &amp; Sponsors
          </h1>
          <p className="text-xl text-gray-600">
            Mentors give you wisdom. Sponsors give you opportunities. You need both.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Career success is rarely achieved alone. Mentors help you navigate challenges, develop skills, and avoid mistakes. Sponsors - senior people who actively advocate for you - help you access opportunities you would never find on your own. Research shows that professionals with sponsors are more likely to be promoted and paid fairly. Yet most people either wait passively for mentorship to appear or do not understand the difference between mentors and sponsors. Learning to cultivate both relationships is one of the highest-leverage career moves you can make.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Understand the Difference: Mentors vs Sponsors</strong>
                  <p className="mt-1">A mentor advises you in private - they help you think through problems, share their experience, and offer guidance. A sponsor advocates for you in public - they recommend you for opportunities, put their reputation on the line for you, and open doors you cannot open yourself. You need mentors to grow. You need sponsors to advance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Do Not Ask &quot;Will You Be My Mentor?&quot;</strong>
                  <p className="mt-1">This puts pressure on busy people and often fails. Instead, start with a specific question or small request. &quot;I am facing this challenge - could I get your perspective for 20 minutes?&quot; Let relationships develop naturally. The best mentorships often emerge organically from genuine interactions over time, not formal arrangements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Build a Personal Board of Directors</strong>
                  <p className="mt-1">No single mentor can give you everything you need. Cultivate multiple mentors for different purposes: one who knows your industry deeply, one who has skills you want to develop, one who is a few steps ahead in your career path, one who thinks differently from you. Different perspectives at different stages make you more well-rounded.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Earn Sponsorship Through Performance</strong>
                  <p className="mt-1">You cannot directly ask someone to be your sponsor - sponsorship is earned. Sponsors risk their reputation when they advocate for you. They will only do this if they believe in your abilities. Deliver excellent work, be visible, be reliable. Make it easy for senior people to champion you because your track record speaks for itself.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Be an Excellent Mentee</strong>
                  <p className="mt-1">Respect their time: come prepared with specific questions, not vague requests for advice. Follow through on suggestions and report back. Express genuine gratitude. Make them look good by succeeding. The best mentees eventually become valuable to their mentors - sharing insights, making introductions, becoming allies. That is how relationships become mutual.</p>
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
                  &quot;I want to reach out to a senior person in my field to ask for career guidance. Help me draft an initial message that is specific, respectful of their time, and shows I have done my homework on their background. I want to ask about [specific challenge].&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I had a meeting with a potential mentor. Here is what we discussed: [summary]. Help me draft a follow-up thank you message that shows I listened, mentions how I will apply their advice, and keeps the door open for future conversations.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;A mentor is someone who allows you to see the hope inside yourself. A sponsor is someone who sees your potential and is willing to bet on it.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Oprah Winfrey (adapted)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Eat Alone</em> by Keith Ferrazzi</li>
              <li>&#8226; <em>Lean In</em> by Sheryl Sandberg (chapters on mentorship)</li>
              <li>&#8226; <em>The Sponsor Effect</em> by Sylvia Ann Hewlett</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/networking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Networking
          </Link>
          <Link href="/careers/networking/linkedin-professional-presence" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
