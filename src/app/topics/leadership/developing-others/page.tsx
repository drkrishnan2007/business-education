import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developing Others - Business Wisdom',
  description: 'The leader\'s ultimate job is to create more leaders. Learn why developing others is the highest calling, with wisdom from Chanakya and Thiruvalluvar.',
};

export default function DevelopingOthersPage() {
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
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Developing Others
          </h1>
          <p className="text-xl text-gray-600">
            Your legacy as a leader is not what you build. It is who you build.
            The ultimate test of leadership is what happens when you leave.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Development Matters */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Developing Others is the Leader&apos;s Ultimate Job
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A leader who does everything themselves is not a leader&mdash;they
              are a highly productive individual contributor. True leadership
              multiplies capability:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you can only do the work yourself, you are limited by your own capacity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you can teach one person, you have doubled your impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you can create leaders who create leaders, your impact has no limit</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The goal is not to become indispensable. The goal is to become
              unnecessary&mdash;to build a team that can thrive without you.
            </p>
          </section>

          {/* Section 2: What Development Really Means */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Development Really Means
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Development is not just training. Training gives skills. Development
              builds the whole person:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Skills
                </h3>
                <p className="text-gray-600">
                  The technical abilities to do the job well. These can often
                  be taught directly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Judgment
                </h3>
                <p className="text-gray-600">
                  The wisdom to know when and how to apply skills. This comes
                  from experience and reflection.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Confidence
                </h3>
                <p className="text-gray-600">
                  The belief that they can handle challenges. This grows from
                  success and from knowing someone believes in them.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Character
                </h3>
                <p className="text-gray-600">
                  The values and integrity to use their abilities well. This
                  is shaped by example and by the culture you create.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A fully developed person has all four: they know how, they know
              when, they believe they can, and they will do the right thing.
            </p>
          </section>

          {/* Section 3: How to Develop Others */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Develop Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Development happens through deliberate practice and support:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Give real challenges:</strong> People grow by stretching, not by staying comfortable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Allow mistakes:</strong> Failure is the best teacher, if you let people learn from it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Provide feedback:</strong> Regular, honest, specific feedback accelerates growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Ask questions:</strong> Instead of giving answers, help them discover their own</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Share your thinking:</strong> Let them see how you approach problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be patient:</strong> Development takes time; rushing destroys confidence</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The best development happens in real work, not in classrooms.
              Your job is to create opportunities and support people through them.
            </p>
          </section>

          {/* Section 4: The Art of Letting Go */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Art of Letting Go
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The hardest part of developing others is stepping back. You could
              do it faster yourself. You could do it better yourself. But if
              you always do it yourself, no one else will ever learn.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The progression looks like this:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span><strong>I do, you watch:</strong> Show them how it is done</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span><strong>I do, you help:</strong> Let them participate in the work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span><strong>You do, I help:</strong> Let them lead while you support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">4.</span>
                <span><strong>You do, I watch:</strong> Let them work while you observe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">5.</span>
                <span><strong>You do:</strong> Step away completely and trust them</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Most leaders get stuck at stage 1 or 2. The leap to stage 3 requires
              you to accept that it will not be done exactly as you would do it.
              That is okay. Sometimes their way will be better.
            </p>
          </section>

          {/* Section 5: Creating Leaders, Not Followers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Creating Leaders, Not Followers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a difference between developing people to follow you
              and developing them to lead themselves:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Creating Followers
                </h3>
                <p className="text-gray-600">
                  You give answers. You solve their problems. You make the
                  decisions. They become dependent on you.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Creating Leaders
                </h3>
                <p className="text-gray-600">
                  You ask questions. You help them solve their own problems.
                  You push decisions down. They become capable without you.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The first approach feels productive in the short term. The second
              feels slower but builds lasting capability. The true leader
              chooses the second.
            </p>
          </section>

          {/* Section 6: Your Legacy */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Your Leadership Legacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Years from now, what will people remember about your leadership?
              Probably not the projects you completed or the targets you hit.
              They will remember:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The person they became because you believed in them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The opportunity you gave them when no one else would</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The lesson you taught that changed how they see the world</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The support you provided when they were struggling</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your legacy is not what you achieved. It is who you helped achieve.
              Those people will carry your influence forward long after you are gone.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Developing Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar valued the importance of education and growth:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;கற்க கசடற கற்பவை கற்றபின்<br />
              நிற்க அதற்குத் தக&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Learn thoroughly what should be learned,
              then live according to what you have learned.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya taught that a leader&apos;s success depends on building capability:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;वृद्धं यवीयांसमनुशिष्यात्।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Those with experience should teach
              those who are learning.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Knowledge and capability must be
              passed on. A leader who hoards knowledge and never develops others
              is not truly leading&mdash;they are merely holding a position. Your
              job is to make yourself replaceable by building people who can
              do what you do.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The leader&apos;s ultimate job is to create more leaders, not followers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Development builds skills, judgment, confidence, and character</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Let go progressively: from &quot;I do&quot; to &quot;you do&quot; while providing support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Ask questions instead of giving answers&mdash;help others discover solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your legacy is not what you achieved but who you helped grow</span>
              </li>
            </ul>
          </section>

          {/* Exercise */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Practical Exercise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Development Map:</strong> Identify three people in your
              life you have some responsibility for (team members, students,
              younger relatives). For each one:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span>What is their biggest growth opportunity right now?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span>What specific experience could help them develop?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span>What support would they need from you?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">4.</span>
                <span>What is stopping you from giving them this opportunity?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This week, have a conversation with each person about their growth.
              Ask what they want to learn. Offer the opportunity you identified.
            </p>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of someone who invested in your development&mdash;a mentor,
              teacher, boss, or family member. What did they do that made the
              biggest difference? How can you pass that forward to someone else?
            </p>
            <p className="text-gray-600 text-sm italic">
              The best way to honour those who developed you is to develop others.
              The chain of growth continues through you.
            </p>
          </section>

          {/* Course Completion */}
          <section className="card p-8 mb-8 bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Congratulations!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have completed the &quot;How to Lead&quot; topic. You have explored:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>What leadership really means&mdash;influence, not authority</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>Why leading by example matters more than words</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>The elements of trust and how to build them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to make hard decisions wisely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>Why developing others is the leader&apos;s highest calling</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Remember: leadership is not a destination but a daily practice.
              Every interaction is an opportunity to lead. Start today.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/leadership/making-hard-decisions"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Making Hard Decisions
          </Link>
          <Link
            href="/topics/leadership"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to How to Lead
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
