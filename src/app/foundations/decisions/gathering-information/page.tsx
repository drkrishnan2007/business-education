import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gathering Information - Business Wisdom',
  description: 'Know what you need to know. Learn to seek the right information without drowning in data or falling into analysis paralysis.',
};

export default function GatheringInformationPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/decisions" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Decisions Get Made
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 3 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Gathering Information
          </h1>
          <p className="text-xl text-gray-600">
            Good decisions need good information. But too much information
            paralyses. The skill is knowing what you need to know&mdash;and
            when you know enough.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Information Paradox */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Information Paradox
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We live in an age of infinite information. Any question you
              have can be answered in seconds. This should make decisions
              easier. Instead, many people find decisions harder than ever.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why? Because <strong>more information does not always mean
              better decisions.</strong> After a point, additional
              information creates confusion, not clarity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Research shows that decisions made with moderate information
              are often as good as&mdash;or better than&mdash;decisions made
              with exhaustive research. The goal is not to know
              everything. It is to know what matters.
            </p>
          </section>

          {/* Section 2: What Do You Actually Need to Know? */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Do You Actually Need to Know?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before gathering information, ask yourself three questions:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. What is the decision I am actually making?
                </h3>
                <p className="text-gray-600 mb-0">
                  Be specific. Not &quot;What should I do with my life?&quot;
                  but &quot;Should I take this job offer or stay in my current
                  role?&quot; Vague questions lead to endless research.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. What information would actually change my decision?
                </h3>
                <p className="text-gray-600 mb-0">
                  If you learn X, would it change what you choose? If not,
                  you do not need X. Focus only on information that could
                  genuinely tip the scales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. How confident do I need to be?
                </h3>
                <p className="text-gray-600 mb-0">
                  A reversible decision needs less certainty. An
                  irreversible one deserves more research. Match your
                  information-gathering effort to the stakes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Analysis Paralysis */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Analysis Paralysis: When Research Becomes Avoidance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes, endless research is not about making better
              decisions. It is about avoiding the discomfort of actually
              deciding.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Signs you might be using research as procrastination:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You keep finding &quot;one more thing&quot; to investigate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>New information does not change your thinking, just delays your choice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You feel busier but not clearer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The decision keeps getting postponed</span>
              </li>
            </ul>
            <div className="border-l-4 border-[#d97706] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The uncomfortable truth:</strong> At some point,
                you know enough to decide. The additional research is not
                adding value&mdash;it is subtracting courage.
              </p>
            </div>
          </section>

          {/* Section 4: Sources Matter */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Not All Information is Equal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The source of your information matters as much as the
              information itself. Some sources to value:
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  People who have done it
                </h3>
                <p className="text-gray-600 mb-0">
                  If you want to start a restaurant, talk to people who
                  run restaurants. Real experience beats theory every
                  time.
                </p>
              </div>

              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  People who have no stake in your decision
                </h3>
                <p className="text-gray-600 mb-0">
                  A salesperson wants you to buy. A friend wants you to be
                  happy. A mentor with nothing to gain can tell you the
                  truth.
                </p>
              </div>

              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Data over opinions
                </h3>
                <p className="text-gray-600 mb-0">
                  &quot;I think customers will love this&quot; is an opinion.
                  &quot;50 customers tested it and 35 said they would pay&quot;
                  is data. Prefer the second.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some sources to be cautious of:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>People selling something:</strong> Their advice will point toward their product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Survivors only:</strong> You hear from successes, not from failures who tried the same thing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626]">&bull;</span>
                <span><strong>Commentators who never act:</strong> Many people have opinions; few have consequences</span>
              </li>
            </ul>
          </section>

          {/* Section 5: The 70% Rule */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The 70% Rule
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some leaders use a practical guideline: <strong>when you have
              about 70% of the information you wish you had, decide.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why not wait for more?
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The remaining 30% often takes 80% of the time to gather</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Conditions change while you research; old information becomes stale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You learn more by acting and adjusting than by researching endlessly</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This does not mean being reckless. It means recognising that
              <strong> perfect information is impossible</strong>, and
              waiting for it is itself a choice&mdash;often a costly one.
            </p>
          </section>

          {/* Section 6: Asking Good Questions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Art of Asking Good Questions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The quality of your information depends on the quality of
              your questions. Poor questions lead to poor data.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Ask open questions first
                </h3>
                <p className="text-gray-600 mb-0">
                  &quot;What should I know about starting a business?&quot;
                  reveals more than &quot;Is starting a business hard?&quot;
                  Do not lead with your assumptions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Ask about failures, not just successes
                </h3>
                <p className="text-gray-600 mb-0">
                  &quot;What went wrong in your business?&quot; teaches more
                  than &quot;How did you succeed?&quot; People often share
                  successes freely but need prompting to discuss failures.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Ask for evidence, not opinions
                </h3>
                <p className="text-gray-600 mb-0">
                  &quot;What makes you think that?&quot; or &quot;Can you give
                  me an example?&quot; separates informed views from mere
                  speculation.
                </p>
              </div>
            </div>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Knowledge
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Avvaiyar, the Tamil poet, understood that true knowledge
              requires seeking it across boundaries:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;திரைகடல் ஓடியும் திரவியம் தேடு&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Venture across the oceans and
              seek prosperity.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya advised on acting with available knowledge:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;अवसरं प्राप्य कार्याणि कुर्वन्ति बुद्धिमत्तमाः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;The wise act when opportunity
              arrives.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Seek knowledge actively
              from diverse sources, even uncomfortable ones. But when the
              moment for action arrives, act with what you know. Waiting
              for complete knowledge means waiting forever.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>More information does not always mean better decisions&mdash;know when to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Ask three questions: What is the decision? What would change it? How confident must I be?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Watch for analysis paralysis&mdash;sometimes research is just avoidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Value experience over opinion, data over belief, the unbiased over the invested</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>At 70% information, consider deciding&mdash;perfect knowledge is impossible</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a decision you have been putting off. What specific
              information would genuinely change your choice? If you had
              that information today, would you be ready to decide?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to separate useful
              research from procrastination.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/decisions/thinking-clearly"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Thinking Clearly
          </Link>
          <Link
            href="/foundations/decisions/weighing-tradeoffs"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Weighing Trade-offs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
