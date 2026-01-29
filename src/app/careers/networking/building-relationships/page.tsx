import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Relationships - Careers Track - Business Wisdom',
  description: 'Learn to build genuine professional relationships by giving first and focusing on quality over quantity. Not collecting contacts.',
};

export default function BuildingRelationshipsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Building Relationships (Not Collecting Contacts)
          </h1>
          <p className="text-xl text-gray-600">
            Networking is not about how many business cards you collect. It is about building genuine connections.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most career opportunities come through relationships, not job postings. Research consistently shows that 70-80% of jobs are filled through networking. But transactional networking - approaching people only when you need something - does not work. People sense when they are being used. The professionals who build the most valuable networks are those who approach relationships with genuine curiosity and a willingness to give first. These relationships compound over time in ways that pure career ambition cannot replicate.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Give First, Always</strong>
                  <p className="mt-1">The most effective networkers lead with generosity. Before asking what someone can do for you, ask what you can do for them. Share useful articles, make introductions, offer your time or expertise. People remember those who helped them without expecting anything in return. This creates genuine goodwill that opens doors later.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Be Genuinely Curious About People</strong>
                  <p className="mt-1">The best networkers are not the smoothest talkers - they are the best listeners. Ask thoughtful questions. Remember what people tell you. Follow up on things they mentioned weeks ago. Genuine interest in others is rare and memorable. It also makes networking feel less like work and more like something you actually enjoy.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Quality Over Quantity</strong>
                  <p className="mt-1">Having 2,000 LinkedIn connections you do not know means nothing. Having 20 people who would genuinely help you if you asked means everything. Focus on building deeper relationships with fewer people rather than shallow connections with many. The strength of your network is measured by trust, not numbers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>The Power of Weak Ties</strong>
                  <p className="mt-1">Paradoxically, your most valuable career opportunities often come from acquaintances, not close friends. Your close contacts know the same things and people you do. Weak ties - people you see occasionally, former colleagues, friends of friends - connect you to different networks and information. Do not ignore these connections.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Build Relationships Before You Need Them</strong>
                  <p className="mt-1">The worst time to build a network is when you desperately need one. The professional who only reaches out when they are job hunting looks opportunistic. Start cultivating relationships now, while you do not need anything. When opportunities arise - or challenges hit - you will already have people in your corner.</p>
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
                  &quot;I met someone at a conference who works in [industry/role]. We had a brief conversation about [topic]. Help me draft a follow-up message that offers value and starts building a genuine relationship - not just a &apos;great to meet you&apos; message.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here is a networking message I am about to send: [paste message]. Does this come across as genuine or transactional? How can I make it more about giving value than asking for something?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The currency of real networking is not greed but generosity.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Keith Ferrazzi, Never Eat Alone</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Eat Alone</em> by Keith Ferrazzi</li>
              <li>&#8226; <em>Give and Take</em> by Adam Grant</li>
              <li>&#8226; <em>How to Win Friends and Influence People</em> by Dale Carnegie</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/networking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Networking
          </Link>
          <Link href="/careers/networking/finding-mentors-sponsors" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
