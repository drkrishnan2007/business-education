import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Matters Most - Business Wisdom',
  description: 'Learn to tell urgent from important, and why saying no to good things lets you say yes to great things. Discover wisdom from Chanakya on choosing wisely.',
};

export default function WhatMattersMostPage() {
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
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What Matters Most
          </h1>
          <p className="text-xl text-gray-600">
            Why being busy is not the same as being productive.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Busy Trap */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Busy Trap
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have you ever had a day where you felt exhausted but could not
              point to a single meaningful thing you accomplished?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You answered messages. You scrolled through notifications. You
              responded to what others wanted. You stayed busy. But at the end,
              you feel empty.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the busy trap: <strong>confusing activity with achievement.</strong>
              Being busy feels productive. But busy and productive are not the
              same thing.
            </p>
          </section>

          {/* Section 2: Urgent vs Important */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Urgent vs Important: The Key Difference
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a simple idea that changed how successful people think
              about time. It divides all tasks into two types:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Urgent Tasks
                </h3>
                <p className="text-gray-600">
                  These demand immediate attention. They shout at you. A ringing
                  phone. A notification. Someone asking for something NOW. Your
                  friend messaging you. Urgent tasks feel important because they
                  are loud.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Important Tasks
                </h3>
                <p className="text-gray-600">
                  These move you toward your goals. They matter for your future.
                  Studying for a big exam. Learning a new skill. Exercising.
                  Building a relationship with someone who matters. Important
                  tasks are often quiet&mdash;they do not shout.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The problem? <strong>Urgent tasks crowd out important ones.</strong>
              Because urgent things demand attention now, important things keep
              getting pushed to &quot;later.&quot; But &quot;later&quot; often means &quot;never.&quot;
            </p>
          </section>

          {/* Section 3: The Four Boxes */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              A Simple Way to See Your Tasks
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine sorting every task into one of four boxes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-red-700 mb-2">
                  1. Urgent AND Important
                </h3>
                <p className="text-gray-600 text-sm">
                  Crises, deadlines, emergencies. These need immediate action.
                  Example: Exam tomorrow, you have not studied.
                </p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-green-700 mb-2">
                  2. Important but NOT Urgent
                </h3>
                <p className="text-gray-600 text-sm">
                  Planning, learning, exercising, relationships. These build your
                  future. Example: Learning a skill you will need in 5 years.
                </p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-yellow-700 mb-2">
                  3. Urgent but NOT Important
                </h3>
                <p className="text-gray-600 text-sm">
                  Interruptions, some messages, other people&apos;s priorities.
                  These feel pressing but do not serve your goals. Example: A
                  friend demanding you reply NOW.
                </p>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-serif text-lg text-gray-700 mb-2">
                  4. Neither Urgent nor Important
                </h3>
                <p className="text-gray-600 text-sm">
                  Time wasters. Mindless scrolling, watching things you do not
                  even enjoy. Example: Refreshing social media for the 50th time.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>The secret:</strong> Successful people spend most of their
              time in Box 2&mdash;important but not urgent. They plan ahead, so
              fewer things become emergencies (Box 1). They say no to distractions
              (Box 3). They minimise time wasters (Box 4).
            </p>
          </section>

          {/* Section 4: The Power of No */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Power of Saying No
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a truth that sounds harsh but will set you free:
              <strong> Every yes is a no to something else.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you say yes to watching another episode, you say no to
              studying. When you say yes to one more game, you say no to sleep.
              When you say yes to every request from friends, you say no to
              your own priorities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This does not mean you should say no to everything fun. It means
              you should <em>choose</em> what you say yes to, rather than saying
              yes by default.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The most successful people are often the best at saying no.
              Warren Buffett, one of the world&apos;s most successful investors, said:
              &quot;The difference between successful people and really successful
              people is that really successful people say no to almost everything.&quot;
            </p>
          </section>

          {/* Section 5: Making Choices */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              You Cannot Do Everything
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This might be the most important lesson: <strong>You cannot do
              everything.</strong> No one can. Not the smartest person, not the
              hardest worker, not the richest billionaire.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Life is about choices. You can be excellent at a few things or
              mediocre at many things. You can go deep in one direction or
              scatter your energy across dozens.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The people who achieve remarkable things are usually the ones
              who made hard choices. They gave up good opportunities so they
              could focus on great ones.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Sachin Tendulkar gave up other sports to focus on cricket</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Great musicians practise one instrument for thousands of hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Top students do not study everything equally&mdash;they prioritise</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              What are you willing to give up to get what you really want?
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Chanakya on Priorities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over 2,300 years ago, Chanakya understood the importance of
              choosing wisely:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;Before you start some work, always ask yourself three questions:
              Why am I doing it? What might the results be? Will I be successful?
              Only when you think deeply and find satisfactory answers to these
              questions, go ahead.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In modern terms:</strong> Do not just do things because
              others expect them or because they seem urgent. Ask: Does this
              matter? Will it lead where I want to go? Is this the best use of
              my time?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chanakya also wrote: &quot;He who gives up what is imperishable for
              that which is perishable, loses that which is imperishable; and
              doubtlessly loses that which is perishable also.&quot; In simpler words:
              chase what truly matters, or you will lose everything.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Being busy is not the same as being productive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Urgent tasks shout; important tasks whisper&mdash;listen for the whispers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Successful people spend most time on important-but-not-urgent tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every yes is a no to something else&mdash;choose wisely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>You cannot do everything&mdash;focus beats scattered effort</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about yesterday. Sort your activities into the four boxes.
              How much time did you spend on important-but-not-urgent tasks?
              What is one thing you could say no to this week to make room for
              something that truly matters?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to become conscious of
              how you currently prioritise.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/self/your-24-hours"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Your 24 Hours
          </Link>
          <Link
            href="/foundations/self/power-of-habits"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: The Power of Habits
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
