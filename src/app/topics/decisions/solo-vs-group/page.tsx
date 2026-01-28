import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When to Decide Alone vs Together - Business Wisdom',
  description: 'Some decisions need solitude, others need collaboration. Learn when to seek counsel and when to trust yourself.',
};

export default function SoloVsGroupPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/decisions" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How Decisions Get Made
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            When to Decide Alone vs Together
          </h1>
          <p className="text-xl text-gray-600">
            Some decisions need solitude. Others need counsel. The wisdom
            is knowing when to trust yourself and when to seek others.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Two Extremes */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Two Ways to Fail at Decisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some people make every decision alone. They trust only
              themselves, ignore advice, and wonder why they keep making
              the same mistakes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Other people seek opinions for everything. They ask everyone,
              get confused by conflicting advice, and end up unable to
              decide at all.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Both extremes are failures of judgment.</strong> The
              skill is knowing which decisions need others and which need
              solitude.
            </p>
          </section>

          {/* Section 2: When to Decide Alone */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When to Decide Alone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some decisions are yours alone to make. Seeking consensus
              actually makes them worse.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions about your values
                </h3>
                <p className="text-gray-600 mb-0">
                  What kind of person you want to be. What you believe in.
                  What you will and will not compromise on. Others can
                  share their values, but they cannot choose yours.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions you understand better than anyone
                </h3>
                <p className="text-gray-600 mb-0">
                  If you are the expert&mdash;through experience, study, or
                  unique position&mdash;too many opinions add noise, not
                  signal. Trust your expertise.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions that need speed
                </h3>
                <p className="text-gray-600 mb-0">
                  When the moment demands action, consultation becomes
                  paralysis. Sometimes you must decide now, alone, with
                  whatever you know.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions where only you bear the consequences
                </h3>
                <p className="text-gray-600 mb-0">
                  If you alone will live with the outcome, you alone should
                  choose. Others may advise, but the final say is yours.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: When to Seek Counsel */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When to Seek Counsel
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some decisions benefit enormously from others&apos; input.
              Ignoring this help is stubborn, not strong.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions where others have experience you lack
                </h3>
                <p className="text-gray-600 mb-0">
                  Starting a business? Talk to entrepreneurs. Buying a
                  house? Talk to homeowners. Others have paid for lessons
                  you can learn for free.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions that affect others
                </h3>
                <p className="text-gray-600 mb-0">
                  If your choice impacts your family, your team, or your
                  community, they deserve a voice. Decisions made without
                  their input often fail in execution.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Decisions where your judgment might be clouded
                </h3>
                <p className="text-gray-600 mb-0">
                  When you are emotional, tired, or have strong biases,
                  outside perspective helps. A trusted adviser can see
                  what you cannot.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Irreversible decisions with major consequences
                </h3>
                <p className="text-gray-600 mb-0">
                  The bigger the stakes, the more important it is to test
                  your thinking against others. A decision you cannot undo
                  deserves careful scrutiny.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How to Seek Counsel Well */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Seek Counsel Well
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not all advice is equal. The art is in choosing whom to ask
              and how to ask.
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Choose advisers carefully
                </h3>
                <p className="text-gray-600 mb-0">
                  Seek people who have achieved what you want, have your
                  interests at heart, and will tell you uncomfortable
                  truths. Avoid those who only tell you what you want to
                  hear.
                </p>
              </div>

              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Ask for perspectives, not decisions
                </h3>
                <p className="text-gray-600 mb-0">
                  Say &quot;What should I consider?&quot; not &quot;What should
                  I do?&quot; You want their insight, not their choice. The
                  final decision remains yours.
                </p>
              </div>

              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Seek disagreement
                </h3>
                <p className="text-gray-600 mb-0">
                  If everyone agrees with you, you have learned nothing.
                  Specifically ask: &quot;What might I be missing?&quot; or
                  &quot;Why might this be a bad idea?&quot;
                </p>
              </div>

              <div className="border-l-4 border-[#16a34a] pl-4 py-2">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Limit your advisers
                </h3>
                <p className="text-gray-600 mb-0">
                  Too many opinions create confusion. Three to five trusted
                  perspectives are usually enough. Quality over quantity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Group Decisions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Dangers of Group Decisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Groups can make wise decisions&mdash;but they can also fail
              spectacularly. Watch for these traps:
            </p>
            <ul className="space-y-4 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Groupthink:</strong> Everyone agrees because no
                  one wants to disagree. Harmony is valued over truth.
                  Dissent is silenced. Bad decisions follow.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Diffusion of responsibility:</strong> &quot;Someone
                  else will raise concerns.&quot; When everyone thinks this,
                  no one does. Individuals feel less accountable in groups.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>The loudest voice wins:</strong> The most
                  confident speaker dominates, regardless of whether they
                  are right. Quiet wisdom is drowned out.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Compromise to mediocrity:</strong> To satisfy
                  everyone, the group chooses the safest, blandest option.
                  No one is unhappy, but no one is inspired either.
                </div>
              </li>
            </ul>
            <div className="border-l-4 border-[#d97706] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The antidote:</strong> Appoint someone to argue the
                opposite case. Collect views in writing before discussion.
                Let the leader speak last. Reward honest disagreement.
              </p>
            </div>
          </section>

          {/* Section 6: The Final Say */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Consultation Is Not Democracy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a crucial distinction: <strong>seeking advice is not
              the same as seeking votes.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A wise leader consults widely, listens carefully, and then
              decides. They do not take the average of all opinions. They
              use others&apos; input to sharpen their own thinking, then
              make the call.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This means:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You can ask for advice and then ignore it (thoughtfully)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You must own the decision, even if others contributed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You cannot blame advisers if the decision fails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You should explain your reasoning to those who advised differently</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The final responsibility is always yours.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Counsel
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya emphasised the importance of wise counsel:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;एकं हन्यान्न वा हन्याद् इषुर्मुक्तो धनुष्मता।<br />
              बुद्धिर्बुद्धिमतः क्षिप्ता हन्याद् राष्ट्रं सनायकम्॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;An arrow released from a bow may
              or may not kill a single person. But wise counsel from a
              wise person can destroy an entire kingdom with its king.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Avvaiyar reminded us to balance counsel with self-trust:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;ஊக்கமது கைவிடேல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Do not give up self-confidence.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Seek counsel for strategic
              decisions&mdash;the stakes are too high for isolated thinking.
              But do not lose yourself in others&apos; opinions. Listen
              widely, decide yourself, and own the outcome. The power of
              good counsel lies in how it improves your thinking, not in
              replacing it.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Decide alone on values, expertise areas, urgent matters, and personal consequences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Seek counsel when others have experience, when outcomes affect others, or when stakes are high</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Choose advisers who will tell you uncomfortable truths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Watch for groupthink, diffusion of responsibility, and the loudest voice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Consultation is not democracy&mdash;the final decision and responsibility are yours</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a recent decision you made. Did you seek the
              right amount of input&mdash;or did you ask too many people or
              too few? What would you do differently?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to develop judgment
              about when to consult and when to trust yourself.
            </p>
          </section>

          {/* Completion Section */}
          <section className="card p-8 mb-8 bg-gradient-to-r from-[#fef3e2] to-[#f5f3ff]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Topic Complete
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have completed all five lessons on decision-making.
              Here is what you now understand:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#16a34a]">&#10003;</span>
                <span>Your life is shaped by your choices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16a34a]">&#10003;</span>
                <span>Your mind has biases that distort your thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16a34a]">&#10003;</span>
                <span>Information has diminishing returns&mdash;know when to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16a34a]">&#10003;</span>
                <span>Every choice has costs, including hidden ones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#16a34a]">&#10003;</span>
                <span>Some decisions need counsel, others need solitude</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Now practice.</strong> The next decision you face,
              use these frameworks. Notice your biases. Count all costs.
              Choose your advisers wisely. And then decide.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/decisions/weighing-tradeoffs"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Weighing Trade-offs
          </Link>
          <Link
            href="/topics/decisions"
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
