import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preparation is Everything - Business Wisdom',
  description: 'Learn why the best negotiators do most of their work before the conversation starts. Master Chanakya\\'s wisdom on strategic preparation.',
};

export default function PreparationPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Negotiate
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Preparation is Everything
          </h1>
          <p className="text-xl text-gray-600">
            The best negotiators win before they sit down at the table.
            Most of the work happens before the conversation starts.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Unprepared Negotiator */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Happens Without Preparation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine walking into a job interview without knowing anything
              about the company. Or trying to buy a car without checking
              market prices. Or asking for a raise without knowing what
              others in your role earn.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You would be at a massive disadvantage. You would not know:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What is a fair deal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What the other side really needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What options you have if this deal fails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Where you can be flexible and where you cannot</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              An unprepared negotiator either gives away too much or asks
              for too little. Either way, they lose.
            </p>
          </section>

          {/* Section 2: Know Yourself */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Know Yourself First
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before any negotiation, answer these questions about yourself:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What Do I Really Want?
                </h3>
                <p className="text-gray-600">
                  Not your opening position, but your real interests. Why
                  do you want this? What would truly satisfy you?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What is My Best Alternative?
                </h3>
                <p className="text-gray-600">
                  If this negotiation fails completely, what will I do?
                  This is called your BATNA (Best Alternative to Negotiated
                  Agreement). It determines your power.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What is My Walk-Away Point?
                </h3>
                <p className="text-gray-600">
                  Below what point will I refuse to agree? This is your
                  absolute minimum. Know it clearly before you start.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Where Can I Be Flexible?
                </h3>
                <p className="text-gray-600">
                  What aspects matter less to me? These become trading
                  chips&mdash;things I can give up to get what I really need.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Know the Other Side */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Know the Other Side
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Now research the person or organisation you will negotiate with:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What Do They Need?
                </h3>
                <p className="text-gray-600">
                  What are their likely interests? What problems are they
                  trying to solve? What pressures are they under?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What Are Their Alternatives?
                </h3>
                <p className="text-gray-600">
                  If you do not reach a deal, what will they do? If they
                  have many options, they have more power. If they have
                  few options, you have more power.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What Constraints Do They Face?
                </h3>
                <p className="text-gray-600">
                  Budget limits? Deadlines? Boss approval needed? Authority
                  limits? Understanding their constraints helps you propose
                  solutions that work for them.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  What is Their Reputation?
                </h3>
                <p className="text-gray-600">
                  Have others dealt with them? What is their track record?
                  Do they keep their word? This affects how much you trust
                  their commitments.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Know the Context */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Know the Context
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What is happening in the broader environment?
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Market conditions:</strong> Is it a buyer&apos;s market or seller&apos;s market?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Timing:</strong> Is there urgency on either side? End of quarter? Moving deadline?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Standards:</strong> What is normal in this situation? What do others pay/receive?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>History:</strong> Have these parties negotiated before? What happened?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Context shapes what is possible. A fair deal in a boom economy
              looks different from a fair deal in a recession.
            </p>
          </section>

          {/* Section 5: Prepare Your Approach */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Prepare Your Approach
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Finally, think about how you will conduct the negotiation:
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-[#5b21b6] pl-4">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Opening Move
                </h3>
                <p className="text-gray-600">
                  Should you make the first offer or let them? Usually,
                  making the first offer (if well-researched) anchors the
                  discussion. But if you know little, let them go first.
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <h3 className="font-serif text-lg text-[#f97316] mb-2">
                  Key Points
                </h3>
                <p className="text-gray-600">
                  What are the 2-3 most important things you want to
                  communicate? Write them down. You are more likely to
                  say them clearly under pressure.
                </p>
              </div>

              <div className="border-l-4 border-[#eab308] pl-4">
                <h3 className="font-serif text-lg text-[#eab308] mb-2">
                  Possible Objections
                </h3>
                <p className="text-gray-600">
                  What might they say no to? Prepare responses. If you are
                  surprised by objections, you react emotionally. If you
                  expect them, you respond thoughtfully.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-serif text-lg text-green-700 mb-2">
                  Creative Options
                </h3>
                <p className="text-gray-600">
                  Brainstorm different ways to meet both sides&apos; interests.
                  The more options you have, the more likely you find one
                  that works.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Preparation Checklist */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Quick Preparation Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before any important negotiation, answer:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What are my real interests (not just positions)?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What is my best alternative if this fails?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What is my walk-away point?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What do I know about their interests?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What are their alternatives?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What constraints are they under?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What is fair in this context?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What objections might they raise?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5b21b6]">&#9744;</span>
                  <span>What creative options could work for both?</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Even 15 minutes of preparation is better than none. For
              important negotiations, spend hours or days preparing.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Preparation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya was the master of strategic preparation. His advice
              to rulers applies perfectly to negotiation:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;पूर्वं करोति यत्कार्यं ततः पश्चादुपक्रमः।<br />
              पूर्वं न कृत्वा यः कार्यं पश्चाद् हस्ति स मूढधीः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do the groundwork first, then take
              action. One who acts without preparation and regrets later is
              a fool.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And on understanding your position:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;स्वशक्तिं परशक्तिं च ज्ञात्वा कर्म समाचरेत्&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Know your own strength and the
              other&apos;s strength before you act.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Never walk into a negotiation
              blind. Know yourself, know the other side, know the situation.
              The outcome is often decided before the conversation begins.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Most negotiation work happens before the conversation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Know your interests, alternatives, and walk-away point</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Research the other side: their needs, constraints, alternatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Understand the context: market, timing, standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya: &quot;Know your strength and theirs before you act&quot;</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a negotiation you might face soon&mdash;maybe asking
              for something from a parent, teacher, or friend. Run through
              the preparation checklist. What do you know? What do you need
              to find out?
            </p>
            <p className="text-gray-600 text-sm italic">
              Even thinking through these questions changes how you approach
              the conversation.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/negotiation/interests-vs-positions"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Interests vs Positions
          </Link>
          <Link
            href="/topics/negotiation/creating-value"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Creating Value
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
