import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walking Away - Business Wisdom',
  description: 'Learn why the ability to walk away is your most powerful negotiation tool. Know your alternatives, set your limits, and never fear saying no.',
};

export default function WalkingAwayPage() {
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
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Walking Away
          </h1>
          <p className="text-xl text-gray-600">
            Your most powerful tool in any negotiation is the ability to say
            no. A bad deal is worse than no deal at all.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Power of No */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Power of Being Willing to Walk Away
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a strange truth about negotiation: <strong>the person
              who needs the deal less has more power.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about it. If you desperately need to sell your car today,
              any buyer has power over you. But if you can wait, if you have
              other options, if you do not <em>need</em> this particular deal&mdash;suddenly
              you can negotiate from strength.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is why knowing your walk-away point is so important. If
              you know you will refuse any offer below Rs 50,000, and you
              actually mean it, you cannot be pressured below that number.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The willingness to walk away is not a tactic. It is the
              foundation of negotiating from a position of strength.
            </p>
          </section>

          {/* Section 2: Know Your Alternatives */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Know Your Best Alternative
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your walk-away power depends on your alternatives. Ask yourself:
              <strong> if this negotiation fails completely, what will I do?</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is called your BATNA: Best Alternative to Negotiated Agreement.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Strong BATNA = Strong Position
                </h3>
                <p className="text-gray-600">
                  If you have another job offer in hand, you can negotiate
                  confidently with your current employer. If you have multiple
                  buyers interested, you can be firm on price.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Weak BATNA = Weak Position
                </h3>
                <p className="text-gray-600">
                  If this is your only job prospect, you have less leverage.
                  If you must sell today or face financial disaster, buyers
                  can sense your desperation.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Before any important negotiation, work on improving
              your alternatives.</strong> Get other offers. Explore other
              options. Build relationships with other potential partners.
              Your negotiating power comes from having real alternatives.
            </p>
          </section>

          {/* Section 3: Set Your Walk-Away Point */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Set Your Walk-Away Point Before You Start
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before any negotiation, decide clearly: what is the minimum
              acceptable outcome? Below what point will I refuse to agree?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This matters because:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>In the moment, you might talk yourself into a bad deal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Emotions can cloud judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Pressure from the other side can push you too far</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Sunk cost fallacy (&quot;I have spent so much time on this...&quot;)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              By deciding your limit in advance, when you are calm and
              thinking clearly, you protect yourself from making decisions
              you will regret later.
            </p>
          </section>

          {/* Section 4: Signs to Walk Away */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Warning Signs: When to Walk Away
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond your pre-set limits, watch for these warning signs:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-800 mb-2">
                  They Are Not Acting in Good Faith
                </h3>
                <p className="text-red-700">
                  Lying, hiding important information, changing agreed terms,
                  making threats. If they do not negotiate honestly, any
                  agreement will be unreliable.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-800 mb-2">
                  The Deal Keeps Getting Worse
                </h3>
                <p className="text-red-700">
                  Each concession you make leads to demands for more. The
                  goalposts keep moving. This is a sign they will never be
                  satisfied.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-800 mb-2">
                  You Are Being Pressured Into Rushing
                </h3>
                <p className="text-red-700">
                  &quot;This offer expires today!&quot; &quot;Decide now or never!&quot;
                  Real opportunities can usually wait for reasonable
                  consideration. Artificial urgency is a manipulation tactic.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-800 mb-2">
                  Your Gut Says Something Is Wrong
                </h3>
                <p className="text-red-700">
                  If something feels off, it probably is. Trust your instincts.
                  A deal that makes you uncomfortable will cause problems later.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: How to Walk Away Gracefully */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Walk Away Gracefully
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Walking away does not mean slamming the door. You might work
              with this person again. Your reputation matters.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Be Clear, Not Hostile
                </h3>
                <p className="text-gray-600">
                  &quot;Thank you for your time, but we cannot reach an agreement
                  that works for both of us.&quot; No blame, no anger, just facts.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Leave the Door Open
                </h3>
                <p className="text-gray-600">
                  &quot;If circumstances change, I would be happy to discuss
                  again.&quot; Sometimes the other side comes back with a better
                  offer after you have walked away.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Focus on Interests, Not Blame
                </h3>
                <p className="text-gray-600">
                  &quot;Our requirements are just too different right now&quot; is
                  better than &quot;You are being unreasonable.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Actually Walk Away
                </h3>
                <p className="text-gray-600">
                  If you say you are leaving but do not leave, you lose all
                  credibility. If you have decided to walk away, do it. Your
                  word must mean something.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: When Walking Away Changes Everything */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When Walking Away Changes Everything
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes, being willing to walk away gets you the deal you
              wanted all along.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you genuinely prepare to leave:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The other side realizes you are serious</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They face losing the deal entirely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Suddenly, compromises they rejected become possible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Their hidden flexibility appears</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              But this only works if you actually mean it. If you threaten
              to walk away but cannot follow through, you look weak and lose
              negotiating power forever.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Never bluff.</strong> Only walk away when you are
              genuinely prepared to walk away.
            </p>
          </section>

          {/* Section 7: Accepting Loss */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Accepting When There Is No Deal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes you walk away and the deal does not happen. That is
              okay. In fact, that is the point.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A bad deal accepted is worse than no deal at all because:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You live with the consequences for a long time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You cannot pursue better opportunities while locked in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Resentment poisons relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You signal you can be pushed around</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Trust your preparation. If your analysis said the minimum
              acceptable was Rs 50,000, and they will not go above Rs 40,000,
              accept that this deal was not meant to be.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Strategic Withdrawal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya understood that knowing when to retreat is as important
              as knowing when to advance:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;अप्राप्यं त्यज संदिग्धं प्राप्तं प्राप्तमुपाश्रय&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Let go of what is unattainable,
              avoid the doubtful, and hold on to what is certain.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And Thiruvalluvar on self-respect in dealings:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;மானம் குலைந்தால் உயிர் நில்லாது<br />
              ஊணும் உறக்கமும் இல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;When honour is lost, life has no
              meaning; even food and sleep bring no comfort.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Some deals cost more than they
              are worth. When something cannot be achieved on fair terms, it is
              wisdom to let it go. Protect your self-respect and your
              reputation&mdash;these matter more than any single deal.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The willingness to walk away is your greatest source of power</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Build strong alternatives before you negotiate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Set your walk-away point before the negotiation starts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Walk away gracefully&mdash;your reputation follows you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>A bad deal is worse than no deal&mdash;trust your limits</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a time when you agreed to something you later regretted.
              What would have happened if you had said no? What was really
              holding you back from walking away?
            </p>
            <p className="text-gray-600 text-sm italic">
              Often we fear walking away more than we should. The consequences
              of saying no are usually less severe than we imagine.
            </p>
          </section>

          {/* Course Completion */}
          <section className="card p-8 mb-8 bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] border-2 border-[#5b21b6]">
            <div className="text-center">
              <div className="text-5xl mb-4">&#127942;</div>
              <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
                Congratulations!
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have completed the &quot;How to Negotiate&quot; topic. You now
                understand the fundamentals:
              </p>
              <ul className="text-gray-700 text-left max-w-md mx-auto space-y-2 mb-6">
                <li>&#10003; Negotiation is finding agreements, not winning fights</li>
                <li>&#10003; Look beyond positions to understand interests</li>
                <li>&#10003; Preparation determines outcomes</li>
                <li>&#10003; Create value before dividing it</li>
                <li>&#10003; Know when and how to walk away</li>
              </ul>
              <p className="text-gray-700">
                Practice these skills in your daily life. Start small&mdash;with
                family decisions, with friends, with small purchases. As your
                confidence grows, you will be ready for bigger negotiations.
              </p>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/negotiation/creating-value"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Creating Value
          </Link>
          <Link
            href="/topics/negotiation"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to Topic Overview
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
