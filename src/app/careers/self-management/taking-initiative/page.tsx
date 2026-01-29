import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taking Initiative - Careers Track - Aryash Guru',
  description: 'Learn to spot opportunities and act on them without being told. Develop a proactive mindset that accelerates your career growth.',
};

export default function TakingInitiativeLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Self-Management
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Taking Initiative
          </h1>
          <p className="text-xl text-gray-600">
            Don&apos;t wait to be told. The best careers are built by those who act first.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Initiative is the difference between employees who need to be managed and those who are ready to lead. Organisations are full of people who do exactly what they&apos;re told - and struggle to advance. Those who identify problems, propose solutions, and act without explicit permission stand out. They get the interesting projects, the promotions, and the opportunities that never appear on job boards.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Proactive vs Reactive</strong>
                  <p className="mt-1">Reactive people wait for instructions, then execute. Proactive people see what needs doing and start. When you spot a problem, don&apos;t just report it - come with potential solutions. Move from &quot;I noticed X is broken&quot; to &quot;I noticed X is broken, and I think we could fix it by doing Y.&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Ask Forgiveness, Not Permission</strong>
                  <p className="mt-1">For low-risk improvements, act first and report later. Excessive approval-seeking signals you don&apos;t trust your own judgement. Obviously, use common sense - bet big only when the downside is limited and the potential upside is clear.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>See Gaps as Opportunities</strong>
                  <p className="mt-1">When something isn&apos;t working, most people complain. Initiative-takers think: &quot;How could I fix this?&quot; Every inefficiency, every customer complaint, every process nobody likes is an opportunity for someone to step up. Let that someone be you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Volunteer Strategically</strong>
                  <p className="mt-1">Raise your hand for projects that give you visibility, build new skills, or connect you with influential people. Not every opportunity is equal - choose the ones that stretch you in directions you want to grow.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Accept That You&apos;ll Get It Wrong Sometimes</strong>
                  <p className="mt-1">Taking initiative means taking risks. Some will backfire. That&apos;s the price of action. The cost of inaction - missed opportunities, slower growth, less learning - is usually higher. Learn, adjust, and keep moving.</p>
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
                  &quot;I&apos;ve noticed this problem at work: [describe issue]. Help me develop a proposal to fix it. Include: the problem, proposed solution, benefits, potential risks, and what resources I&apos;d need.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I want to volunteer for more visible projects but I&apos;m not sure which ones. Here are my current skills and where I want to grow: [describe]. What types of projects should I look for?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Habit 1: Be Proactive. Between stimulus and response, man has the freedom to choose.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Stephen Covey, The 7 Habits of Highly Effective People</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The 7 Habits of Highly Effective People</em> by Stephen Covey</li>
              <li>&#8226; <em>Linchpin: Are You Indispensable?</em> by Seth Godin</li>
              <li>&#8226; <em>The War of Art</em> by Steven Pressfield</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Self-Management
          </Link>
          <Link href="/careers/self-management/managing-your-energy" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
