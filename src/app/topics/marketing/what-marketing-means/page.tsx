import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Marketing Really Means - Business Wisdom',
  description: 'Marketing is not manipulation or trickery. At its heart, marketing is simply helping people find solutions to their problems.',
};

export default function WhatMarketingMeansPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/marketing" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Marketing Fundamentals
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What Marketing Really Means
          </h1>
          <p className="text-xl text-gray-600">
            Marketing is not manipulation or trickery. At its heart, marketing is
            simply helping people find solutions to their problems.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Wrong Idea About Marketing */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Wrong Idea About Marketing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When many people hear the word &quot;marketing,&quot; they think of pushy
              salespeople, annoying advertisements, and tricks to make you buy
              things you do not need.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              They imagine:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Loud shop owners shouting at passersby</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Spam messages flooding your phone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Exaggerated claims that turn out to be lies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Pressure tactics that make you feel uncomfortable</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This is <strong>bad</strong> marketing. And it gives the whole field
              a terrible reputation. But true marketing is something else entirely.
            </p>
          </section>

          {/* Section 2: What Marketing Actually Is */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Marketing Actually Is
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At its simplest, marketing is the bridge between a problem and a
              solution. It answers one question:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-lg font-serif text-[#5b21b6] text-center">
                &quot;How do the people who need help find out that help exists?&quot;
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about it this way:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A doctor has skills that can heal the sick. But if nobody knows the doctor exists, nobody gets healed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A tutor can help struggling students. But if parents do not know about the tutor, children continue to struggle.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A farmer grows delicious mangoes. But if no one knows where to buy them, the mangoes rot unsold.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Marketing connects problems with solutions. It helps people who are
              searching find what they are looking for. When done right, marketing
              is a <strong>service</strong>, not a nuisance.
            </p>
          </section>

          {/* Section 3: The Village Example */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Village Example
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine a small village with one hundred families. In this village,
              there is a woman named Lakshmi who makes the best pickles anyone has
              ever tasted. Her mango pickle is legendary.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              How does everyone in the village know about Lakshmi&apos;s pickles?
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Word of mouth:</strong> Someone tastes her pickle and tells their neighbours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Reputation:</strong> Over time, everyone knows &quot;Lakshmi makes the best pickle&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Visibility:</strong> She might set up a small stall at the weekly market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Demonstration:</strong> She gives free samples to let people taste for themselves</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              None of this is manipulation. It is simply making sure that people
              who would <em>love</em> her pickles actually get to try them. This
              is the essence of marketing.
            </p>
          </section>

          {/* Section 4: Marketing Before the Internet */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Marketing Before the Internet
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Marketing is not a modern invention. For thousands of years, people
              have found ways to spread the word about their products and services:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Town criers</strong> announced news and new products in marketplaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Signs and symbols</strong> outside shops told people what was sold inside</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Festivals and fairs</strong> brought buyers and sellers together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Testimonials</strong> from satisfied customers spread trust</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              In ancient India, merchants would travel along trade routes, not just
              carrying goods but also carrying their <em>reputation</em>. A merchant
              known for fair dealing would be welcomed in every town. A merchant
              known for cheating would find doors closed.
            </p>
          </section>

          {/* Section 5: Modern Marketing */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Modern Marketing: Same Principles, New Tools
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today we have websites, social media, email, and countless digital
              tools. But the core principles remain exactly the same:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Then: Word of mouth in the village
                </h3>
                <p className="text-gray-600">
                  Now: Reviews and recommendations online
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Then: Signs outside shops
                </h3>
                <p className="text-gray-600">
                  Now: Websites and social media profiles
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Then: Free samples at the market
                </h3>
                <p className="text-gray-600">
                  Now: Free trials, demos, and helpful content
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Then: Building reputation over years
                </h3>
                <p className="text-gray-600">
                  Now: Building trust through consistent value
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The tools change. Human nature does not. People still want to find
              solutions they can trust. Good marketing helps them do exactly that.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Giving
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Thirukkural, written over 2,000 years ago, teaches about the
              nature of true giving and helping others:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;கொடுப்பது அழுக்கறுப்பான் சுற்றம் உடுப்பதூஉம்<br />
              உண்பதூஉம் இன்றிக் கெடும்.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Those who do not share will lose even
              what they have for themselves—food and clothing alike.&quot;
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;வறியார்க்கொன்று ஈவதே ஈகை&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;True charity is giving to those who have
              nothing.&quot; (Kural 221)
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> The best marketing comes from a
              spirit of genuine giving. When you truly want to help people, and
              your product or service actually helps them, marketing becomes natural.
              You are not trying to take from people—you are trying to give them
              something valuable.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Marketing is not manipulation—it is connecting problems with solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The best marketing helps people find what they are already looking for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Word of mouth and reputation have always been the most powerful marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Modern tools change, but human nature stays the same</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>True marketing comes from a genuine desire to help others</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a product you bought recently. How did you first hear about
              it? Was it through an advertisement, a friend&apos;s recommendation,
              searching online, or something else? What made you trust it enough
              to buy?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to notice how marketing
              influenced your own decisions—often in ways you did not even realise.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/marketing"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Marketing Fundamentals
          </Link>
          <Link
            href="/topics/marketing/understanding-audience"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Understanding Your Audience
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
