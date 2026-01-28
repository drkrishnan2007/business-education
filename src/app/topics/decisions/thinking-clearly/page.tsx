import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thinking Clearly - Business Wisdom',
  description: 'Our minds play tricks on us. Learn the common biases that lead us astray and how to guard against them.',
};

export default function ThinkingClearlyPage() {
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
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Thinking Clearly
          </h1>
          <p className="text-xl text-gray-600">
            Your mind is not a perfect reasoning machine. It takes shortcuts
            that often lead you astray. Understanding these biases is the
            first step to overcoming them.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Your Mind Plays Tricks */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Your Mind Plays Tricks
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is an uncomfortable truth: <strong>your brain is not
              designed to think clearly. It is designed to think
              quickly.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For most of human history, fast thinking kept us alive. See
              movement in the bushes? Assume it is a tiger and run. Better
              to be wrong and alive than right and dead.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But modern decisions are different. Choosing a career, making
              investments, building relationships&mdash;these require slow,
              careful thought. And our brains resist that.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Understanding the tricks your mind plays is the first step to
              making better decisions. Let us examine the most common ones.
            </p>
          </section>

          {/* Section 2: Confirmation Bias */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Confirmation Bias: Seeing What You Want to See
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you believe something, you start noticing evidence that
              supports it and ignoring evidence that contradicts it.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The business idea
                </h3>
                <p className="text-gray-600 mb-0">
                  You think of a brilliant business idea. Suddenly, you
                  notice people everywhere who would buy it. You remember
                  every encouraging comment and forget every doubt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: First impressions
                </h3>
                <p className="text-gray-600 mb-0">
                  You decide someone is untrustworthy. From then on, every
                  ambiguous action confirms your belief. They are late?
                  Unreliable. They arrive early? Trying to manipulate you.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-[#16a34a] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The antidote:</strong> Actively seek information
                that might prove you wrong. Ask: &quot;What would change my
                mind?&quot; If nothing could, you are not thinking&mdash;you
                are just believing.
              </p>
            </div>
          </section>

          {/* Section 3: Sunk Cost Fallacy */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Sunk Cost Fallacy: Throwing Good Money After Bad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have already invested time, money, or effort into
              something. It is not working. But you continue because you do
              not want to &quot;waste&quot; what you already spent.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The terrible film
                </h3>
                <p className="text-gray-600 mb-0">
                  Thirty minutes into a film, you know it is bad. But you
                  paid for the ticket, so you sit through two more hours
                  of misery. The ticket money is gone either way.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The failing project
                </h3>
                <p className="text-gray-600 mb-0">
                  A business has invested lakhs in a project that is
                  clearly not working. Instead of stopping, they invest
                  more, reasoning: &quot;We cannot stop now after all we
                  have invested.&quot;
                </p>
              </div>
            </div>
            <div className="border-l-4 border-[#16a34a] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The antidote:</strong> Ask yourself: &quot;If I were
                starting fresh today, with no past investment, would I
                choose this path?&quot; If no, stop. What is spent is spent.
              </p>
            </div>
          </section>

          {/* Section 4: Anchoring */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Anchoring: The First Number Wins
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The first piece of information you receive has an outsized
              influence on your thinking, even when it is irrelevant.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: The MRP tag
                </h3>
                <p className="text-gray-600 mb-0">
                  A shirt has &quot;MRP ₹2,000&quot; crossed out, with
                  &quot;Sale: ₹1,200&quot; below it. You feel you are saving
                  ₹800. But the shirt was never worth ₹2,000. The anchor
                  shaped your perception.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: Salary negotiations
                </h3>
                <p className="text-gray-600 mb-0">
                  If an employer asks your expected salary first, they
                  anchor the negotiation. If you say ₹8 lakhs, they might
                  offer ₹7 lakhs. If you had said ₹12 lakhs, they might
                  have offered ₹10 lakhs.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-[#16a34a] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The antidote:</strong> Before receiving external
                information, form your own independent view. In
                negotiations, set your own anchor first. Do not let others
                frame your thinking.
              </p>
            </div>
          </section>

          {/* Section 5: Availability Bias */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Availability Bias: What You Remember Seems Common
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You judge how likely something is based on how easily you can
              remember examples. Vivid, recent, or emotional events seem
              more common than they are.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: Fear of flying
                </h3>
                <p className="text-gray-600 mb-0">
                  Plane crashes make dramatic news. Car accidents do not.
                  So people fear flying more than driving, even though
                  driving is far more dangerous. The memorable examples
                  distort judgment.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Example: Startup success stories
                </h3>
                <p className="text-gray-600 mb-0">
                  You hear about successful entrepreneurs but not the
                  thousands who failed. This makes starting a business
                  seem easier than it is. Survivors are visible; failures
                  are forgotten.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-[#16a34a] pl-4 py-2">
              <p className="text-gray-700 mb-0">
                <strong>The antidote:</strong> When estimating probability,
                look for actual statistics instead of relying on what you
                remember. Ask: &quot;Am I judging by data or by dramatic
                stories?&quot;
              </p>
            </div>
          </section>

          {/* Section 6: More Biases */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Other Traps to Watch For
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Overconfidence:</strong> Most people think they
                  are above average&mdash;which is mathematically impossible.
                  Assume you know less than you think you do.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Status quo bias:</strong> We prefer the current
                  state, even when change would be beneficial. &quot;Better
                  the devil you know&quot; is often bad advice.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Loss aversion:</strong> Losing ₹1,000 hurts more
                  than gaining ₹1,000 feels good. This makes us too
                  cautious, avoiding worthwhile risks.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Hindsight bias:</strong> After something happens,
                  you think you &quot;knew it all along.&quot; This stops you
                  from learning from your actual thinking process.
                </div>
              </li>
            </ul>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Clear Thinking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar understood the importance of mental strength:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;உள்ளம் உடைமை உடைமை பொருளுடைமை<br />
              நில்லாது நீங்கி விடும்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Mental strength is lasting
              wealth. Material possessions inevitably depart.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya warned about clouded judgment:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;विनाशकाले विपरीत बुद्धि॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;When destruction approaches,
              wisdom deserts.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> A clear mind is your
              greatest asset. When emotions run high or circumstances feel
              urgent, that is precisely when your thinking becomes most
              unreliable. The wise recognise this danger and create
              distance before deciding.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your brain is designed for speed, not accuracy&mdash;understand its shortcuts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Confirmation bias: Actively seek information that might prove you wrong</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Sunk cost fallacy: Past investment should not drive future decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Anchoring: Form your own view before receiving external information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Availability bias: Use statistics, not memorable stories, to judge probability</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a belief you hold strongly&mdash;about yourself, about
              business, about life. What evidence would it take to change
              your mind? If you cannot think of any, you might be caught in
              confirmation bias.
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to practise examining
              your own thinking.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/decisions/decisions-shape-life"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Decisions Shape Your Life
          </Link>
          <Link
            href="/topics/decisions/gathering-information"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Gathering Information
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
