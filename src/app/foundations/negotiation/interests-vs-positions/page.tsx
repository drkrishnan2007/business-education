import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interests vs Positions - Business Wisdom',
  description: 'Learn the crucial difference between what people say they want (positions) and what they actually need (interests). This is the key to unlocking better agreements.',
};

export default function InterestsVsPositionsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/negotiation" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Negotiate
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Interests vs Positions
          </h1>
          <p className="text-xl text-gray-600">
            The most important skill in negotiation: looking beyond what people
            say they want to understand what they actually need.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Orange Story */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Story of Two Sisters and One Orange
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Two sisters are fighting over the last orange in the fruit bowl.
              Each says &quot;I want the orange!&quot; Their mother, trying to be
              fair, cuts the orange in half and gives each sister one piece.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Problem solved? Not quite.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              One sister peels her half, throws away the flesh, and uses the
              peel to make a cake. The other sister throws away the peel and
              eats the flesh.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>If the mother had asked WHY each wanted the orange,</strong>
              she could have given one the whole peel and the other the whole
              flesh. Both would have gotten exactly what they needed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the difference between <em>positions</em> and <em>interests</em>.
            </p>
          </section>

          {/* Section 2: Definitions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Position vs Interest: The Crucial Difference
            </h2>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Position: What Someone Says They Want
                </h3>
                <p className="text-gray-600">
                  &quot;I want the orange.&quot; &quot;I want a higher salary.&quot;
                  &quot;I want a discount.&quot; &quot;I want the window seat.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Interest: Why They Want It
                </h3>
                <p className="text-gray-600">
                  &quot;I need the peel for baking.&quot; &quot;I need to feel valued.&quot;
                  &quot;I need to stay within budget.&quot; &quot;I feel anxious in the aisle.&quot;
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Positions are often incompatible. Two people cannot both have the
              same orange. But interests can often be satisfied in multiple ways.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Great negotiators focus on interests, not positions.</strong>
            </p>
          </section>

          {/* Section 3: Real Examples */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Examples From Real Life
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#5b21b6] pl-4">
                <p className="text-gray-700 mb-2">
                  <strong>Position:</strong> &quot;I want a 20% raise.&quot;
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Possible interests:</strong>
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>&bull; Financial security (bills, savings)</li>
                  <li>&bull; Recognition for good work</li>
                  <li>&bull; Fairness (others earn more for similar work)</li>
                  <li>&bull; Career progression</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  Solutions could include: smaller raise + bonus structure,
                  better title, more flexible hours, training opportunities.
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <p className="text-gray-700 mb-2">
                  <strong>Position:</strong> &quot;I want to leave the house by 7am.&quot;
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Possible interests:</strong>
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>&bull; Avoiding traffic</li>
                  <li>&bull; Time for breakfast at work</li>
                  <li>&bull; Impressing the boss</li>
                  <li>&bull; Anxiety about being late</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  Solutions could include: taking a different route, boss
                  confirming 7:15 is fine, preparing things the night before.
                </p>
              </div>

              <div className="border-l-4 border-[#eab308] pl-4">
                <p className="text-gray-700 mb-2">
                  <strong>Position:</strong> &quot;I want to sell this for Rs 5000.&quot;
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Possible interests:</strong>
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>&bull; Need the money quickly</li>
                  <li>&bull; Fair price for the item&apos;s value</li>
                  <li>&bull; Not feeling taken advantage of</li>
                  <li>&bull; Getting rid of it soon (moving house)</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  Solutions could include: Rs 4500 cash today, Rs 5000 next
                  week, item picked up immediately.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How to Uncover Interests */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Discover Someone&apos;s Real Interests
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              People do not always tell you their real interests. Sometimes they
              do not even know themselves. Here is how to find out:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Ask &quot;Why?&quot;
                </h3>
                <p className="text-gray-600">
                  The simplest question. &quot;Why do you want that?&quot; &quot;What
                  would that give you?&quot; &quot;Why is that important?&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Ask &quot;Why Not?&quot;
                </h3>
                <p className="text-gray-600">
                  If they reject an option, ask why. &quot;What concerns you about
                  that?&quot; The answer reveals what they are protecting.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Listen to Complaints
                </h3>
                <p className="text-gray-600">
                  What someone complains about tells you what they care about.
                  &quot;I hate waiting&quot; means speed matters. &quot;I feel ignored&quot;
                  means respect matters.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. Put Yourself in Their Shoes
                </h3>
                <p className="text-gray-600">
                  If you were them, why would you want this? What would you be
                  worried about? What would matter most?
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Your Own Interests */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Know Your Own Interests Too
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before any important negotiation, ask yourself:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What do I really need from this?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Why do I want what I am asking for?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>What would satisfy my underlying needs?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Are there other ways to meet those needs?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Sometimes you discover that what you thought you wanted is not
              what you actually need. This gives you flexibility to find
              better solutions.
            </p>
          </section>

          {/* Section 6: Common Interests */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Finding Common Ground
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you understand both sides&apos; interests, you often find
              surprising common ground:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Both want the deal done quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Both want to maintain a good relationship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Both want to feel respected</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Both want certainty and reliability</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Start from shared interests. It reminds both sides that you are
              not enemies&mdash;you are two people trying to solve a problem.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Understanding Others
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya understood the importance of seeing beyond the surface:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;परोक्षे कार्यहन्तारं प्रत्यक्षे प्रियवादिनम्।<br />
              वर्जयेत्तादृशं मित्रं विषकुम्भं पयोमुखम्॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Avoid the person who speaks sweetly
              to your face but works against you behind your back&mdash;like a
              pot of poison with milk on top.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And Thiruvalluvar taught the value of understanding others&apos;
              true nature:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;குணம்நாடிக் குற்றமும் நாடி அவற்றுள்<br />
              மிகைநாடி மிக்கக் கொளல்&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Examine both virtues and faults,
              then weigh which outweighs, and judge accordingly.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Look beneath the surface. What
              people say and what they need are often different. A skilled
              negotiator sees past positions to understand real motivations.
              This is not manipulation&mdash;it is understanding.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Positions are what people say; interests are why they want it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Positions often conflict; interests can usually both be met</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Ask &quot;why&quot; and &quot;why not&quot; to discover real interests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Know your own interests before negotiating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Look for shared interests to build common ground</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a recent disagreement you had. What position did you take?
              What was your real interest underneath? What about the other person?
              Could there have been a solution that met both interests?
            </p>
            <p className="text-gray-600 text-sm italic">
              Often we discover that creative solutions were possible&mdash;we
              just did not think to look for them.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/negotiation/what-is-negotiation"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What Negotiation Really Is
          </Link>
          <Link
            href="/foundations/negotiation/preparation"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Preparation is Everything
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
