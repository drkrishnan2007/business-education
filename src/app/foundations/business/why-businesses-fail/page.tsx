import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Businesses Fail - Business Wisdom',
  description: 'Learn the common reasons businesses fail and how to avoid them. Discover Chanakya\'s wisdom on avoiding pitfalls and why failure is learning, not ending.',
};

export default function WhyBusinessesFailPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/business" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Businesses Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 6 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Why Businesses Fail
          </h1>
          <p className="text-xl text-gray-600">
            Understanding why businesses fail is as important as understanding
            how they succeed. Most failures follow predictable patterns.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Losing Sight of the Problem */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Losing Sight of the Problem You Solve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember Lesson 2? A business exists to solve problems for people.
              The moment you forget this, trouble begins.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Signs that a business has lost its way:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Focusing on what the owner wants instead of what customers need</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Adding features nobody asked for while ignoring complaints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Chasing trends instead of serving core customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Talking about the product more than the customer&apos;s problem</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A restaurant that starts caring more about fancy decor than good
              food. A tutor who shows off knowledge instead of helping students
              learn. A shop that stocks what the owner likes instead of what
              customers buy. All heading for trouble.
            </p>
          </section>

          {/* Section 2: Running Out of Money */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Running Out of Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the most direct cause of business failure. No money, no
              business. It can happen in several ways:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  Cash Flow Problems
                </h3>
                <p className="text-gray-600 text-sm">
                  You might have sales coming, but if you cannot pay rent THIS
                  week, you are finished. Bills do not wait for customers to pay.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  Spending Too Much Too Soon
                </h3>
                <p className="text-gray-600 text-sm">
                  A fancy office, expensive equipment, too many staff&mdash;before
                  there is enough revenue to support them. Costs grow faster
                  than income.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  Not Charging Enough
                </h3>
                <p className="text-gray-600 text-sm">
                  Scared to charge what you are worth. Revenue stays low, costs
                  stay high, profit never arrives. Eventually the gap closes you.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  No Emergency Fund
                </h3>
                <p className="text-gray-600 text-sm">
                  One bad month&mdash;a pandemic, an accident, a big customer
                  leaving&mdash;and there is no cushion. The business collapses
                  under pressure that a reserve could have survived.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Ignoring Customers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ignoring What Customers Actually Want
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes business owners become deaf to their customers:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;My customers do not understand quality&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;They are wrong about what they need&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;That feedback is just one person complaining&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I know better than them&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The moment you stop listening, you start dying. Markets change.
              Needs evolve. Competitors improve. If you are not hearing what
              customers tell you, someone else is&mdash;and they will take your
              customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Customer complaints are gifts. They tell you exactly what to fix.
              Businesses that listen and adapt survive. Those that defend and
              ignore fail.
            </p>
          </section>

          {/* Section 4: Growing Too Fast or Too Slow */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Growing Wrong
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both too fast and too slow can kill a business:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#f97316] mb-2">
                  Too Fast
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; Quality drops because you cannot keep up</li>
                  <li>&bull; Cash runs out funding growth</li>
                  <li>&bull; Culture breaks with too many new people</li>
                  <li>&bull; Systems fail under pressure</li>
                  <li>&bull; Customers who made you successful leave</li>
                </ul>
              </div>
              <div className="bg-[#f5f3ff] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Too Slow
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; Competitors take your market</li>
                  <li>&bull; Opportunities pass you by</li>
                  <li>&bull; Good staff leave for more exciting places</li>
                  <li>&bull; You become irrelevant</li>
                  <li>&bull; Costs rise but revenue stays flat</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The right pace depends on your situation. But both mistakes are
              common. Growing requires courage AND caution.
            </p>
          </section>

          {/* Section 5: Not Adapting */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Not Adapting When the World Changes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The world never stops changing. New technology. New competitors.
              New customer preferences. New regulations. Businesses that
              survive for decades are the ones that adapt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about what has changed in just the last few years:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>UPI changed how people pay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>COVID changed how people work and shop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Social media changed how businesses reach customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>AI is changing how work gets done</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Businesses that refused to accept UPI lost customers. Businesses
              that refused to go online during COVID struggled. Change is
              uncomfortable, but resisting it is worse.
            </p>
          </section>

          {/* Section 6: Failure as Learning */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Failure is Learning, Not Ending
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something important: <strong>most successful entrepreneurs
              have failed before.</strong> Failure teaches what success cannot.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What failure teaches:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What does not work (so you stop doing it)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What customers really care about (not what you assumed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>How to manage money (usually learned the hard way)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Who you can trust (and who you cannot)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What you are good at (and what you need help with)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The only real failure is giving up permanently. If you learn from
              a setback and try again smarter, you have not failed&mdash;you have
              been educated.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Avoiding Pitfalls
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya taught that avoiding failure requires both foresight
              and humility:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;न विश्वसेत् कुमित्रे च मित्रे चापि न विश्वसेत्।<br />
              कदाचित् कुपितं मित्रं सर्वं गुह्यं प्रकाशयेत्॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do not trust a false friend, and do
              not trust even a true friend completely. An angered friend may
              reveal all secrets.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya also taught about learning from mistakes:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;दोषोऽपि गुणसम्भवः।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;From faults, virtues can arise.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Be cautious but not paranoid.
              Prepare for problems but do not let fear stop you. And when you
              fail, remember: every mistake contains a lesson. Those who learn
              from failure often become stronger than those who never failed.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Businesses fail when they forget the problem they solve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Running out of money is the most direct killer&mdash;watch cash flow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Ignoring customer feedback is slow suicide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Growing too fast or too slow both cause problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Failure teaches what success cannot&mdash;learn and try again</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a business you know that closed or struggled. Can you
              identify which of these failure patterns might have caused their
              problems? What could they have done differently?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to learn from others&apos;
              failures so you can avoid the same mistakes.
            </p>
          </section>

          {/* Topic Completion */}
          <section className="card p-8 mb-8 bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Congratulations!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have completed the &quot;How Businesses Work&quot; topic. You now
              understand:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to spot problems worth solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>What a business really is and how it creates value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to identify customers who will pay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How businesses make money through profit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to find your space among competitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>Why businesses fail and how to avoid those traps</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Most importantly, you have learned timeless wisdom from
              Chanakya and Thiruvalluvar that will guide you whether you
              start a business or work in one.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/business/competition"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Competition
          </Link>
          <Link
            href="/foundations/business"
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
