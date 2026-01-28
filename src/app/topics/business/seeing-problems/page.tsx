import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seeing Problems as Opportunities - Business Wisdom',
  description: 'Learn to see problems differently. Every successful business started by noticing a problem worth solving. Discover Chanakya\'s wisdom on observation and opportunity.',
};

export default function SeeingProblemsPage() {
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
            Lesson 1 of 6
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Seeing Problems as Opportunities
          </h1>
          <p className="text-xl text-gray-600">
            Train your eyes to notice what others miss. Every great business
            began with someone seeing a problem differently.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Two Ways of Seeing */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Two Ways of Seeing the World
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you see a long queue at a shop, what do you think?
              Most people think: &quot;How annoying. I hate waiting.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But some people think differently. They ask: &quot;Why is this
              queue so long? Could something be done about it? Would people
              pay to avoid waiting?&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the difference between a <strong>consumer mindset</strong>
              and a <strong>problem-solver mindset</strong>. Consumers experience
              problems. Problem-solvers see opportunities hiding inside problems.
            </p>
          </section>

          {/* Section 2: Problems as Clues */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Frustrations Are Clues
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every time you feel frustrated, annoyed, or inconvenienced, you
              have found a clue. That frustration means something is not working
              as well as it could. And if you feel it, others probably feel it too.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about these everyday frustrations:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I cannot find a good tutor&quot; &mdash; online tutoring platforms started from this</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;Carrying cash is annoying&quot; &mdash; UPI and digital payments started from this</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I cannot get a taxi when it rains&quot; &mdash; ride-sharing apps started from this</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I miss my grandmother's cooking&quot; &mdash; home-style food delivery started from this</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The bigger the frustration and the more people who feel it, the
              bigger the opportunity.
            </p>
          </section>

          {/* Section 3: Looking Around You */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Start by Looking Around You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You do not need to travel the world to find problems worth solving.
              The best place to start is your own life and community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask yourself:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What do my parents complain about regularly?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What tasks do people in my neighbourhood struggle with?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What do my friends say is annoying about school or college?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What takes longer than it should?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What do people waste time or money on?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A local teenager noticed that busy parents in her apartment building
              struggled to buy vegetables. She started a weekly vegetable delivery
              service. Simple problem. Simple solution. Real business.
            </p>
          </section>

          {/* Section 4: Exercise */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Exercise: The Problem List
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This week, carry a small notebook or use your phone. Write down
              every problem you notice, no matter how small:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                Your Challenge: List 5 Things That Annoy People Around You
              </h3>
              <ol className="space-y-2 text-gray-600">
                <li>1. _________________________________</li>
                <li>2. _________________________________</li>
                <li>3. _________________________________</li>
                <li>4. _________________________________</li>
                <li>5. _________________________________</li>
              </ol>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Do not judge whether these are &quot;good&quot; problems or &quot;bad&quot; problems.
              Just notice and write. After a week, look at your list. Which
              problems affect the most people? Which ones would people pay to solve?
            </p>
            <p className="text-gray-700 leading-relaxed">
              This simple exercise trains your brain to see differently. Over
              time, spotting problems becomes automatic.
            </p>
          </section>

          {/* Section 5: Every Business Started This Way */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Every Business Started by Noticing a Problem
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about businesses you use every day:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Zomato:</strong> &quot;Finding good restaurants is hard&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>YouTube:</strong> &quot;Sharing videos online is complicated&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>WhatsApp:</strong> &quot;SMS is expensive and limited&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Flipkart:</strong> &quot;Buying things requires going to many shops&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              None of these founders invented new technology. They simply
              noticed a problem that millions of people faced and said:
              &quot;I could solve that.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              The founders were not special. They simply paid attention while
              others complained and moved on.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Observation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over 2,300 years ago, Chanakya understood that seeing clearly is
              the beginning of all success:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;दृष्टिपूतं न्यसेत्पादं वस्त्रपूतं पिबेज्जलम्।<br />
              शास्त्रपूतं वदेद्वाक्यं मनःपूतं समाचरेत्॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Step only where you have looked carefully.
              Drink water only when filtered through cloth. Speak only what
              scriptures approve. Act only after thinking deeply.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Look before you leap. The wise
              person observes carefully before acting. In business, this means
              truly understanding a problem before trying to solve it. Those who
              rush in without seeing clearly often waste time and money.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Problems are opportunities in disguise&mdash;learn to see them that way</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your frustrations are clues&mdash;if something annoys you, it probably annoys others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Start by observing your own life and community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every successful business started by noticing a problem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Chanakya taught: observe carefully before acting</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about the last thing that annoyed or frustrated you. Now ask:
              Who else has this problem? How big is it? Would people pay to have
              it solved? What would a solution look like?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to practise shifting from
              consumer thinking to problem-solver thinking.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/topics/business/what-is-business"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: What is a Business?
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
