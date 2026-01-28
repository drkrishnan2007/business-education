import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Making Hard Decisions - Business Wisdom',
  description: 'Leaders must choose when there is no good option. Learn to decide wisely, accept consequences, and move forward, with wisdom from Chanakya and Thiruvalluvar.',
};

export default function MakingHardDecisionsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/business/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Lead
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Making Hard Decisions
          </h1>
          <p className="text-xl text-gray-600">
            Leadership is not choosing between right and wrong&mdash;that is easy.
            Leadership is choosing between two rights, or the lesser of two wrongs.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Decisions are Hard */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Some Decisions are Hard
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Easy decisions have a clear right answer. Hard decisions do not.
              They are hard because:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>All options have costs:</strong> You cannot win without someone losing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Uncertainty is high:</strong> You cannot know the outcome until after you choose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Values conflict:</strong> Being fair to one person means being unfair to another</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Stakes are high:</strong> The consequences really matter</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If decisions were easy, you would not need a leader to make them.
              Leadership exists precisely because someone must make the hard calls.
            </p>
          </section>

          {/* Section 2: The Cost of Not Deciding */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Hidden Cost of Not Deciding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When faced with hard choices, it is tempting to delay. &quot;Maybe the
              situation will resolve itself. Maybe more information will make the
              right choice obvious.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sometimes waiting is wise. But often, <strong>not deciding is itself
              a decision</strong>&mdash;and often the worst one:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Options Disappear
                </h3>
                <p className="text-gray-600">
                  While you wait, good choices may no longer be available. The
                  talented employee takes another job. The opportunity passes.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Problems Grow
                </h3>
                <p className="text-gray-600">
                  Small issues become big ones. A difficult conversation avoided
                  today becomes a crisis next month.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Trust Erodes
                </h3>
                <p className="text-gray-600">
                  People lose faith in leaders who cannot decide. They sense
                  weakness and begin looking elsewhere for direction.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A good decision made in time is better than a perfect decision
              made too late.
            </p>
          </section>

          {/* Section 3: How to Approach Hard Decisions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              A Framework for Hard Decisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When facing a difficult choice, work through these steps:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span><strong>Clarify the decision:</strong> What exactly must be decided? By when?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span><strong>List all options:</strong> Including the option to do nothing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span><strong>Consider consequences:</strong> Who is affected? How? What could go wrong?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">4.</span>
                <span><strong>Apply values:</strong> What matters most here? What would you want to tell others you chose?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">5.</span>
                <span><strong>Seek input:</strong> Who has relevant experience or perspective?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">6.</span>
                <span><strong>Decide:</strong> Make the choice, knowing it may not be perfect</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">7.</span>
                <span><strong>Commit:</strong> Once decided, move forward wholeheartedly</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This process does not make hard decisions easy. But it ensures
              you make them thoughtfully, not reactively.
            </p>
          </section>

          {/* Section 4: Living with Consequences */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Living with Consequences
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every decision has consequences. Some are good, some are bad.
              A leader must accept both:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Own the outcome:</strong> Do not blame circumstances or other people</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Learn from mistakes:</strong> But do not torture yourself over them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Adjust as needed:</strong> New information may require new decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Stay kind:</strong> To yourself and to those affected</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember: you made the best decision you could with the information
              you had at the time. Hindsight is not a fair judge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If a decision turns out badly, the question is: &quot;What can I do now?&quot;
              not &quot;Why did I fail?&quot;
            </p>
          </section>

          {/* Section 5: Communicating Difficult Decisions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Communicating Hard Decisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              How you communicate a decision matters as much as the decision
              itself:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be direct:</strong> Do not bury the news in caveats and qualifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Explain the reasoning:</strong> Help people understand the &quot;why&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Acknowledge the costs:</strong> Show you understand who is hurt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Take responsibility:</strong> &quot;I decided&quot; not &quot;It was decided&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Be available:</strong> Let people ask questions and express feelings</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              People can accept hard decisions they disagree with if they feel
              heard and if they understand the reasoning. What they cannot
              accept is being dismissed or deceived.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Decision-Making
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar taught the importance of thinking before acting:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;எண்ணித் துணிக கருமம் துணிந்தபின்<br />
              எண்ணுவம் என்பது இழுக்கு&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Think before you act. To think after
              acting is disgraceful.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya emphasized decisiveness in leadership:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;अनवस्थित चित्तस्य न कर्मसु न निश्चयः।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;One with an unsettled mind cannot
              be decisive in action.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Think carefully before deciding.
              But once you decide, commit fully. The worst position is to be
              stuck between thinking and acting, paralyzed by doubt.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Hard decisions are hard because all options have costs&mdash;that is why leaders exist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Not deciding is often the worst decision&mdash;problems grow while you wait</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Use a framework: clarify, list options, consider consequences, apply values, decide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Own the outcome without torturing yourself&mdash;learn and move forward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>As Thiruvalluvar taught: think before deciding, then commit fully</span>
              </li>
            </ul>
          </section>

          {/* Exercise */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Practical Exercise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Decision Journal:</strong> For the next important
              decision you face, write down:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span>What decision are you making?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span>What options do you have?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span>What do you expect to happen if you choose each option?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">4.</span>
                <span>What values guided your final choice?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              In three months, review what you wrote. Was your prediction
              accurate? What would you do differently? This practice builds
              your judgment over time.
            </p>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a time you delayed a decision and the delay made things
              worse. What were you waiting for? What would have happened if
              you had decided sooner, even imperfectly?
            </p>
            <p className="text-gray-600 text-sm italic">
              This is not about blame. It is about recognising that the
              &quot;perfect moment&quot; to decide often never arrives.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/business/leadership/building-trust"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Building Trust
          </Link>
          <Link
            href="/topics/business/leadership/developing-others"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Developing Others
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
