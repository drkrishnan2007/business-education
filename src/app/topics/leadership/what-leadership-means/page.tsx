import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Leadership Really Means - Business Wisdom',
  description: 'Leadership is influence, not authority. Learn why true leaders inspire others to act willingly, drawing from Chanakya and Thiruvalluvar wisdom.',
};

export default function WhatLeadershipMeansPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Lead
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What Leadership Really Means
          </h1>
          <p className="text-xl text-gray-600">
            Leadership is not about being in charge. It is about taking care
            of those in your charge.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Misconception */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Big Misconception
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask most people what a leader is, and they will describe someone
              with power: a CEO, a captain, a politician, a boss. They will
              talk about someone who tells others what to do.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But this confuses <strong>authority</strong> with <strong>leadership</strong>.
              They are not the same thing.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Authority</strong> is the right to give orders. It comes from your position.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Leadership</strong> is the ability to inspire action. It comes from your character.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can have authority without leadership&mdash;people obey you
              because they must. But true leadership means people follow you
              because they want to.
            </p>
          </section>

          {/* Section 2: Influence, Not Position */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Leadership is Influence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about someone in your life who influenced you deeply&mdash;a
              teacher, a coach, a grandparent, a friend. Did they have official
              authority over you? Often not. Yet they shaped who you are.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>That is leadership.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leadership can happen anywhere:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The student who rallies classmates for a project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The junior employee who speaks up with a better idea</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The friend who organises help when someone is in trouble</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The sibling who sets an example for younger ones</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You do not need a title to lead. You need only the courage to
              step forward when others hesitate.
            </p>
          </section>

          {/* Section 3: Service, Not Self */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Leadership is Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the paradox of leadership: <strong>the leader exists to
              serve those they lead.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This sounds backwards. Is the leader not supposed to be served?
              Does the captain not give orders to the crew?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes, but consider: why do people follow a captain? Because the
              captain&apos;s job is to get everyone safely to the destination. The
              captain serves the crew&apos;s need for direction, safety, and purpose.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Good Teacher
                </h3>
                <p className="text-gray-600">
                  Serves students by helping them learn, not by showing off
                  their own knowledge.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Good Manager
                </h3>
                <p className="text-gray-600">
                  Serves the team by removing obstacles, providing resources,
                  and shielding them from distractions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Good Parent
                </h3>
                <p className="text-gray-600">
                  Serves children by preparing them for life, not by demanding
                  their obedience.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              When you think about leadership as service, everything changes.
              Your question becomes: &quot;How can I help?&quot; not &quot;How can I control?&quot;
            </p>
          </section>

          {/* Section 4: Why People Follow */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Do People Follow?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              People follow leaders for many reasons. Understanding these helps
              you become a better leader:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Vision:</strong> The leader shows a future worth working toward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Competence:</strong> The leader knows what they are doing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Care:</strong> The leader genuinely wants the best for followers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Integrity:</strong> The leader does what they say they will do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Courage:</strong> The leader takes risks and stands for what is right</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Notice that none of these require a title. Anyone can develop these
              qualities. Anyone can be a leader.
            </p>
          </section>

          {/* Section 5: Leadership is a Choice */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Leadership is a Daily Choice
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leadership is not something you are born with. It is something
              you practice every day through small choices:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Speaking up when you see something wrong, even when it is uncomfortable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Helping someone who is struggling, even when you are busy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Taking responsibility when things go wrong, even when you could blame others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Staying calm when others panic, even when you are scared too</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Every time you make these choices, you build your capacity to lead.
              Leadership is a muscle that grows stronger with use.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Leadership
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar, in the Thirukkural, describes what makes a true leader:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;அன்புடைமை ஆன்ற குடிப்பிறத்தல் வேந்தவாம்<br />
              பண்புடைமை தூதுரைப்பான் பண்பு&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Love, nobility, and virtuous
              character&mdash;these are the qualities of a great leader.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya emphasized that the leader&apos;s welfare depends on the people&apos;s welfare:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम्।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;In the happiness of his subjects lies the
              king&apos;s happiness. In their welfare, his welfare.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> A leader who puts their own interests
              first will eventually lose their followers. But a leader who genuinely
              serves others will find that their own success follows naturally.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Leadership is influence, not authority&mdash;people follow because they want to, not because they must</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>True leadership is service&mdash;the leader exists to help those they lead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>People follow for vision, competence, care, integrity, and courage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>You do not need a title to lead&mdash;leadership is a daily choice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya and Thiruvalluvar taught: the leader&apos;s success depends on serving others</span>
              </li>
            </ul>
          </section>

          {/* Exercise */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Practical Exercise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Influence Map:</strong> Think about the five people who
              have influenced you most in life. For each one, answer:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span>Did they have formal authority over you?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span>What qualities made you listen to them?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span>How did they make you feel?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Look for patterns. What do these influential people have in common?
              These are likely the qualities you value most in a leader&mdash;and
              the ones you should develop in yourself.
            </p>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a time when you stepped forward to help a group, even
              though you had no official role. What made you do it? How did
              it feel? What did others do in response?
            </p>
            <p className="text-gray-600 text-sm italic">
              This moment of stepping forward&mdash;that is leadership. It does
              not require permission.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/leadership"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to How to Lead
          </Link>
          <Link
            href="/topics/leadership/leading-by-example"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Leading by Example
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
