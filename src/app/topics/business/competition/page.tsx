import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Competition and Finding Your Space - Business Wisdom',
  description: 'Learn why competition is not bad, and how to find your unique angle in a crowded market. Discover Chanakya\'s wisdom on strategy and positioning.',
};

export default function CompetitionPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/business" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Businesses Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 5 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Competition and Finding Your Space
          </h1>
          <p className="text-xl text-gray-600">
            Competition is not a threat&mdash;it is proof that people want what
            you are offering. The question is: why should they choose you?
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Competition is Good News */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Competition is Good News
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many people see competition and think: &quot;Oh no, someone else is
              already doing this. I should find something else.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But consider this: <strong>competition proves demand exists.</strong>
              If many businesses are selling something, it means many people want
              to buy it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about it:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>There are millions of restaurants. Does that stop new ones from opening?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>There are thousands of tutors. Do students stop needing help?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>There are dozens of phone brands. Do people stop buying phones?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A market with no competition might mean nobody wants what you are
              offering. Competition is a sign you are in the right place.
            </p>
          </section>

          {/* Section 2: Finding Your Angle */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Finding Your Unique Angle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The question is not &quot;How do I eliminate competition?&quot; The
              question is &quot;Why would someone choose me over others?&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You do not need to be better at everything. You just need to be
              the best choice for <em>someone</em>. Here are ways to stand out:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Faster
                </h3>
                <p className="text-gray-600">
                  Can you deliver quicker than others? The dosa shop that
                  serves in 5 minutes beats the one that takes 20, even if
                  the taste is similar.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Cheaper
                </h3>
                <p className="text-gray-600">
                  Can you offer the same value at a lower price? This works
                  if you can keep your costs down without cutting quality.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Friendlier
                </h3>
                <p className="text-gray-600">
                  Can you provide a better experience? People will pay more
                  and travel further to be treated well. Kindness is a
                  competitive advantage.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Closer
                </h3>
                <p className="text-gray-600">
                  Can you be more convenient? The neighbourhood kirana store
                  survives despite big malls because it is two minutes away,
                  not two hours.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  More Specialised
                </h3>
                <p className="text-gray-600">
                  Can you focus on a specific need that others ignore? A tutor
                  who only teaches Maths to Class 10 students can be more
                  helpful than a general tutor.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Be Best at Something */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              You Cannot Be Best at Everything
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is an important truth: <strong>you cannot be fastest AND
              cheapest AND friendliest AND closest AND most specialised.</strong>
              Trying to be everything to everyone makes you nothing special
              to anyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The best businesses choose their focus:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Apple</strong> chose: best design, not cheapest price</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Decathlon</strong> chose: affordable sports gear, not luxury</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Udupi restaurants</strong> chose: authentic South Indian, not fusion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Your local tailor</strong> chose: personal service, not factory speed</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Each business finds its space by being excellent at something
              specific. What will you be excellent at?
            </p>
          </section>

          {/* Section 4: Copying vs Creating */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Danger of Copying
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you see a successful business, it is tempting to copy exactly
              what they do. But copying has a problem:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>If you are the same as everyone else, why would anyone
              choose you?</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Copying can teach you how things work. But to succeed, you must
              eventually offer something different or better. This does not
              mean inventing something completely new. It means:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Taking an existing idea and improving it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Applying an idea from one field to another</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Serving an overlooked group better than anyone else</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Combining two ideas nobody thought to combine</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Learn from others, but do not be a clone. Your unique combination
              of skills, personality, and perspective is your real advantage.
            </p>
          </section>

          {/* Section 5: Competition as Teacher */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Learning from Competitors
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smart business people study their competition carefully. Not to
              copy, but to learn:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>What are they doing well?</strong> Can you learn their methods?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>What are they doing poorly?</strong> Can you do that better?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>What are they ignoring?</strong> Can you serve those customers?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Why do their customers complain?</strong> Can you solve those complaints?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your competitors have already learned many lessons the hard way.
              Study them, and you can learn without paying the same price.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lord Krishna, in the Bhagavad Gita, teaches the mindset needed
              to face competition with equanimity:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;समः शत्रौ च मित्रे च तथा मानावमानयोः।<br />
              शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Treat enemies and friends alike. Be
              balanced in honour and disgrace. Stay steady in comfort and
              discomfort. Be detached and impartial.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya advised on respecting your competition:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;बलवान् अपि दुर्बलं न अवमन्येत।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Even the strong should not disregard
              the weak.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Do not obsess over competitors.
              Study them, learn from them, but do not let them distract you
              from serving your customers. A small business that truly serves
              its customers can thrive alongside giants. Focus on your game.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Competition proves demand exists&mdash;it is good news, not bad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Find your angle: faster, cheaper, friendlier, closer, or more specialised</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>You cannot be best at everything&mdash;choose what to be excellent at</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Copying without differentiation leads nowhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya taught: study others, but focus on your own game</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about two businesses that do similar things&mdash;maybe two
              restaurants, two shops, or two apps. Why might someone choose
              one over the other? What makes each one special to its customers?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to notice how businesses
              find their space even when competing.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business/how-businesses-make-money"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: How Businesses Make Money
          </Link>
          <Link
            href="/topics/business/why-businesses-fail"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Why Businesses Fail
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
