import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Power of Habits - Business Wisdom',
  description: 'Discover how small daily actions compound over time into extraordinary results. Learn the habit loop and wisdom from Avvaiyar on persistence.',
};

export default function PowerOfHabitsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/self" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Manage Yourself
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            The Power of Habits
          </h1>
          <p className="text-xl text-gray-600">
            Small actions repeated daily become unstoppable forces.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: What Are Habits */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Your Brain on Autopilot
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have you ever brushed your teeth without thinking about it? Tied
              your shoelaces while talking to someone? Walked a familiar route
              without noticing the streets?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That is your brain on autopilot. These are <strong>habits</strong>:
              actions you do automatically, without consciously deciding each time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your brain loves habits. Thinking is hard work&mdash;it uses a lot
              of energy. So your brain tries to turn repeated actions into
              automatic routines. This frees up mental space for new challenges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Research suggests that about <strong>40% of what you do each day</strong>{' '}
              is not a conscious decision&mdash;it is habit. This is either very
              good news or very bad news, depending on your habits.
            </p>
          </section>

          {/* Section 2: Good Habits vs Bad Habits */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Superpowers and Villains
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of good habits as <strong>superpowers</strong> you give your
              future self:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of reading daily gives you knowledge without effort</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of exercising gives you energy and health automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of saving money builds wealth while you sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of reviewing your day helps you improve constantly</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bad habits are like <strong>villains</strong> working against you:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of checking your phone first thing steals your morning focus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of staying up late drains tomorrow&apos;s energy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of procrastinating creates stress and panic later</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The habit of negative self-talk undermines your confidence</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The person you become is largely the sum of your habits. Choose
              your habits, and you choose your future.
            </p>
          </section>

          {/* Section 3: The Habit Loop */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How Habits Work: The Loop
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every habit follows a simple pattern with three parts:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Cue (The Trigger)
                </h3>
                <p className="text-gray-600">
                  Something that tells your brain to start the automatic behaviour.
                  It could be a time of day, a location, an emotion, or something
                  you see. Example: Feeling bored (cue) makes you reach for your phone.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Routine (The Action)
                </h3>
                <p className="text-gray-600">
                  The actual habit&mdash;the behaviour you do. This can be physical
                  (scrolling), mental (worrying), or emotional (feeling anxious).
                  Example: Opening Instagram and scrolling endlessly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Reward (The Payoff)
                </h3>
                <p className="text-gray-600">
                  What you get from the habit&mdash;the reason your brain remembers
                  to repeat it. Example: Brief entertainment that distracts you
                  from boredom.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Understanding this loop is powerful. To build a new habit, design
              a clear cue and reward. To break a bad habit, disrupt the cue or
              replace the routine with something better.
            </p>
          </section>

          {/* Section 4: The Compound Effect */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Small Actions, Massive Results
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine getting 1% better at something every day. How much better
              would you be after a year?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not 365% better. Much more. Because improvement compounds&mdash;each
              day&apos;s 1% builds on the previous day&apos;s gains. After one year of
              1% daily improvement, you would be <strong>37 times better.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the magic of small habits. They seem insignificant in the
              moment. Reading for 15 minutes today will not change your life.
              But reading for 15 minutes every day for five years? That is over
              450 hours of reading&mdash;hundreds of books&mdash;a transformed mind.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>20 minutes of practice daily = 120 hours per year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>One push-up more each day = 365 more by year end</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Saving 50 rupees daily = 18,250 rupees per year</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The same works in reverse. Small bad habits, repeated daily,
              compound into disaster. The choice is yours.
            </p>
          </section>

          {/* Section 5: Starting Tiny */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Secret: Start Embarrassingly Small
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people fail at building habits because they start too big.
              They decide to exercise for an hour daily, read 50 pages, or
              study for three hours straight. Then they miss one day, feel
              guilty, and give up.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The secret is to start so small it feels almost silly:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Want to exercise? Start with one push-up. Just one.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Want to read? Start with one page before bed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Want to meditate? Start with one minute of sitting quietly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Want to study? Start with five minutes of focused work.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why does this work? Because the hardest part is not doing the
              habit&mdash;it is starting. Once you start, you usually do more.
              And even if you only do the tiny amount, you are building the
              identity of someone who does that thing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After the habit is automatic, you can gradually increase. But
              first, make it impossible to fail.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Avvaiyar on Persistence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The great Tamil poet Avvaiyar, who lived over a thousand years
              ago, understood the power of steady effort:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;ஊக்கமது கைவிடேல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Never abandon your persistence.&quot;
              (From Avvaiyar&apos;s Aathichoodi)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This simple phrase captures centuries of wisdom. Success is not
              about talent or luck. It is about showing up, day after day,
              even when progress feels invisible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The person who practises a little every day will surpass the
              genius who only works when inspired. Persistence beats talent
              when talent does not persist.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>About 40% of daily actions are habits&mdash;autopilot behaviours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Good habits are superpowers; bad habits are villains working against you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every habit follows a loop: cue &rarr; routine &rarr; reward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Small daily actions compound&mdash;1% better each day = 37x better in a year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Start embarrassingly small&mdash;one push-up, one page, one minute</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What is one small habit you could start today that your future
              self would thank you for? Make it tiny&mdash;so tiny you cannot
              fail. What would that look like?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to identify one small
              change you could actually stick with.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/self/what-matters-most"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What Matters Most
          </Link>
          <Link
            href="/foundations/self/understanding-feelings"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Understanding Your Feelings
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
