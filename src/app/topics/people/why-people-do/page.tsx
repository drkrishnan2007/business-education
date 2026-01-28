import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why People Do What They Do - Business Wisdom',
  description: 'Understand what motivates people beyond money. Learn about recognition, purpose, belonging, and growth, with wisdom from Thirukkural on understanding others.',
};

export default function WhyPeopleDoPage() {
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
            Lesson 1 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Why People Do What They Do
          </h1>
          <p className="text-xl text-gray-600">
            Everyone is driven by something. Understanding that is a superpower.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Beyond Money */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              It Is Not Just About Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ask most people why they work, and they will say &quot;for money.&quot;
              That is true, but only partly. If money were the only thing that
              mattered, then everyone with the same salary would be equally happy.
              But they are not.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Scientists who study motivation have found that once people have
              enough money for their basic needs, other things start to matter
              more. Much more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Understanding what really drives people&mdash;including yourself&mdash;is
              one of the most valuable skills you can develop. It helps you lead
              teams, build friendships, and understand why people do strange things.
            </p>
          </section>

          {/* Section 2: The Five Drivers */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What People Really Want
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here are five powerful motivators that drive human behaviour:
            </p>

            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Recognition
                </h3>
                <p className="text-gray-600">
                  People want to be seen and appreciated. A simple &quot;thank you&quot;
                  or &quot;good job&quot; can mean more than a bonus. Think about how
                  good it feels when someone notices your effort.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Purpose
                </h3>
                <p className="text-gray-600">
                  People want their work to matter. Knowing that what you do helps
                  someone or makes a difference gives energy and meaning. Without
                  purpose, even easy work feels exhausting.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Belonging
                </h3>
                <p className="text-gray-600">
                  Humans are social creatures. We want to be part of something
                  bigger than ourselves&mdash;a team, a group, a community. Feeling
                  excluded is genuinely painful.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. Growth
                </h3>
                <p className="text-gray-600">
                  People want to get better at things. Learning new skills,
                  overcoming challenges, becoming more capable&mdash;this is deeply
                  satisfying. Stagnation feels like slowly suffocating.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  5. Autonomy
                </h3>
                <p className="text-gray-600">
                  People want some control over their lives. Being told exactly
                  what to do all the time feels suffocating. Having choices&mdash;even
                  small ones&mdash;makes work feel better.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Everyone Is Different */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Everyone Has Different Drivers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something important: different people care about different
              things. Your friend might be driven by recognition, while you care
              more about growth. Neither is right or wrong.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about these examples:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Your classmate who always volunteers to present&mdash;they might need recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The person who works alone and hates group projects&mdash;they might value autonomy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Someone who joins every club and team&mdash;they might need belonging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The friend who takes extra courses for fun&mdash;they are driven by growth</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When you understand what drives someone, you can work with them
              better, motivate them better, and avoid frustrating them.
            </p>
          </section>

          {/* Section 4: The Mirror Mistake */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Big Mistake: Assuming Others Think Like You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the biggest mistakes people make is assuming everyone is
              motivated by the same things they are. This is natural&mdash;we only
              know our own minds directly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But it causes problems:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You love praise, so you praise your friend. But they find it embarrassing&mdash;they wanted help, not words.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You value independence, so you leave your teammate alone. But they felt ignored&mdash;they wanted connection.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You want challenges, so you give your friend a hard task. But they felt overwhelmed&mdash;they wanted support.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The solution? Ask. Watch. Listen. Pay attention to what makes
              people&apos;s eyes light up and what makes them shut down. Everyone
              gives clues about what they need.
            </p>
          </section>

          {/* Section 5: Discovering What Someone Wants */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Discover What Someone Really Wants
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You cannot read minds, but you can become very good at reading people.
              Here are some approaches:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Watch what they do:</strong> Actions reveal priorities. What do they spend time on? What do they complain about missing?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Listen to what excites them:</strong> When do they become animated? What topics make them talk faster?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Notice what bothers them:</strong> Complaints often reveal unmet needs. &quot;Nobody listens to me&quot; suggests a need for recognition.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Ask directly:</strong> &quot;What would make this project fun for you?&quot; or &quot;How can I help?&quot; Simple questions reveal a lot.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The more you practise noticing, the better you get. Eventually,
              understanding people becomes almost instinctive.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Understanding Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood that truly knowing someone is rare and
              valuable:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;நன்றே தரினும் நடுவிகந்தாம் ஆக்கத்தை<br />
              அன்றே யொழிய விடல்.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Even if it brings good, abandon any
              gain achieved by unfair means.&quot; (Kural 113)
            </p>
            <p className="text-gray-700 leading-relaxed">
              Understanding others is not about manipulation. The Thirukkural
              teaches that true wisdom is using knowledge of people to build
              them up, not to exploit them. When you understand what drives
              someone, use it to help them flourish.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Money is not the only motivator&mdash;recognition, purpose, belonging, growth, and autonomy matter too</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Different people have different drivers&mdash;what motivates you may not motivate others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Assuming others think like you leads to misunderstandings and frustration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Watch, listen, and ask to discover what someone really wants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Use your understanding to help people, not to manipulate them</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about yourself first: What motivates you most&mdash;recognition,
              purpose, belonging, growth, or autonomy? Now think about a family
              member or close friend. What seems to drive them? Are your drivers
              the same or different?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to start noticing what
              drives different people.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/people"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topic
          </Link>
          <Link
            href="/topics/people/art-of-communication"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: The Art of Communication
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
