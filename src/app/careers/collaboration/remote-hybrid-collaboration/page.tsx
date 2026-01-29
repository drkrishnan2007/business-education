import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remote & Hybrid Collaboration - Careers Track - Aryash Guru',
  description: 'Master async communication, video call etiquette, and building trust with colleagues you rarely see in person.',
};

export default function RemoteHybridCollaborationLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Remote &amp; Hybrid Collaboration
          </h1>
          <p className="text-xl text-gray-600">
            Distance is no longer a barrier to great teamwork. But it does require new skills.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Remote and hybrid work are now permanent features of professional life. The ability to collaborate effectively across time zones, communicate asynchronously, and build trust without daily face-to-face contact is no longer optional - it is essential. Those who master these skills have access to opportunities worldwide; those who do not limit themselves to whoever happens to be in their building.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Default to Asynchronous Communication</strong>
                  <p className="mt-1">Not everything needs a meeting. Written updates, recorded videos, and shared documents let people respond on their own time and create a searchable record. Use synchronous time (calls, meetings) only for discussions that genuinely need real-time interaction.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Over-Communicate Context</strong>
                  <p className="mt-1">In person, people pick up context from conversations they overhear and body language they observe. Remote workers miss all of this. Share more than you think you need to: explain the &quot;why&quot; behind decisions, summarise discussions that happened without everyone present, and document everything important.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Make Video Calls Count</strong>
                  <p className="mt-1">Turn your camera on - it builds trust and connection. Minimise distractions and give your full attention. Test your setup beforehand. Do not be the person who says &quot;Sorry, can you repeat that? I was on mute.&quot; Treat video calls as seriously as in-person meetings.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Build Relationships Intentionally</strong>
                  <p className="mt-1">In an office, relationships form naturally over coffee and lunch. Remotely, you must be deliberate. Schedule virtual coffees. Ask about people&apos;s lives, not just their tasks. Create informal channels for non-work chat. Strong relationships survive misunderstandings; weak ones do not.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Respect Time Zone Differences</strong>
                  <p className="mt-1">If your meeting is someone else&apos;s midnight, think twice about whether they really need to attend. Rotate meeting times fairly so the same people do not always bear the burden. When working across zones, be explicit about deadlines: &quot;End of day London time&quot; is clearer than &quot;end of day.&quot;</p>
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
                  &quot;I need to update my remote team about a project. Help me draft an async update that includes: what has been done, what is blocked, what needs input, and what comes next. Make sure someone in a different time zone would have all the context they need.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I am struggling to build rapport with remote colleagues I have never met in person. Suggest five specific actions I could take this week to strengthen those relationships without taking too much of their time.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;In the absence of information, people make up stories. And those stories are almost never positive.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Amy Edmondson, Teaming</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Teaming</em> by Amy Edmondson</li>
              <li>&#8226; <em>Remote: Office Not Required</em> by Jason Fried &amp; David Heinemeier Hansson</li>
              <li>&#8226; <em>The Culture Map</em> by Erin Meyer</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/collaboration" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Collaboration
          </Link>
          <Link href="/careers/creativity/generating-ideas" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
