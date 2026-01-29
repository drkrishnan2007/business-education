import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Never Stop Learning - Business Wisdom',
  description: 'Embrace the growth mindset and understand why curiosity is your greatest superpower. Discover wisdom from Avvaiyar on education as true wealth.',
};

export default function NeverStopLearningPage() {
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
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Never Stop Learning
          </h1>
          <p className="text-xl text-gray-600">
            Your brain is not fixed. It grows with every challenge you embrace.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Two Mindsets */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Two Ways to See Yourself
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine two students. Both fail a maths test. Same test, same
              score. But watch how they think about it:
            </p>
            <div className="space-y-6 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Student A: Fixed Mindset
                </h3>
                <p className="text-gray-600">
                  &quot;I failed because I am bad at maths. I have always been bad
                  at maths. Some people are just not maths people. There is no
                  point trying harder because this is just who I am.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Student B: Growth Mindset
                </h3>
                <p className="text-gray-600">
                  &quot;I failed because I did not study the right way. I need to
                  find better methods. Maybe I should ask for help with the
                  concepts I did not understand. This is hard, but I can improve.&quot;
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These are two fundamentally different beliefs about ability.
              The first believes talent is fixed at birth. The second believes
              abilities can be developed. Research shows this belief makes an
              enormous difference in what people achieve.
            </p>
          </section>

          {/* Section 2: Your Brain Grows */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Your Brain Is Not Fixed
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something science has proven: your brain physically
              changes when you learn. This is called <strong>neuroplasticity</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you struggle with something difficult, your brain forms new
              connections. When you practise, those connections get stronger.
              The brain is more like a muscle than a fixed computer&mdash;it
              grows with use.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>London taxi drivers have enlarged areas for spatial memory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Musicians have larger areas for finger coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Bilingual people have denser connections between brain regions</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The belief &quot;I am just not good at X&quot; is almost never true. What
              is usually true: &quot;I have not put enough effort into X yet.&quot; Or:
              &quot;I have not found the right way to learn X yet.&quot;
            </p>
          </section>

          {/* Section 3: Failure Is Data */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Failure Is Data, Not Defeat
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What if failure was not something to avoid, but something to
              learn from?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every person who achieved something remarkable failed many times
              first:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Thomas Edison tried thousands of materials before finding one that worked for light bulbs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>J.K. Rowling was rejected by 12 publishers before Harry Potter was accepted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Amitabh Bachchan was rejected from All India Radio for his voice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Abraham Lincoln lost eight elections before becoming president</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              They did not see failure as evidence that they should give up.
              They saw it as <strong>information</strong> about what to try
              differently next time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Edison said: &quot;I have not failed. I have just found 10,000 ways
              that will not work.&quot; Each failure brought him closer to success.
            </p>
          </section>

          {/* Section 4: The Compound Effect of Learning */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The 1% Daily: Learning Compounds
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember the compound effect from our habits lesson? It applies
              powerfully to learning.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you learn just one new thing every day&mdash;one new word, one
              new concept, one new skill&mdash;after a year you know 365 new
              things. After five years, 1,825. After ten years, 3,650.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But it is even better than that. Knowledge connects. The more
              you know, the easier it is to learn new things, because you have
              more hooks to attach new information to. Learning accelerates.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The person who reads 30 minutes daily will read about 25 books
              a year. In ten years, that is 250 books. Imagine the knowledge,
              perspectives, and ideas accumulated.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Meanwhile, someone who stopped learning after school falls
              further behind every year. The gap between lifelong learners
              and non-learners widens constantly.
            </p>
          </section>

          {/* Section 5: Curiosity */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Curiosity: Your Greatest Superpower
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You were born curious. Watch any small child&mdash;they ask
              &quot;why?&quot; about everything. They want to touch, explore, understand.
              That curiosity is the most powerful learning engine ever created.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Somewhere along the way, many people lose it. School becomes
              about grades, not understanding. Learning feels like a chore.
              The joy of discovery fades.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But curiosity can be rekindled. How?
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Ask questions about things you see every day. How does that work?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Follow rabbit holes. When something interests you, go deeper</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Talk to people doing interesting things. Ask about their work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Try things outside your comfort zone. Take a class in something unfamiliar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Read widely. Not just in one subject, but across many</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Curious people are never bored. The world is endlessly fascinating
              when you approach it with questions. And curious people become
              knowledgeable people, because they cannot help but learn.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Avvaiyar on Education
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The great Tamil poet Avvaiyar, who lived over a thousand years
              ago, understood what truly matters:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;கைப்பொருள் தன்னின் மெய்ப்பொருள் கல்வி&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Among all possessions, the true
              wealth is education.&quot; (From Avvaiyar&apos;s Konrai Vendhan)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about what this means. Money can be lost or stolen.
              Property can be destroyed. Physical beauty fades. But what
              you have learned stays with you. It cannot be taken away.
              It grows with use rather than diminishing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avvaiyar also wrote: &quot;கற்றது கைம்மண் அளவு&quot;&mdash;&quot;What you have
              learned is only a handful.&quot; Even after a lifetime of learning,
              there is always infinitely more to discover. This is not
              discouraging but exciting. The journey never ends.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Growth mindset beats fixed mindset&mdash;ability is developed, not given</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your brain physically changes when you learn&mdash;it grows like a muscle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Failure is data, not defeat&mdash;it tells you what to try differently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Learning compounds&mdash;small daily learning creates huge advantages over time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Curiosity is your superpower&mdash;cultivate it and the world becomes fascinating</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Is there something you have told yourself you are &quot;just not
              good at&quot;? What if that belief is wrong? What would change if
              you approached it with a growth mindset instead?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to question the beliefs
              that might be limiting you.
            </p>
          </section>

          {/* Congratulations */}
          <section className="card p-8 mb-8 border-2 border-[#5b21b6]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Congratulations!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have completed all five lessons in &quot;How to Manage Yourself.&quot;
              You now understand:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to think about and protect your time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to prioritise what truly matters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to build powerful habits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to understand and manage your emotions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&#10003;</span>
                <span>How to keep growing through lifelong learning</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These skills are the foundation for everything else. Master
              yourself, and you can master anything.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/self/understanding-feelings"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Understanding Your Feelings
          </Link>
          <Link
            href="/foundations/self"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to Topic
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
