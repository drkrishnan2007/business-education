import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Decisions Shape Your Life - Business Wisdom',
  description: 'Every choice opens some doors and closes others. Learn why understanding this transforms how you approach decisions.',
};

export default function DecisionsShapeLifePage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/decisions" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Decisions Get Made
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Decisions Shape Your Life
          </h1>
          <p className="text-xl text-gray-600">
            Every choice you make opens some doors and closes others. Your
            life is not what happens to you&mdash;it is what you choose.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Power of Choice */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Power of Choice
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about where you are right now. Every aspect of your
              life&mdash;your skills, your relationships, your
              circumstances&mdash;is the result of decisions. Some were big
              and obvious. Most were small and almost invisible.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choosing to read instead of scroll shaped your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choosing to speak up or stay silent shaped your relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choosing to practise or not shaped your abilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choosing how to respond to setbacks shaped your character</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>You are not a passive observer of your life. You are
              its author.</strong> Every day, you write new pages with your
              choices.
            </p>
          </section>

          {/* Section 2: Every Choice Closes Doors */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Every Door You Open Closes Another
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a truth many people resist: <strong>when you choose
              one path, you give up all the others.</strong> This is not a
              bug in life&mdash;it is how life works.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you choose to study engineering, you are not studying
              medicine during those years. If you take a job in Mumbai, you
              are not building a life in Chennai. If you spend this evening
              with friends, you are not spending it practising guitar.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is not a reason to fear decisions. It is a reason to
              make them thoughtfully.
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
              <p className="text-gray-700 mb-0">
                <strong>The key insight:</strong> Not deciding is also a
                decision. Waiting, hoping, or avoiding choices does not
                keep your options open. It just lets circumstances decide
                for you.
              </p>
            </div>
          </section>

          {/* Section 3: Small Decisions Compound */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Small Decisions Compound
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people obsess over big decisions&mdash;which college, which
              job, whom to marry&mdash;while ignoring the small ones. But
              small decisions, repeated daily, often matter more.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider these daily choices:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Read for 30 minutes vs scroll for 30 minutes
                </h3>
                <p className="text-gray-600 mb-0">
                  In a year: 180 hours of learning vs 180 hours of
                  forgetting. Over ten years, one person has read 500
                  books. The other cannot remember what they scrolled.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Speak kindly vs snap at others
                </h3>
                <p className="text-gray-600 mb-0">
                  Each interaction shapes relationships. Over years, one
                  person is surrounded by people who trust them. The other
                  wonders why everyone keeps their distance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Save a little vs spend everything
                </h3>
                <p className="text-gray-600 mb-0">
                  Small amounts saved become freedom. Small amounts spent
                  become nothing. After twenty years, one person has
                  options. The other has only obligations.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Your habits are just decisions you stopped
              noticing.</strong> If you want to change your life, pay
              attention to your small, daily choices.
            </p>
          </section>

          {/* Section 4: Reversible vs Irreversible */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reversible vs Irreversible Decisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not all decisions deserve the same attention. A useful
              distinction:
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Reversible Decisions (Most decisions)
                </h3>
                <p className="text-gray-600 mb-0">
                  You can change course if it does not work. Which book to
                  read, which project to try, which route to take. Decide
                  quickly, learn from results, adjust.
                </p>
              </div>

              <div className="border-l-4 border-[#dc2626] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Irreversible Decisions (Few decisions)
                </h3>
                <p className="text-gray-600 mb-0">
                  You cannot easily undo these. Major financial
                  commitments, certain health choices, ending important
                  relationships. These deserve careful thought, counsel,
                  and time.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>The mistake most people make:</strong> They treat
              reversible decisions like irreversible ones (wasting time in
              analysis paralysis) and irreversible decisions like
              reversible ones (acting impulsively on things that matter
              most).
            </p>
          </section>

          {/* Section 5: Decisions and Identity */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Your Decisions Become Your Identity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every time you make a choice, you are casting a vote for the
              kind of person you want to be.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choose to help someone, and you become a helpful person</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choose to keep your word, and you become trustworthy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choose to learn from failure, and you become resilient</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choose to cut corners, and you become someone who cuts corners</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your character is not something you are born with. It is
              something you build, decision by decision, day by day.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Choice
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood the power of effort and choice:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;உடையர் எனப்படுவது ஊக்கம் அஃதில்லார்<br />
              உடையது உடையரோ மற்று&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;True wealth is energy of soul.
              Without it, possessions mean nothing.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya advised on the consequences of choices:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।<br />
              न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Works are accomplished through
              effort, not mere wishes. Deer do not enter the mouth of a
              sleeping lion.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Your decisions are your
              true wealth. Material possessions come and go, but the
              character you build through your choices stays with you. Do
              not let fear of difficulty stop you from making important
              decisions.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your life is the sum of your decisions, not what happens to you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every choice opens some doors and closes others&mdash;not choosing is also a choice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Small decisions compound over time into massive differences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Decide quickly on reversible choices; think carefully on irreversible ones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your character is built through your daily choices</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about one small decision you make every day without
              much thought. What would happen if you changed that decision
              for the next thirty days? What might be different in a year?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to notice how small
              choices shape your path over time.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/decisions"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/topics/decisions/thinking-clearly"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Thinking Clearly
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
