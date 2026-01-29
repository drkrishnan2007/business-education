import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn & Professional Presence - Careers Track - Business Wisdom',
  description: 'Build a compelling LinkedIn profile and online presence that opens doors and establishes your professional brand.',
};

export default function LinkedInProfessionalPresenceLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            LinkedIn &amp; Professional Presence
          </h1>
          <p className="text-xl text-gray-600">
            Your online presence is often how people first encounter you. Make that first impression count.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Before meeting you, hiring managers, potential collaborators, and business contacts will search for you online. Your LinkedIn profile is often the first thing they find. A weak profile suggests you are not serious about your career. A strong profile attracts opportunities you did not even know existed - recruiters reaching out, speaking invitations, partnership offers. Beyond LinkedIn, your overall online presence shapes your professional reputation. What people find when they Google you matters more than ever.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Optimise Your LinkedIn Profile</strong>
                  <p className="mt-1">Use a professional photo where you look approachable. Write a headline that describes what you do and who you help, not just your job title. Your summary should tell your professional story in first person - what drives you, what you are good at, what you are looking for. List achievements with specific results, not just responsibilities. Think of your profile as a landing page, not a CV.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Share Thoughtful Content</strong>
                  <p className="mt-1">You do not need to post constantly, but sharing valuable content establishes expertise and keeps you visible to your network. Comment thoughtfully on others&apos; posts - this is often more effective than posting yourself. Share articles with your own perspective added. Write about lessons you have learned. Consistency matters more than frequency - even one thoughtful post per week builds momentum.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Engage Thoughtfully, Not Performatively</strong>
                  <p className="mt-1">Avoid the LinkedIn cringe of manufactured inspiration and humble-bragging. Be genuine. Congratulate people on real achievements. Ask genuine questions. Share failures as well as successes. The professionals who build the strongest LinkedIn presence are those who treat it as a place for real conversation, not a stage for self-promotion.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Build Your Personal Brand Intentionally</strong>
                  <p className="mt-1">What do you want to be known for? Your personal brand is the answer people give when asked &quot;What is [your name] good at?&quot; Be consistent across platforms. The topics you post about, the conversations you engage in, and the way you present yourself should all reinforce the same message. This does not mean being fake - it means being strategic about which authentic parts of yourself you highlight professionally.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Manage Your Broader Online Presence</strong>
                  <p className="mt-1">Google yourself regularly. Set up Google Alerts for your name. Lock down privacy settings on personal social media, or ensure nothing there would embarrass you professionally. Consider whether you need a personal website to control your narrative. Everything online is permanent and searchable - act accordingly.</p>
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
                  &quot;Here is my current LinkedIn summary: [paste summary]. I work in [field] and want to be known for [expertise]. Rewrite this to be more compelling, specific, and memorable. Write in first person and make it sound like me, not a robot.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I learned something interesting at work today: [describe insight]. Help me turn this into a LinkedIn post that shares value with my network without being preachy or self-promotional. Keep it under 200 words.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Your brand is what people say about you when you are not in the room.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Jeff Bezos</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Eat Alone</em> by Keith Ferrazzi</li>
              <li>&#8226; <em>How to Win Friends and Influence People</em> by Dale Carnegie</li>
              <li>&#8226; <em>Building a StoryBrand</em> by Donald Miller (for personal brand narrative)</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/networking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Networking
          </Link>
          <Link href="/careers/networking/maintaining-your-network" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
