import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Negotiation Really Is - Business Wisdom',
  description: 'Learn what negotiation truly means: finding agreements that work for everyone, not winning fights. Discover how everyday interactions involve negotiation.',
};

export default function WhatIsNegotiationPage() {
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
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What Negotiation Really Is
          </h1>
          <p className="text-xl text-gray-600">
            Negotiation is not about tricks or tactics. It is about two or more
            people trying to find an agreement that works for everyone.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Wrong Idea */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Forget What You Have Seen in Movies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When most people hear &quot;negotiation,&quot; they picture two people
              in suits, staring each other down, trying to outsmart one another.
              Someone wins, someone loses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is not what good negotiation looks like. In fact, if you approach
              negotiation as a fight to be won, you will usually lose&mdash;even when
              you think you have won.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Why?</strong> Because the other person will remember. They
              will feel cheated. They will not want to work with you again. In
              business and in life, you will meet the same people repeatedly.
              Your reputation follows you.
            </p>
          </section>

          {/* Section 2: What Negotiation Actually Is */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Negotiation is Problem-Solving Together
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a better way to think about it: <strong>negotiation is
              two or more people trying to solve a problem together.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The problem is simple: we both want something, and we need to
              figure out how to make it work for both of us.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A customer wants a lower price. A seller wants fair payment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>An employee wants more salary. An employer wants to stay within budget.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Two siblings want the same toy. Both cannot have it at the same time.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              In each case, the goal is not to defeat the other person. It is to
              find an arrangement where both sides feel the outcome is fair.
            </p>
          </section>

          {/* Section 3: You Negotiate Every Day */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              You Already Negotiate Every Day
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You might think negotiation is something that happens in
              boardrooms. But you negotiate constantly:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  With Family
                </h3>
                <p className="text-gray-600">
                  &quot;Can I stay up late?&quot; &quot;Can we go to the beach this
                  weekend?&quot; &quot;What should we watch tonight?&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  With Friends
                </h3>
                <p className="text-gray-600">
                  &quot;Where should we eat?&quot; &quot;Who picks the music?&quot;
                  &quot;Can you help me with my homework if I help you with yours?&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  With Strangers
                </h3>
                <p className="text-gray-600">
                  Buying vegetables at the market. Asking for an extension on
                  an assignment. Requesting a refund.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every time you try to reach an agreement with another person,
              you are negotiating. The skills you learn here will help in all
              of these situations.
            </p>
          </section>

          {/* Section 4: Good vs Bad Negotiations */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Good Negotiation vs Bad Negotiation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a simple test to know if a negotiation went well:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-green-800 mb-2">
                  Good Negotiation
                </h3>
                <ul className="text-green-700 space-y-1">
                  <li>&bull; Both sides feel the deal was fair</li>
                  <li>&bull; Both sides would do business again</li>
                  <li>&bull; The relationship is intact or stronger</li>
                  <li>&bull; Both sides got something they valued</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-serif text-lg text-red-800 mb-2">
                  Bad Negotiation
                </h3>
                <ul className="text-red-700 space-y-1">
                  <li>&bull; One side feels cheated or resentful</li>
                  <li>&bull; One side would avoid future dealings</li>
                  <li>&bull; The relationship is damaged</li>
                  <li>&bull; One side &quot;won&quot; but at great cost</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A negotiation where you &quot;win&quot; but damage the relationship
              is actually a loss. You may have won the battle but lost the war.
            </p>
          </section>

          {/* Section 5: The Long Game */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Think Long-Term
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Indian culture, we understand relationships matter more than
              any single transaction. The shopkeeper in your neighbourhood knows
              this&mdash;they might give you vegetables on credit because they
              value your continued business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Good negotiators think about the future:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Will I work with this person again?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What will they say about me to others?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Is this deal worth damaging trust?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Am I building a reputation I can be proud of?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The best negotiators are known as fair dealers. People <em>want</em>
              to do business with them. That reputation is worth more than any
              single victory.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Fair Dealing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood that lasting success comes from
              honourable conduct:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;அறன்ஈனும் இன்பமும் ஈனும் திறனறிந்து<br />
              தீதின்றி வந்த பொருள்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Wealth acquired without wrongdoing
              yields both virtue and happiness.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And Chanakya taught the order of approaches:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;साम एव प्रथमं कुर्यात्&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;First, try conciliation.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Always start with dialogue and
              fairness. Try to find mutual agreement before anything else.
              Wealth obtained through fair dealing brings both prosperity and
              peace of mind. A deal that leaves the other party bitter is no
              victory at all.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Negotiation is problem-solving together, not a fight to win</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>You negotiate every day&mdash;with family, friends, and strangers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>A good negotiation leaves both sides feeling the deal was fair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Winning at the cost of the relationship is actually losing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your reputation as a fair dealer is your greatest asset</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a time when you reached an agreement with someone&mdash;maybe
              about where to eat, what to watch, or how to split a task. Did
              both of you feel happy with the result? What made it work (or not)?
            </p>
            <p className="text-gray-600 text-sm italic">
              Notice how the best agreements happen when both sides feel heard
              and respected.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/negotiation"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/topics/negotiation/interests-vs-positions"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Interests vs Positions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
