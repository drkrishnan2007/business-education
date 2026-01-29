import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Prosperity Principle - Business Wisdom',
  description: 'Discover why wealth is honourable, not shameful. Learn from Lakshmi, Chanakya, and the great Bharatiya merchant traditions.',
};

export default function ProsperityPrinciplePage() {
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
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            The Prosperity Principle
          </h1>
          <p className="text-xl text-gray-600">
            Why wealth is not shameful—and how the Bharatiya tradition celebrates prosperity.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Myth */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Busting the Myth: &quot;Money is Bad&quot;
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may have heard people say things like: &quot;Money is the root of all
              evil.&quot; &quot;Rich people are greedy.&quot; &quot;It is noble to be poor.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These ideas are well-meaning but wrong. They confuse the tool with
              how some people misuse it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider: A knife can be used to cook a meal or to harm someone.
              We do not say &quot;knives are evil.&quot; We say that how you use a knife
              matters.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Money is the same. It is a tool. It can be used for good or for harm.
              The money itself is neutral—your intentions and actions give it meaning.
            </p>
          </section>

          {/* Section 2: Wealth Creation vs Extraction */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Two Ways to Get Wealth
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not all wealth is the same. There are two very different ways to
              become wealthy:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Wealth Creation
                </h3>
                <p className="text-gray-600">
                  This is when you create something valuable that did not exist before.
                  A baker turns flour into bread. A teacher turns confusion into
                  understanding. A builder turns bricks into homes. Everyone benefits—
                  the customer gets something valuable, and you earn money fairly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Wealth Extraction
                </h3>
                <p className="text-gray-600">
                  This is when you take wealth from others without creating value.
                  Theft, fraud, exploitation—these take from others without giving
                  anything back. This kind of &quot;wealth&quot; makes the world poorer,
                  not richer.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The difference matters deeply. Wealth creation is honourable. It makes
              the whole world better off. Wealth extraction is shameful. It harms others.
              When people criticise &quot;the rich,&quot; they usually mean extractors, not creators.
            </p>
          </section>

          {/* Section 3: Prosperity Enables Generosity */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Prosperity Enables Generosity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a truth that sounds strange at first: To give generously,
              you first need something to give.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about it. Who can give more: someone who struggles to pay
              their own rent, or someone with resources to spare? Who can hire
              people and create jobs? Who can fund a school or hospital?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This does not mean poor people cannot be generous—they often are,
              sometimes more so than the wealthy. But prosperity <em>multiplies</em>{' '}
              what you can give.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you want to help others, building your own prosperity is not selfish.
              It is strategic. A full cup can overflow; an empty cup cannot.
            </p>
          </section>

          {/* Wisdom Section 1: Lakshmi */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Lakshmi and Divine Prosperity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the Bharatiya tradition, wealth is not seen as something to be
              ashamed of. It is seen as sacred.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Lakshmi</strong> is the goddess of prosperity, fortune, and
              abundance. She is one of the most beloved deities—worshipped daily
              in millions of homes and businesses. Her presence is sought, not avoided.
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              Lakshmi represents not just material wealth, but all forms of abundance:
              health, knowledge, courage, and spiritual wealth.
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              This tells us something important: In the Bharatiya worldview, prosperity
              is divine. It is something to be cultivated with respect, not rejected
              with false modesty.
            </p>
          </section>

          {/* Section 4: The Merchant Tradition */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Great Merchant Tradition
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              India has one of the world&apos;s oldest and most respected merchant
              traditions. For thousands of years, traders carried goods along routes
              stretching from Rome to Indonesia, from Africa to China.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These were not people hiding their prosperity. They were respected
              members of society who:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Built temples, schools, and dharamshalas (rest houses for travellers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Funded scholars, artists, and religious institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Created jobs and supported entire communities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">•</span>
                <span>Developed sophisticated systems of banking and credit</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The idea that commerce is somehow &quot;lesser&quot; or &quot;impure&quot; is not from
              this tradition. It is a foreign import. Our ancestors understood that
              honest trade creates value for everyone.
            </p>
          </section>

          {/* Wisdom Section 2: Chanakya */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Wealth
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya was clear about the importance of wealth:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Artha (wealth) is the most important. Dharma (righteousness) and
              Kama (enjoyment) both depend on it.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> You need resources to do good in the
              world. You need resources to enjoy life. Without artha, the other
              goals of life become very difficult.
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;One who is prepared for the future and one who deals cleverly
              with any situation that may arise are both happy. But the fatalistic
              man who depends on luck is ruined.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Do not leave your prosperity to chance.
              Plan, prepare, and take action. Those who wait for luck to deliver
              wealth will wait forever.
            </p>
          </section>

          {/* Section 5: Wealth as Means to Dharma */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Wealth as a Means to Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The deepest teaching is this: Wealth is not the goal. Wealth is the means.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Dharma</strong> means your purpose, your duty, your contribution
              to the world. Everyone has their own dharma—whether it is raising children
              well, serving patients, building businesses, or creating art.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wealth in service of dharma is blessed. A doctor who earns well and uses
              that to serve more patients. A business owner who creates jobs and treats
              workers fairly. A parent who provides security and opportunity for their
              children.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wealth hoarded for its own sake, or used for harm, is a waste.
              But wealth used to fulfil your purpose? That is exactly as it should be.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Money is a tool, not good or evil in itself—your use of it matters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Wealth creation benefits everyone; wealth extraction harms others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Prosperity enables generosity—a full cup can overflow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Lakshmi is worshipped, not shunned—prosperity is seen as sacred</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">✓</span>
                <span>Wealth is the means to dharma, not the end goal itself</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have you ever felt that wanting to be prosperous was somehow wrong
              or selfish? Where did that belief come from? How does the idea of
              &quot;wealth as means to dharma&quot; change your perspective?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to examine beliefs you may
              have absorbed without questioning them.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/money/budgets-cash-flow"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Budgets and Cash Flow
          </Link>
          <Link
            href="/foundations/money/wealth-and-giving"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Wealth and Giving
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
