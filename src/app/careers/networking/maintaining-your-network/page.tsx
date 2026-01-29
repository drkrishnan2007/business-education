import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintaining Your Network - Careers Track - Business Wisdom',
  description: 'Learn systems for staying in touch, adding value over time, and reconnecting gracefully with your professional network.',
};

export default function MaintainingYourNetworkLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Maintaining Your Network
          </h1>
          <p className="text-xl text-gray-600">
            Relationships fade without attention. The real skill is keeping connections alive over years, not just making them.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Building a network is only half the challenge. Without regular nurturing, even strong relationships weaken. The colleague who helped you five years ago becomes a stranger. The mentor who believed in you forgets your name. The most valuable networks belong to people who maintain relationships systematically, not just when they need something. A well-maintained network compounds over decades - the people you stay connected with today become the senior leaders, successful founders, and key decision-makers of tomorrow.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Build a Stay-in-Touch System</strong>
                  <p className="mt-1">Leaving relationship maintenance to chance means it will not happen. Create a simple system: a spreadsheet, a CRM, or even calendar reminders for key contacts. Note when you last spoke, what they are working on, and when to reach out next. Some people categorise contacts by how often to connect - monthly, quarterly, yearly. The specific system matters less than having one you actually use.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Add Value Over Time</strong>
                  <p className="mt-1">The easiest way to stay in touch is to be useful. Forward an article they would find interesting. Congratulate them on a promotion or company news. Make an introduction that could help them. Share an opportunity that fits their goals. When your outreach consistently adds value, people are happy to hear from you. When you only reach out asking for favours, they are not.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Use Life Events as Connection Points</strong>
                  <p className="mt-1">Career changes, promotions, work anniversaries, company news, published articles, speaking engagements - all are natural reasons to reach out. LinkedIn makes these visible. A genuine &quot;Congratulations on the new role - well deserved!&quot; keeps you on someone&apos;s radar without being intrusive. Birthdays work for closer contacts. These touchpoints feel natural because they are about them, not you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Reconnect Gracefully After Long Gaps</strong>
                  <p className="mt-1">It is never too late to reconnect. Most people respond positively to genuine outreach, even after years. Acknowledge the gap simply: &quot;It has been too long since we connected.&quot; Reference your shared history briefly. Lead with something relevant to them, not a request. Most people feel equally guilty about not staying in touch - your message often comes as a welcome surprise, not an imposition.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Prioritise Face Time When Possible</strong>
                  <p className="mt-1">Digital maintenance keeps relationships alive, but nothing builds connection like meeting in person. When you travel to someone&apos;s city, reach out for coffee. Attend industry events and conferences. Suggest occasional lunches with local contacts. Video calls are better than emails. Phone calls beat text. In-person beats everything. Reserve your limited in-person time for your most important relationships.</p>
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
                  &quot;I want to reconnect with a former colleague I have not spoken to in [X years]. We worked together on [project/team]. Help me draft a message that acknowledges the gap, references our shared history, and genuinely offers value - not just &apos;let us catch up sometime.&apos;&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Help me design a simple system for maintaining my professional network. I have about [number] key contacts I want to stay connected with. I have [amount of time] per week I can dedicate to this. Suggest a practical system that I will actually stick to.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The best time to plant a tree was twenty years ago. The second best time is now.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Chinese Proverb (applied to networking)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Never Eat Alone</em> by Keith Ferrazzi</li>
              <li>&#8226; <em>How to Win Friends and Influence People</em> by Dale Carnegie</li>
              <li>&#8226; <em>Give and Take</em> by Adam Grant</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/networking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Networking
          </Link>
          <Link href="/careers/ai-literacy/what-ai-can-and-cant-do" className="btn-primary">
            Next: AI Literacy →
          </Link>
        </nav>
      </div>
    </div>
  );
}
