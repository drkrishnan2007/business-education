import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Working in Teams - Business Wisdom',
  description: 'Learn why teams beat individuals, the different roles people play, and how to make group projects actually work. With wisdom from Thirukkural on friendship.',
};

export default function WorkingInTeamsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/people" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How People Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Working in Teams
          </h1>
          <p className="text-xl text-gray-600">
            Alone you can go fast. Together you can go far.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Teams Beat Individuals */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Teams Beat Individuals
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It might seem faster to do things yourself. No meetings, no
              disagreements, no waiting for others. And for simple tasks,
              that is often true.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But for anything complex or creative, teams almost always win.
              Here is why:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Diverse skills:</strong> No one is good at everything. A team combines different strengths.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>More ideas:</strong> Different perspectives see problems differently. Five minds find solutions one mind would miss.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Catching mistakes:</strong> Others spot errors you cannot see because you are too close to your own work.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Support and motivation:</strong> When you want to give up, others keep you going. When they struggle, you lift them.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Bigger capacity:</strong> A team can simply do more than one person, once coordination costs are covered.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This is why every major achievement in history&mdash;building temples,
              creating companies, sending rockets to space&mdash;has been a team
              effort. Individual genius matters, but it takes a team to make
              the genius real.
            </p>
          </section>

          {/* Section 2: Different Roles in Teams */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Roles People Play in Teams
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not everyone in a team does the same thing. People naturally fall
              into different roles based on their strengths and personalities:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Ideas Person
                </h3>
                <p className="text-gray-600">
                  Comes up with creative solutions and new approaches. Full of
                  energy at the start. May lose interest in details and follow-through.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Organiser
                </h3>
                <p className="text-gray-600">
                  Turns ideas into plans. Keeps track of tasks and deadlines.
                  Makes sure nothing falls through the cracks. May seem controlling.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Doer
                </h3>
                <p className="text-gray-600">
                  Gets things done. Reliable and hardworking. Prefers action to
                  endless discussion. May rush ahead without enough planning.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Questioner
                </h3>
                <p className="text-gray-600">
                  Asks &quot;what if it does not work?&quot; and spots potential problems.
                  Prevents disasters. May seem negative or slowing things down.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  The Connector
                </h3>
                <p className="text-gray-600">
                  Keeps the team happy. Notices when someone is struggling or
                  left out. Smooths conflicts. The glue that holds teams together.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A strong team needs all these roles. The problem is when a team
              has too many of one type and none of another. Five ideas people
              will generate endless ideas but finish nothing. Five doers will
              work hard but may run in the wrong direction.
            </p>
          </section>

          {/* Section 3: The Quiet Person */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Quiet Person Might Have the Best Idea
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In most group discussions, a few people talk a lot and others
              stay quiet. It is easy to assume the talkers have the best ideas.
              Often, they do not.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quiet people are often thinking deeply while others are performing.
              They are processing, analysing, considering. When they finally
              speak, they often say something everyone else missed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The problem is they may never speak up if:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The loud voices dominate and leave no space</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They feel their idea is not worth mentioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They are still thinking and the group has moved on</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They are nervous about speaking in groups</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Good teams actively create space for quieter voices: &quot;Priya, we
              have not heard from you yet. What do you think?&quot; Some of the best
              ideas you will ever hear come from asking quiet people directly.
            </p>
          </section>

          {/* Section 4: Contributing Without Dominating */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Contribute Without Dominating
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are someone who talks a lot, that is not bad. Your ideas
              matter. But the best team players learn to balance contribution
              with space for others:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Count before speaking:</strong> Try to let two or three others speak between your contributions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Build on others:</strong> Instead of new ideas, try &quot;I like what Rahul said, and we could also...&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Ask, do not tell:</strong> &quot;What if we tried...?&quot; invites discussion. &quot;We should...&quot; closes it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Draw others out:</strong> &quot;What does everyone else think?&quot; or &quot;Anita, you have experience with this...&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Listen actively:</strong> Show you heard others by referring to their ideas later.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you are naturally quiet, the same principles work in reverse:
              push yourself to share one idea per meeting. Your thoughts have
              value. The team needs them.
            </p>
          </section>

          {/* Section 5: Making Group Projects Work */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Making Group Projects Actually Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have all had terrible experiences with group projects: one
              person does all the work, or nothing gets done until the last
              minute, or people fight constantly. Here is how to avoid that:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Start with clarity:</strong> What exactly are we trying to achieve? Make sure everyone agrees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Divide tasks based on strengths:</strong> Who is good at what? Match tasks to people. Let the writer write, let the presenter present.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Set mini-deadlines:</strong> Do not just have one final deadline. Break the project into checkpoints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Check in regularly:</strong> A quick daily or weekly update catches problems before they become disasters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Address problems early:</strong> If someone is not contributing, talk to them kindly but directly. Do not let resentment build.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Celebrate wins together:</strong> When things go well, share the credit. This builds trust for next time.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The skills you learn in school group projects are exactly the skills
              you will need in every job. Learning to work in teams now pays off
              for your entire life.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Friendship
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar dedicated an entire chapter to &quot;நட்பு&quot; (friendship),
              understanding that relationships are the foundation of all success:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;உடுக்கை இழந்தவன் கைபோல ஆங்கே<br />
              இடுக்கண் களைவதாம் நட்பு.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;True friendship is like the hand that
              immediately covers when the garment slips&mdash;it helps in times
              of trouble without being asked.&quot; (Kural 788)
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is what great teams are built on: people who help each other
              instinctively, who notice when someone is struggling and step in
              without waiting to be asked. Such bonds are not built overnight,
              but through consistent kindness and reliability.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Teams beat individuals for complex work&mdash;diverse skills and perspectives find better solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Different people play different roles&mdash;a strong team needs ideas, organisation, action, questioning, and connection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Quiet people often have the best ideas&mdash;actively create space for them to share</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Contribute without dominating&mdash;balance sharing your ideas with drawing out others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Make group projects work with clear goals, divided tasks, regular check-ins, and early problem-solving</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a team you have been part of&mdash;at school, in sports,
              in a game, or with friends. What role did you naturally play?
              What role was missing from the team? How might the team have
              worked better?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to start noticing team
              dynamics around you.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/people/art-of-communication"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: The Art of Communication
          </Link>
          <Link
            href="/topics/people/handling-conflict"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Handling Conflict
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
