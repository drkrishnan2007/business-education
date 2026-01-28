import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Pays and Why - Business Wisdom',
  description: 'Learn to identify customers: who has the problem AND can pay for the solution. Discover the difference between needs and wants, with wisdom from Thirukkural on understanding others.',
};

export default function WhoPaysWhyPage() {
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
            Lesson 3 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Who Pays and Why
          </h1>
          <p className="text-xl text-gray-600">
            Finding people who have a problem is not enough. You need to find
            people who have the problem AND are willing to pay for a solution.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Customer Question */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Not Everyone is Your Customer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have found a problem worth solving. Great! But here is the
              hard truth: <strong>not everyone who has the problem will pay
              for your solution.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A customer is not just someone with a problem. A customer is
              someone who:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Has the problem</strong> you are solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Knows</strong> they have the problem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Wants</strong> a solution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Can pay</strong> for the solution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Will pay</strong> for your specific solution</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All five conditions must be true. Miss any one, and you do not
              have a customer yet.
            </p>
          </section>

          {/* Section 2: What People Say vs What They Pay For */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What People Say vs What They Pay For
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something surprising: <strong>what people say they want
              is often different from what they actually pay for.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask people what they want, and they might say:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I want to eat healthy food.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I want to exercise more.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I want to read more books.&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              But watch what they actually spend money on:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Fast food and snacks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Streaming services for movies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Mobile games</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              People&apos;s wallets reveal their true priorities. Do not build a
              business based on what people say. Build it based on what they
              actually do and pay for.
            </p>
          </section>

          {/* Section 3: Needs vs Wants */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Needs vs Wants
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              People pay for both needs and wants, but they behave differently:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#f5f3ff] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Needs
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; Food, shelter, basic clothing</li>
                  <li>&bull; Healthcare, education basics</li>
                  <li>&bull; People will pay, but resist high prices</li>
                  <li>&bull; They compare options carefully</li>
                  <li>&bull; Price matters a lot</li>
                </ul>
              </div>
              <div className="bg-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#f97316] mb-2">
                  Wants
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>&bull; Fashion, entertainment, status</li>
                  <li>&bull; Convenience, luxury, pleasure</li>
                  <li>&bull; People will pay more for something special</li>
                  <li>&bull; Emotions drive decisions</li>
                  <li>&bull; Experience matters more than price</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is an interesting fact: people often spend more on wants than
              needs. Someone might bargain hard for vegetables but happily pay
              full price for a trendy shirt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Both needs and wants create business opportunities. But understand
              which one you are serving&mdash;it changes how you price and sell.
            </p>
          </section>

          {/* Section 4: Finding People Who Value Your Solution */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Finding People Who Value What You Offer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The same solution has different value to different people.
              Consider a tutoring service:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>To a student who is failing: extremely valuable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>To a student who is already top of class: less valuable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>To wealthy parents who want the best: very valuable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>To families with limited income: valuable but expensive</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smart businesses find the people who value their solution most.
              These people will pay willingly and appreciate what you do.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trying to sell to everyone often means selling to no one. Better
              to delight a smaller group than disappoint a larger one.
            </p>
          </section>

          {/* Section 5: Understanding Others */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Art of Understanding Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To find your customers, you must understand how they think. This
              means:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Talk to them:</strong> Ask about their problems, frustrations, and what they have tried</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Watch them:</strong> Observe what they do, not just what they say</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Walk in their shoes:</strong> Experience their problem yourself if possible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Ask about money:</strong> What have they already paid for similar solutions?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many businesses fail because the founder assumed they understood
              customers without actually talking to them. Do not make this mistake.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The best businesspeople are often great listeners. They understand
              others deeply before they try to sell anything.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Understanding Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar, the ancient Tamil poet, understood that knowing
              others is the key to all success:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;அறிவுடையார் எல்லாம் உடையார் அறிவிலார்<br />
              என்னுடைய ரேனும் இலர்.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;The wise possess everything; the ignorant,
              though they may own much, have nothing.&quot; (Kural 430)
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Understanding is worth more than
              possessions. A business built on deep understanding of customers
              will succeed. A business built on assumptions, no matter how well
              funded, will struggle. Seek to understand before seeking to sell.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>A customer has the problem, knows it, wants a solution, can pay, and will pay for yours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>What people say they want is often different from what they actually pay for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>People buy both needs and wants, but behave differently for each</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Find people who value your solution highly, not everyone with the problem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Talk to and observe potential customers before building anything</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about something you bought recently that you did not
              strictly need. Why did you buy it? What made it worth the
              money to you? Would everyone value it the same way?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to understand how you
              make buying decisions&mdash;this helps you understand how
              others make them too.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business/what-is-business"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What is a Business?
          </Link>
          <Link
            href="/topics/business/how-businesses-make-money"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: How Businesses Make Money
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
