import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Power of Stories - Business Wisdom',
  description: 'Facts inform. Stories transform. If you want people to remember your message, wrap it in a story.',
};

export default function PowerOfStoriesPage() {
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
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            The Power of Stories
          </h1>
          <p className="text-xl text-gray-600">
            Facts inform. Stories transform. If you want people to remember your
            message, wrap it in a story.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Facts Alone Do Not Persuade */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Facts Alone Do Not Persuade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine two ways of saying the same thing:
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Version A (Facts):</strong> &quot;Our coaching classes have
                a 90% pass rate. We cover the entire syllabus in 6 months.&quot;
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-gray-700">
                <strong>Version B (Story):</strong> &quot;Last year, Priya came to
                us in tears. She had failed her Maths exam twice. Her parents
                were worried. Her confidence was shattered. Six months later,
                she scored 92%. When we called to congratulate her, she could
                not stop laughing. That is why we do what we do.&quot;
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Which one do you remember? Which one makes you <em>feel</em> something?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Facts speak to the mind. Stories speak to the heart. And humans make
              decisions with their hearts first, then justify with their minds later.
            </p>
          </section>

          {/* Section 2: How Stories Work */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How Stories Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every good story has the same basic structure. Understanding this
              structure helps you tell better stories about your business:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. A Character We Care About
                </h3>
                <p className="text-gray-600">
                  Someone we can relate to—a person with hopes, fears, and struggles
                  like our own.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. A Problem or Conflict
                </h3>
                <p className="text-gray-600">
                  Something stands in their way. They face an obstacle, a challenge,
                  a difficulty that needs solving.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. A Guide or Helper
                </h3>
                <p className="text-gray-600">
                  Someone or something that helps them on their journey—this is
                  where your product or service comes in.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. A Resolution
                </h3>
                <p className="text-gray-600">
                  The problem is solved. The character is transformed. Life is
                  better than before.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This pattern appears in every film you have watched, every novel
              you have read, every folk tale you heard as a child. It works because
              our brains are wired to understand information through stories.
            </p>
          </section>

          {/* Section 3: The Hero is Your Customer */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Hero is Your Customer, Not You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the most common mistake in business storytelling:
              <strong> making yourself the hero</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bad marketing says: &quot;Look how great we are. Look at our awards.
              Look at our features. We are the best.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Good marketing says: &quot;Here is someone like you. They had a problem.
              We helped them solve it. Now their life is better.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The difference:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Your customer is the hero</strong> of the story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>You are the guide</strong> who helps them succeed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Your product is the tool</strong> that makes transformation possible</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Think of it like the great epics: Arjuna is the hero of the Mahabharata,
              not Krishna. But Krishna&apos;s guidance makes Arjuna&apos;s victory possible.
              Your business is Krishna, not Arjuna.
            </p>
          </section>

          {/* Section 4: Finding Stories in Your Business */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Finding Stories in Your Business
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You do not need to invent stories. The best stories are already
              happening around you:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Customer Journeys
                </h3>
                <p className="text-gray-600">
                  How did a customer find you? What problem did they have? What
                  changed after they used your product? Ask your best customers
                  to share their experience.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Origin Stories
                </h3>
                <p className="text-gray-600">
                  Why did you start this business? What problem did you personally
                  experience that made you want to solve it? People connect with
                  authentic beginnings.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Lessons Learned
                </h3>
                <p className="text-gray-600">
                  What mistakes did you make? What did you learn from failures?
                  Stories of struggle and growth are deeply relatable.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Day-to-Day Moments
                </h3>
                <p className="text-gray-600">
                  What happens when someone uses your product? Describe a typical
                  moment—the small details that show real life.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A chai seller might tell the story of the old man who has come every
              morning for twenty years, sitting at the same spot, ordering the same
              chai. That story says more about the business than any advertisement.
            </p>
          </section>

          {/* Section 5: Keeping it Simple and True */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Keeping it Simple and True
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The best stories are simple and authentic. You do not need elaborate
              tales or dramatic exaggeration. In fact, exaggeration destroys trust.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Guidelines for honest storytelling:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Tell real stories:</strong> Use actual customer experiences with their permission</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Include the struggle:</strong> Perfect stories feel fake—show the difficulties too</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be specific:</strong> Details make stories believable—&quot;a shop in Jayanagar&quot; is better than &quot;a shop somewhere&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Keep it short:</strong> The best stories can be told in one minute or less</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Never lie:</strong> A fake story exposed destroys all your credibility</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Simple truth is more powerful than elaborate fiction. Your real
              stories, told simply, will connect better than any invented tale.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Storytelling
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For thousands of years, wisdom in India has been passed down through
              stories. The Mahabharata, Ramayana, Panchatantra, and Jataka tales
              all teach through narrative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why did our ancestors choose stories instead of simple instructions?
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;Stories carry wisdom across generations because they are remembered.
              Instructions are forgotten. Sermons are ignored. But a good story
              lives in the heart.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Panchatantra, written over 2,000 years ago, was designed to
              teach princes about politics, strategy, and life through animal
              fables. Even today, children remember these stories—and the lessons
              they contain.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> If you want your message to be
              remembered and shared, wrap it in a story. Facts fade. Stories last.
              This is not new wisdom—it is ancient wisdom that still works.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Facts inform the mind, but stories move the heart</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every good story has: a character, a problem, a guide, and a resolution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your customer is the hero—you are the guide who helps them succeed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>The best stories already exist in your business—you just need to find them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Keep stories simple, specific, and true—authenticity builds trust</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a product or service you believe in—something that genuinely
              helps people. What story could you tell about how it helped someone?
              Who is the character, what was their problem, and how did their life
              change?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to practise seeing your
              business through the lens of story rather than features.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/marketing/understanding-audience"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Understanding Your Audience
          </Link>
          <Link
            href="/topics/marketing/building-trust"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Building Trust and Reputation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
