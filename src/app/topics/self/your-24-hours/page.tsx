import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your 24 Hours - Business Wisdom',
  description: 'Learn why time is your most precious resource and how to spend it wisely. Discover ancient wisdom on time from Thirukkural.',
};

export default function Your24HoursPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/self" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Manage Yourself
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Your 24 Hours
          </h1>
          <p className="text-xl text-gray-600">
            The great equaliser: everyone gets the same amount of time each day.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Hook */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The One Thing Everyone Shares
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Virat Kohli has 24 hours in a day. Elon Musk has 24 hours. The
              richest person in the world has 24 hours. And so do you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is remarkable when you think about it. Money can be inherited.
              Intelligence varies. Opportunities differ. But time? Time is the
              one resource distributed equally to every human being.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The question is not how much time you have. The question is:
              <strong> What are you doing with it?</strong>
            </p>
          </section>

          {/* Section 2: Where Time Goes */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Where Does Your Time Actually Go?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let us do some honest maths. In a typical day:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Sleep:</strong> 8 hours (you need this for your brain to work)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>School:</strong> 6-7 hours (including travel)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Meals and getting ready:</strong> 2 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Homework:</strong> 2 hours</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              That leaves roughly <strong>4-5 hours</strong> of free time. Now,
              where does that go?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For most people: scrolling social media, watching videos, gaming,
              chatting. Not bad things in themselves. But what if you tracked
              every hour for a week? Would you be proud of how you spent them?
            </p>
            <p className="text-gray-700 leading-relaxed">
              The average teenager spends 4-6 hours per day on screens. That is
              almost all their free time. That is 1,500-2,000 hours per year.
              Imagine what you could build, learn, or become with that time.
            </p>
          </section>

          {/* Section 3: Time Cannot Be Recovered */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Resource You Cannot Get Back
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the hard truth about time: <strong>It only flows one way.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you lose money, you can earn more. If you break something, you
              can fix it or buy another. If you fail an exam, you can retake it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But yesterday? Yesterday is gone forever. The hour you spent doing
              nothing useful this morning? You will never get it back. Not for
              any amount of money.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is not meant to make you anxious. It is meant to help you
              see time for what it truly is: <strong>your most precious resource.</strong>
            </p>
          </section>

          {/* Section 4: Spending Time Like Money */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Spend Time Like You Spend Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine you had a bank account that received 86,400 rupees every
              morning. But there is a catch: whatever you do not spend that day
              disappears at midnight. No saving, no carrying over.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What would you do? You would spend every rupee wisely. You would
              not waste a single one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That bank account is real. It is called <strong>time.</strong> You
              receive 86,400 seconds every day. At midnight, they vanish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              So ask yourself: If time were money, would you be rich or poor?
              Would you be investing or wasting?
            </p>
          </section>

          {/* Section 5: What You Can Do */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Taking Control of Your Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Managing time is not about being busy every second. It is about
              being intentional. Here are three starting points:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Track Before You Change
                </h3>
                <p className="text-gray-600">
                  For one week, write down what you do each hour. Most people are
                  shocked when they see where their time actually goes. You cannot
                  manage what you do not measure.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Identify Your Time Thieves
                </h3>
                <p className="text-gray-600">
                  What activities eat your time without giving much back? Endless
                  scrolling? Getting lost in YouTube recommendations? Arguing
                  online? Name them. Then decide what to do about them.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Protect Your Best Hours
                </h3>
                <p className="text-gray-600">
                  When are you most alert and focused? Morning? Evening? Guard
                  those hours fiercely. Use them for things that matter, not for
                  mindless browsing.
                </p>
              </div>
            </div>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over 2,000 years ago, the Tamil poet Thiruvalluvar wrote about the
              preciousness of time and opportunity:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;&#2958;&#2994;&#3021;&#2994;&#3006; &#2997;&#3007;&#2996;&#3009;&#2990;&#2990;&#3021; &#2951;&#2996;&#2984;&#3021;&#2980;&#2965;&#3021;&#2965;&#3006;&#2994;&#3021; &#2951;&#2996;&#3016;&#2984;&#3021;&#2980;&#2980;&#3009;&#2970;&#3021;<br />
              &#2970;&#3014;&#2994;&#3021;&#2994;&#2980;&#3021; &#2980;&#3009;&#2979;&#3016;&#2965;&#3021;&#2965;&#3009;&#2990;&#3021; &#2990;&#3009;&#2994;&#3016;.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Those who seize the right moment will
              accomplish great things. Those who waste it will lose even what
              they had.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              Thiruvalluvar understood that time and opportunity are closely
              linked. The right action at the right time creates success. The
              same action delayed may be worthless.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Everyone has exactly 24 hours per day&mdash;time is the great equaliser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Time is the only resource you can never get back once spent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Most people have no idea where their time actually goes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Treat time like money: track it, protect it, spend it wisely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Ancient wisdom teaches: seize the moment or lose everything</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you tracked every hour of your day for a week, what would you
              discover? What activities would you want to spend more time on?
              What would you want to cut?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to become aware of how
              you currently spend your time.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/self"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/topics/self/what-matters-most"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: What Matters Most
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
