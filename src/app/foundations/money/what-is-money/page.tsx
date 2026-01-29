import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Money? - Business Wisdom',
  description: 'Learn what money is, where it came from, and why we use it. Discover how ancient Indian merchants understood money and what Chanakya taught about wealth.',
};

export default function WhatIsMoneyPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/money" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← How Money Works
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What is Money?
          </h1>
          <p className="text-xl text-gray-600">
            Before you can master money, you need to understand what it really is.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Problem */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Imagine a World Without Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Picture this: You are a farmer. You grow rice. But you need clothes.
              The tailor wants vegetables, not rice. The vegetable seller wants pottery.
              The potter wants... maybe rice?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is called <strong>barter</strong>—trading goods directly for other goods.
              It sounds simple but creates a big problem: you need to find someone who has
              exactly what you want AND wants exactly what you have.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Economists call this the &quot;double coincidence of wants.&quot; In plain English:
              bartering is hard because matching needs is difficult.
            </p>
          </section>

          {/* Section 2: The Solution */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Invention That Changed Everything
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Humans solved this problem thousands of years ago. Instead of trading goods
              directly, they invented something to stand in the middle—something everyone
              would accept.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Different societies used different things:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Cowrie shells in India and Africa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Salt in ancient Rome (that is where the word &quot;salary&quot; comes from)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Tea bricks in China and Tibet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Gold and silver coins across the world</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Indian merchants were pioneers. Punch-marked silver coins appeared in the
              Gangetic plains around 600 BCE—some of the earliest coins in the world.
              Tamil traders carried these along routes stretching from Rome to Indonesia.
            </p>
          </section>

          {/* Section 3: What Makes Money Work */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Three Jobs of Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, money does three important jobs:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. A Medium of Exchange
                </h3>
                <p className="text-gray-600">
                  Money lets you trade easily. You sell your work for money, then use that
                  money to buy what you need. No more finding someone who wants exactly
                  what you have.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. A Store of Value
                </h3>
                <p className="text-gray-600">
                  You cannot save a hundred eggs—they will rot. But you can save money.
                  Money lets you store your work for later use. A rice farmer can save
                  money in good years and use it in bad years.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. A Unit of Account
                </h3>
                <p className="text-gray-600">
                  Money gives us a common way to measure value. Is a cow worth more than
                  ten goats? Instead of guessing, we can say: a cow is worth 50,000 rupees,
                  a goat is worth 5,000 rupees. Now comparison is easy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Modern Money */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              From Coins to Digital Digits
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Money has evolved:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Commodity money:</strong> Valuable things like gold and silver coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Paper money:</strong> Notes backed by a promise from the government</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span><strong>Digital money:</strong> Numbers in a bank computer—most money today</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something surprising: <strong>most money is not physical.</strong>
              When you pay with UPI or a bank transfer, no coins or notes move.
              Just numbers change from one account to another.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In fact, over 90% of money in the world exists only as digital records.
              The notes and coins in your wallet are just a small fraction.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over 2,300 years ago, Chanakya wrote about money in the Arthashastra.
              His insights still apply today:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Wealth will slip away from the foolish person who considers it as
              obtained only for personal enjoyment.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> Money is a tool. If you see it only as
              something to spend on yourself, you will lose it. The wise understand that
              money should be managed, grown, and used purposefully.
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Artha (wealth) is the chief, for dharma and kama depend on it.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Money matters because it enables everything else.
              You cannot do good in the world (dharma) or enjoy life (kama) without resources.
              There is nothing shameful about building wealth—it is the foundation of
              a meaningful life.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Money solves the problem of matching needs—it is the universal go-between</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Money does three jobs: exchange, storage, and measurement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Most money today is digital—numbers in computers, not physical coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Indian merchants were pioneers in developing early money systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Chanakya taught that wealth enables purpose—it is honourable, not shameful</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about the last time you paid for something. Did you use cash,
              card, or a digital app? What were you really exchanging—and what was
              the other person really receiving?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to notice what money actually
              does in your daily life.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/money"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/foundations/money/revenue-costs-profit"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Revenue, Costs, and Profit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
