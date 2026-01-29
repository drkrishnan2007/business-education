import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is a Business? - Business Wisdom',
  description: 'Understand what a business really is: an organised way to solve problems for others. Learn about value creation and Chanakya\'s wisdom on building enterprises.',
};

export default function WhatIsBusinessPage() {
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
            Lesson 2 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What is a Business?
          </h1>
          <p className="text-xl text-gray-600">
            Strip away the complexity, and every business does the same thing:
            solve problems for people in exchange for payment.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Simple Definition */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              A Business is a Problem-Solving Machine
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forget complicated definitions. At its heart, a business is simply
              an <strong>organised way to solve problems for others</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That is it. Whether it is a global company or a neighbourhood shop,
              every business exists because someone has a problem and is willing
              to pay for a solution.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A restaurant solves the problem of hunger and wanting tasty food</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A tutor solves the problem of not understanding a subject</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A delivery service solves the problem of not having time to shop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>An app solves the problem of finding information quickly</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              No problem to solve? No business.
            </p>
          </section>

          {/* Section 2: Creating Value */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What is Value?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you solve someone&apos;s problem, you create <strong>value</strong>.
              Value means making someone&apos;s life better in some way&mdash;saving them
              time, giving them pleasure, reducing their pain, or fulfilling a need.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is how to think about it:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-gray-600 text-center text-lg">
                <strong>Value</strong> = Life After Your Solution <strong>minus</strong> Life Before Your Solution
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If life is better after, you have created value. The more you improve
              someone&apos;s life, the more value you create.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A good business creates so much value that customers are happy to pay
              for it. They feel they are getting more than they are giving.
            </p>
          </section>

          {/* Section 3: The Exchange */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Fair Exchange
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A business transaction is an exchange:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>You</strong> give a solution (product, service, or help)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>They</strong> give you money (or sometimes other resources)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For this exchange to keep happening, both sides must feel they are
              winning. The customer must feel the solution is worth the money.
              The business must earn enough to keep solving problems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is why good businesses focus on creating real value, not just
              taking money. If customers feel cheated, they stop coming back.
              If customers feel delighted, they return again and again.
            </p>
          </section>

          {/* Section 4: Examples */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Businesses You Already Know
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let us look at businesses around you through this lens:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Local Kirana Shop
                </h3>
                <p className="text-gray-600">
                  <strong>Problem:</strong> You need groceries but cannot go far.<br />
                  <strong>Solution:</strong> Stock everyday items nearby, deliver if needed.<br />
                  <strong>Value:</strong> Convenience and immediate availability.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A YouTube Channel
                </h3>
                <p className="text-gray-600">
                  <strong>Problem:</strong> You want to learn or be entertained.<br />
                  <strong>Solution:</strong> Free videos, paid by advertisers.<br />
                  <strong>Value:</strong> Education or entertainment at no direct cost.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Tuition Teacher
                </h3>
                <p className="text-gray-600">
                  <strong>Problem:</strong> You do not understand a subject at school.<br />
                  <strong>Solution:</strong> Personal explanation and practice.<br />
                  <strong>Value:</strong> Better grades, less confusion, more confidence.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Food Delivery App
                </h3>
                <p className="text-gray-600">
                  <strong>Problem:</strong> You are hungry but cannot or do not want to cook.<br />
                  <strong>Solution:</strong> Connect you to restaurants, deliver food.<br />
                  <strong>Value:</strong> Hot food without leaving home.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Job vs Business */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Difference Between a Job and a Business
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both a job and a business involve solving problems. But there are
              important differences:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#f5f3ff] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  A Job
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; You solve problems for one employer</li>
                  <li>&bull; Someone else decides what problems to solve</li>
                  <li>&bull; You get a fixed salary</li>
                  <li>&bull; Less risk, more stability</li>
                  <li>&bull; Your income has a ceiling</li>
                </ul>
              </div>
              <div className="bg-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#f97316] mb-2">
                  A Business
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; You solve problems for many customers</li>
                  <li>&bull; You decide what problems to solve</li>
                  <li>&bull; Your income depends on value created</li>
                  <li>&bull; More risk, more freedom</li>
                  <li>&bull; Your income has no fixed ceiling</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Neither is better than the other. Many people prefer jobs. Many
              prefer businesses. Some do both. The key is understanding what
              you want and what fits your life.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Creating Value
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya understood that lasting wealth comes from creating value
              for others, not from taking:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;सुखस्य मूलं धर्मः। धर्मस्य मूलं अर्थः। अर्थस्य मूलं राज्यम्।<br />
              राज्यस्य मूलं इन्द्रियजयः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;The root of happiness is dharma (right action).
              The root of dharma is artha (wealth/resources). The root of wealth is
              good governance. The root of good governance is self-mastery.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Wealth is necessary for doing good.
              But sustainable wealth comes from disciplined, ethical action. A
              business that creates genuine value for others while maintaining
              integrity will last. A business built on deception will crumble.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>A business is an organised way to solve problems for others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Value means making someone&apos;s life better in some way</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Business is a fair exchange&mdash;you solve their problem, they pay you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Jobs and businesses both solve problems, but in different ways</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya taught that lasting wealth comes from ethical value creation</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about the last three things you paid for. What problem was
              each solving? What value were you getting? Did you feel you got
              a fair exchange?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to start seeing the
              problem-solution-value pattern in everyday transactions.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/business/seeing-problems"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Seeing Problems
          </Link>
          <Link
            href="/foundations/business/who-pays-why"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Who Pays and Why
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
