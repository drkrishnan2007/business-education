import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Audience - Business Wisdom',
  description: 'You cannot help everyone. The most successful businesses know exactly who they serve—and who they do not.',
};

export default function UnderstandingAudiencePage() {
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
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Understanding Your Audience
          </h1>
          <p className="text-xl text-gray-600">
            You cannot help everyone. The most successful businesses know exactly
            who they serve&mdash;and who they do not.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Trap of "Everyone" */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Trap of &quot;Everyone&quot;
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask a new business owner who their customer is, and they often say:
              &quot;Everyone! Anyone who wants what I sell.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This sounds logical. Why limit yourself? But there is a problem:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-lg font-serif text-[#5b21b6] text-center">
                When you try to appeal to everyone, you end up appealing to no one.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is why:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A message for everyone is too generic to feel personal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You cannot be everywhere at once</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Different people have different needs, fears, and desires</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Your resources are limited—you must choose where to focus</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Think of a chai stall. The owner does not try to serve people in Delhi,
              Mumbai, and Chennai all at once. They focus on the people who walk
              past their stall every day. That is their audience.
            </p>
          </section>

          {/* Section 2: Who is Your Ideal Customer? */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Who is Your Ideal Customer?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of &quot;everyone,&quot; successful businesses think about their
              <strong> ideal customer</strong>—the person they can help most, who
              will value their solution most, and who they most enjoy serving.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To find your ideal customer, ask:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Demographics
                </h3>
                <p className="text-gray-600">
                  What is their age? Gender? Location? Income level? Occupation?
                  Family situation?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Problems
                </h3>
                <p className="text-gray-600">
                  What challenges do they face? What frustrates them? What obstacles
                  stand in their way?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Desires
                </h3>
                <p className="text-gray-600">
                  What do they dream of? What would make their life better? What
                  would success look like for them?
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Behaviour
                </h3>
                <p className="text-gray-600">
                  How do they make decisions? What influences them? Who do they
                  trust? How do they research before buying?
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A tutor who says &quot;I teach Maths to Class 10 students in Chennai who
              are struggling before board exams&quot; has a much clearer picture than
              one who says &quot;I teach anyone who needs help.&quot;
            </p>
          </section>

          {/* Section 3: Where Do They Spend Time? */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Where Do They Spend Time?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you know who your audience is, you need to find them. Where do
              they spend their time—both physically and digitally?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Physical spaces:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Which shops do they visit?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Which areas of town do they frequent?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What events or gatherings do they attend?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Where do they work or study?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Digital spaces:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Which social media platforms do they use?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What YouTube channels or podcasts do they follow?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Which websites do they visit for information?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What WhatsApp groups might they be part of?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If your ideal customers are retired senior citizens, advertising on
              Instagram might not help. If they are college students, a newspaper
              advertisement might miss them entirely.
            </p>
          </section>

          {/* Section 4: What Keeps Them Awake at Night? */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Keeps Them Awake at Night?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most powerful marketing speaks directly to people&apos;s deepest
              concerns. What worries your audience? What problems feel urgent to
              them?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider some examples:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Parents of students:</strong> Will my child pass the exams? Will they get into a good college?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Small shop owners:</strong> Will I make enough this month? How do I compete with online stores?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Working professionals:</strong> Am I falling behind? How do I balance work and family?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>New brides:</strong> Will I fit in with my new family? How do I manage a household?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When you understand someone&apos;s real worries, you can show them how
              your solution eases those worries. That is far more powerful than
              simply listing features.
            </p>
          </section>

          {/* Section 5: Speaking Their Language */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Speaking Their Language
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you know your audience, you must communicate in a way that
              resonates with them. This means:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Using their vocabulary:</strong> The words they actually use, not industry jargon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Matching their tone:</strong> Formal or casual? Serious or playful?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Addressing their concerns:</strong> Not what you think is important, but what they care about</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Respecting their values:</strong> What do they believe in? What matters to them?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              A financial advisor speaking to young professionals might say: &quot;Start
              investing now, even small amounts, and let time do the work.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              The same advisor speaking to retirees might say: &quot;Protect what you
              have built. Make sure your savings last as long as you need them.&quot;
              Same service, different language.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Understanding Before Acting
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Know your territory before you act. Understand the people you want
              to serve—their circumstances, their timing, their real nature. Do
              not assume everyone is the same. Success comes from understanding
              first, then acting.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Trying to appeal to everyone means appealing to no one</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Define your ideal customer with specific details: who are they, what do they want, what do they fear</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Find where your audience spends time—physically and digitally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Understand their deepest concerns, not just surface-level needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Speak their language—use their words, match their tone, address their values</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pick a business you admire—perhaps a local shop, a brand you love, or
              a service you use regularly. Who is their ideal customer? How do you
              know? What clues tell you who they are trying to serve?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to start noticing how businesses
              focus on specific audiences rather than trying to please everyone.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/marketing/what-marketing-means"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What Marketing Really Means
          </Link>
          <Link
            href="/topics/marketing/power-of-stories"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: The Power of Stories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
