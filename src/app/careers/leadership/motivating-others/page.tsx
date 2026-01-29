import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motivating Others - Careers Track - Business Wisdom',
  description: 'Learn to inspire colleagues and help them do their best work. Understand what truly drives people to excel.',
};

export default function MotivatingOthersLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Motivating Others
          </h1>
          <p className="text-xl text-gray-600">
            Great leaders do not create followers. They create more leaders by bringing out the best in others.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              You cannot achieve anything significant alone.
              Whether you manage people directly or simply work alongside them, your ability to motivate others determines how much you can accomplish.
              Understanding what truly drives people - beyond money and status - is one of the most valuable skills you can develop.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Intrinsic Beats Extrinsic</strong>
                  <p className="mt-1">External rewards like bonuses work for simple tasks but can actually undermine performance on creative work. People are motivated by meaning, growth, and connection. Find out what intrinsically motivates each person and connect their work to it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Autonomy, Mastery, Purpose</strong>
                  <p className="mt-1">Daniel Pink&apos;s research shows these three drive deep motivation. Give people freedom in how they work (autonomy). Help them get better at what they do (mastery). Connect their work to something that matters (purpose). All three must be present.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Recognition Matters More Than You Think</strong>
                  <p className="mt-1">Specific, timely recognition is one of the most powerful motivators and costs nothing. Do not just say &quot;good job&quot; - say exactly what was good and why it mattered. Public recognition amplifies the effect. Make it a habit to notice and acknowledge good work.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Different People Need Different Things</strong>
                  <p className="mt-1">Some people are motivated by challenge, others by stability. Some want public recognition, others prefer private acknowledgment. Take time to understand what matters to each individual. Ask them directly - most people have never been asked.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Remove Obstacles, Do Not Just Add Pressure</strong>
                  <p className="mt-1">Often the best way to motivate is to remove what de-motivates. Pointless bureaucracy, unclear priorities, lack of resources, toxic behaviours - these drain motivation faster than any pep talk can restore it. Ask &quot;What is getting in your way?&quot; and then fix it.</p>
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
                  &quot;You are a team member who has become disengaged lately. Your work quality has dropped and you seem unenthusiastic. I want to have a conversation to understand what is happening and how I can help. Respond authentically to my attempts to motivate you - do not make it too easy for me.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I want to recognise a colleague for their good work. Here is what I plan to say: [paste your recognition]. Is this specific enough? Does it explain why their work mattered? How can I make this recognition more meaningful?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The only way to do great work is to love what you do. If you haven&apos;t found it yet, keep looking.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Steve Jobs</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Drive: The Surprising Truth About What Motivates Us</em> by Daniel H. Pink</li>
              <li>&#8226; <em>Start With Why</em> by Simon Sinek</li>
              <li>&#8226; <em>The Culture Code</em> by Daniel Coyle</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Leadership
          </Link>
          <Link href="/careers/leadership/leading-through-uncertainty" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
