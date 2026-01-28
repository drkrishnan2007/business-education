import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Trust - Business Wisdom',
  description: 'Trust is the foundation of all leadership. Learn the elements of trust and how to build it deliberately, with ancient wisdom from Chanakya and Thiruvalluvar.',
};

export default function BuildingTrustPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/business/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Lead
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Building Trust
          </h1>
          <p className="text-xl text-gray-600">
            Trust is the invisible currency of leadership. Without it, you have
            only authority. With it, you have everything.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: What Trust Really Is */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Trust Really Is
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is the belief that someone will do what they say, act in
              your interest, and not harm you. It is the willingness to be
              vulnerable with another person.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you trust someone, you:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Share information they could use against you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Depend on them when you cannot verify their actions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Believe their promises without written guarantees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Assume positive intent when their behaviour is unclear</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Trust is risk. You give someone power over you. That is why trust
              must be earned&mdash;and why breaking it is so serious.
            </p>
          </section>

          {/* Section 2: The Elements of Trust */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Four Elements of Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is built from four elements. All four must be present:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Competence
                </h3>
                <p className="text-gray-600">
                  Can you do what you say you can do? Do you have the skills
                  and knowledge to deliver results? People cannot trust someone
                  who means well but cannot perform.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Consistency
                </h3>
                <p className="text-gray-600">
                  Are you predictable? Do you behave the same way whether
                  people are watching or not? Trust requires knowing what to
                  expect from you.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Character
                </h3>
                <p className="text-gray-600">
                  Are you honest? Do you do the right thing, even when it
                  costs you? Character is what you do when no one can hold
                  you accountable.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. Care
                </h3>
                <p className="text-gray-600">
                  Do you genuinely care about others&apos; wellbeing? People can
                  sense when they are merely being used. True trust requires
                  believing the other person wants good things for you.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If any element is missing, trust is incomplete. Someone might be
              competent but dishonest. Someone might care but be inconsistent.
              Full trust requires all four.
            </p>
          </section>

          {/* Section 3: How Trust is Built */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How Trust is Built
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is built slowly, through small deposits over time:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Keep small promises:</strong> If you say you will send an email by Friday, send it by Friday</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be honest about limitations:</strong> Say &quot;I don&apos;t know&quot; when you don&apos;t know</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Share credit generously:</strong> Acknowledge others&apos; contributions publicly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Accept blame privately:</strong> Protect your team from outside criticism</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Follow through:</strong> Do what you say you will do, every time</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              There is no shortcut. Trust is a bank account filled one small
              deposit at a time. The more deposits you make, the more you can
              withdraw when you need understanding or forgiveness.
            </p>
          </section>

          {/* Section 4: How Trust is Destroyed */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How Trust is Destroyed
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is built in drops and lost in buckets. A single betrayal
              can destroy years of trust-building. These are the fastest ways
              to lose trust:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Lying:</strong> Even small lies suggest bigger ones are possible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Breaking confidences:</strong> Sharing what was told in private</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Taking credit:</strong> Claiming others&apos; work as your own</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Blaming others:</strong> Pointing fingers to save yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Inconsistency:</strong> Having different rules for different people</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Once trust is broken, it is extremely difficult to rebuild. People
              remember betrayals for years. Guard trust as you would guard your
              most precious possession.
            </p>
          </section>

          {/* Section 5: Trust in Difficult Situations */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Trust in Difficult Situations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is tested most when things go wrong:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  When You Cannot Keep a Promise
                </h3>
                <p className="text-gray-600">
                  Tell people early, explain why, and offer alternatives.
                  Broken promises hurt less when people are not surprised.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  When You Make a Mistake
                </h3>
                <p className="text-gray-600">
                  Admit it quickly, apologise sincerely, fix what you can,
                  and explain what you will do differently. Honesty after
                  mistakes can actually increase trust.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  When You Have Bad News
                </h3>
                <p className="text-gray-600">
                  Deliver it directly, do not hide behind email or others.
                  People trust those who give them hard truths more than
                  those who tell comfortable lies.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Paradoxically, difficult situations are often opportunities to
              build trust. How you handle adversity reveals your true character.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar spoke of the power of trustworthy speech:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;தன்நெஞ்சறிவது பொய்யற்க பொய்த்தபின்<br />
              தன்நெஞ்சே தன்னைச் சுடும்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do not lie to your own conscience.
              After lying, your own heart will burn you.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya advised on choosing trusted associates:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;विश्वासो नैव कर्तव्यः स्त्रीषु राजकुलेषु च।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do not place blind trust; verify
              through observation and testing.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Trust must be earned, not assumed.
              A wise leader builds trust through consistent action, while also
              being discerning about where to place their own trust. Trust
              generously but verify wisely.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trust requires four elements: competence, consistency, character, and care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trust is built slowly through many small deposits over time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trust is destroyed quickly&mdash;a single betrayal can undo years of building</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Difficult situations are opportunities to build trust through honest handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>As Thiruvalluvar taught: lying burns your own conscience&mdash;honesty is freedom</span>
              </li>
            </ul>
          </section>

          {/* Exercise */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Practical Exercise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Trust Audit:</strong> For each person in your team
              or close circle, rate yourself on the four elements of trust
              (1-5 scale):
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span><strong>Competence:</strong> Do they see me as capable in my role?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span><strong>Consistency:</strong> Can they predict how I will behave?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span><strong>Character:</strong> Do they believe I will be honest with them?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">4.</span>
                <span><strong>Care:</strong> Do they believe I genuinely want good things for them?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Where are you strongest? Weakest? Choose one element to
              deliberately improve over the next month.
            </p>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about someone you trust completely. Which of the four
              elements&mdash;competence, consistency, character, or care&mdash;made
              you first begin to trust them? Which element keeps you trusting
              them now?
            </p>
            <p className="text-gray-600 text-sm italic">
              Understanding how trust was built with you helps you understand
              how to build it with others.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business/leadership/leading-by-example"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Leading by Example
          </Link>
          <Link
            href="/topics/business/leadership/making-hard-decisions"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Making Hard Decisions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
