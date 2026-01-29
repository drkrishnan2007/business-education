import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handling Conflict - Business Wisdom',
  description: 'Learn how to disagree without destroying relationships. Discover the difference between positions and interests, with wisdom from Thirukkural on patience.',
};

export default function HandlingConflictPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations/people" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How People Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Handling Conflict
          </h1>
          <p className="text-xl text-gray-600">
            Disagreement is inevitable. Destruction is not.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Conflict Is Normal */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Conflict Is Normal (and Can Be Healthy)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whenever people work together, there will be disagreement. Different
              ideas about what to do. Different opinions about how to do it.
              Different needs that seem to clash.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many people think conflict is bad and must be avoided. But that is
              not true. <strong>Conflict itself is neutral.</strong> What matters
              is how you handle it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthy conflict can actually be good:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It brings hidden problems into the open where they can be solved</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It challenges weak ideas and makes good ideas stronger</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It helps people understand each other better</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It can clear the air and actually bring people closer</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The goal is not to avoid conflict. It is to have conflict without
              damaging relationships. That is a skill, and you can learn it.
            </p>
          </section>

          {/* Section 2: Disagreement vs Attack */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Disagreement vs Personal Attack
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a crucial difference between disagreeing with someone&apos;s
              idea and attacking them as a person:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Attacking the Idea (Healthy)
                </h3>
                <p className="text-gray-600">
                  &quot;I see it differently. I think the deadline is too tight because...&quot;<br />
                  &quot;I am not sure that approach will work. Here is my concern...&quot;<br />
                  &quot;I disagree. Let me explain my reasoning.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Attacking the Person (Damaging)
                </h3>
                <p className="text-gray-600">
                  &quot;You always set unrealistic deadlines.&quot;<br />
                  &quot;That is a stupid idea.&quot;<br />
                  &quot;You never listen to anyone else.&quot;
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The difference might seem subtle, but it is huge. When you attack
              an idea, the other person can change their mind without losing
              face. When you attack them as a person, they become defensive.
              Now they are defending their identity, not just their idea.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Watch out for words like &quot;always&quot; and &quot;never&quot;&mdash;they turn
              a specific disagreement into a sweeping judgment of character.
              Stick to the specific situation, the specific idea.
            </p>
          </section>

          {/* Section 3: Positions vs Interests */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What You Both Actually Want
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is a powerful secret from negotiation experts: most conflicts
              are not really about what people say they want. They are about
              something deeper underneath.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Position:</strong> What someone says they want. &quot;I want the window open.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Interest:</strong> Why they want it. &quot;I want fresh air because it helps me concentrate.&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imagine two people fighting over whether the window should be open
              or closed. One wants fresh air. The other is cold. Their positions
              seem incompatible&mdash;the window cannot be both open and closed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But look at the interests: one wants fresh air, one wants warmth.
              Those can both be satisfied. Open a window in another room. Get a
              jumper. Turn on a fan. Use a heater. Once you understand the real
              interests, solutions appear.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In conflicts, always ask: &quot;What do you actually need here?&quot; or
              &quot;Why is this important to you?&quot; Often you will find you both want
              the same thing at a deeper level, just expressing it differently.
            </p>
          </section>

          {/* Section 4: How to Disagree Well */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              How to Disagree Without Destroying
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here are practical techniques for healthy disagreement:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Start with what you agree on:</strong> &quot;I agree we need to finish by Friday. Where I see it differently is...&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Use &quot;I&quot; statements:</strong> &quot;I feel frustrated when...&quot; not &quot;You always make me frustrated.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be specific:</strong> &quot;When you were late today...&quot; not &quot;You are always late.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Ask questions first:</strong> &quot;Help me understand your thinking&quot; before &quot;Here is why you are wrong.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Acknowledge their point:</strong> &quot;I see why you would think that...&quot; before explaining your view.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Separate the person from the problem:</strong> &quot;We have a challenge to solve together&quot; not &quot;You are the problem.&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The goal is to make the other person feel respected even while you
              disagree. When people feel respected, they can hear your point.
              When they feel attacked, they cannot hear anything.
            </p>
          </section>

          {/* Section 5: When to Stand, When to Bend */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              When to Stand Firm, When to Compromise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not all conflicts should be resolved the same way. Sometimes you
              need to hold your ground. Sometimes you need to give in. How do
              you know?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Stand firm when:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It involves your core values or ethics (never compromise on what is right)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You have evidence and facts on your side</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The stakes are high and getting it wrong would cause real harm</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Compromise or let go when:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>It is a matter of preference, not principle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The relationship is more important than winning this point</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You might be wrong and you are not certain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The cost of the fight is higher than the cost of losing</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Wise people pick their battles. They do not fight over everything,
              which means when they do fight, people take them seriously.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Patience
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar dedicated Chapter 16 to &quot;பொறையுடைமை&quot; (patience
              and forbearance), understanding that restraint is strength:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;அகழ்வாரைத் தாங்கும் நிலம்போல தம்மை<br />
              இகழ்வார்ப் பொறுத்தல் தலை.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Like the earth that bears those who
              dig into it, the truly great bear with those who abuse them.&quot;
              (Kural 151)
            </p>
            <p className="text-gray-700 leading-relaxed">
              This does not mean accepting injustice or being a pushover. It
              means having the strength to respond thoughtfully rather than
              react instantly. The earth does not crumble when someone digs.
              True strength is remaining steady when provoked, choosing your
              response rather than being controlled by anger.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Conflict is normal and can be healthy&mdash;the goal is handling it well, not avoiding it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Attack ideas, not people&mdash;avoid &quot;always&quot; and &quot;never,&quot; stick to specifics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Look for interests behind positions&mdash;what do they really need underneath what they are asking for?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Disagree respectfully&mdash;use &quot;I&quot; statements, acknowledge their point, start with common ground</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Pick your battles&mdash;stand firm on values, compromise on preferences</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a recent disagreement you had with someone. Did you
              attack their idea or them as a person? What was the underlying
              interest behind their position? Behind yours? How might the
              conversation have gone differently if you had focused on
              interests instead of positions?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to practise seeing conflicts
              differently.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/people/working-in-teams"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Working in Teams
          </Link>
          <Link
            href="/foundations/people/helping-others-succeed"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Helping Others Succeed
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
