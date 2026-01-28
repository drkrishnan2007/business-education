import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Feelings - Business Wisdom',
  description: 'Learn why emotions are information, not commands. Discover the pause between feeling and action, and wisdom from Thirukkural on self-control.',
};

export default function UnderstandingFeelingsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/self" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Manage Yourself
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 4 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Understanding Your Feelings
          </h1>
          <p className="text-xl text-gray-600">
            Your emotions are messengers, not masters.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Emotions as Information */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Emotions Are Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You feel angry. You feel sad. You feel anxious. These feelings
              seem to just happen to you, like weather inside your head.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But here is a different way to see it: <strong>emotions are
              information.</strong> They are signals your brain sends to tell
              you something about your situation.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Fear</strong> says: &quot;Something might be dangerous. Pay attention.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Anger</strong> says: &quot;Something feels unfair. Your boundaries may be crossed.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Sadness</strong> says: &quot;You have lost something that mattered.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Anxiety</strong> says: &quot;The future feels uncertain. Prepare.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Joy</strong> says: &quot;This is good. Do more of this.&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Emotions are not good or bad. They are data. The question is not
              whether you feel them&mdash;you will. The question is what you do
              with the information.
            </p>
          </section>

          {/* Section 2: Why We Snap */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why You Snap at People
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have you ever said something hurtful and immediately regretted it?
              Snapped at a family member for no real reason? Felt irritated by
              something tiny that normally would not bother you?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Often, the trigger is not the real problem. The real problem is
              what happened before:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Sleep:</strong> When you are tired, your brain&apos;s emotional control weakens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Hunger:</strong> Low blood sugar makes you irritable (ever heard of &quot;hangry&quot;?)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Stress:</strong> When you are overwhelmed, small things feel huge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Loneliness:</strong> When you feel disconnected, everything hurts more</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Next time you feel yourself about to explode, ask: Am I actually
              upset about this? Or am I tired, hungry, stressed, or lonely?
              Often, fixing the underlying issue is easier than fighting the
              emotion.
            </p>
          </section>

          {/* Section 3: The Pause */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Pause Between Feeling and Action
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is one of the most powerful skills you can develop:
              <strong> creating space between what you feel and what you do.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people react instantly. Something makes them angry, they
              lash out. Something makes them anxious, they panic. The feeling
              and the response are almost the same moment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But there is always a gap, even if it is tiny. And you can make
              that gap bigger. In that gap lives your power to choose.
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-medium text-center">
                Trigger &rarr; <span className="text-[#5b21b6]">[THE PAUSE]</span> &rarr; Response
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              How to create the pause:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Take three slow breaths before responding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Count to ten (really, this old advice works)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Say &quot;Let me think about that&quot; to buy time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Walk away if needed&mdash;&quot;I need a moment&quot;</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The goal is not to suppress emotions. It is to respond rather
              than react. Reacting is automatic. Responding is chosen.
            </p>
          </section>

          {/* Section 4: Naming Emotions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Name It to Tame It
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Scientists have discovered something fascinating: simply naming
              your emotions reduces their intensity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you say (even silently to yourself) &quot;I am feeling anxious&quot;
              or &quot;I notice I am getting angry,&quot; something shifts. The emotion
              moves from controlling you to being observed by you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is not magic. Brain scans show that labelling emotions
              activates the thinking part of your brain, which then calms
              the emotional part. Putting feelings into words literally
              changes your brain&apos;s response.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Try to be specific. &quot;I feel bad&quot; is vague. &quot;I feel embarrassed
              because I made a mistake in front of everyone&quot; is precise. The
              more precisely you can name what you feel and why, the more
              power you have over it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Build your emotional vocabulary. Are you frustrated or
              disappointed? Anxious or excited? Sad or lonely? The words
              matter.
            </p>
          </section>

          {/* Section 5: Emotional Intelligence */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Emotional Intelligence: A Skill You Can Learn
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some people seem naturally good with emotions&mdash;their own
              and others&apos;. They stay calm in crises. They understand what
              others are feeling. They manage conflict gracefully.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is called <strong>emotional intelligence (EQ)</strong>.
              And here is the good news: it is a skill, not a fixed trait.
              You can develop it, just like you can develop any other skill.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Four parts of emotional intelligence:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  1. Self-Awareness
                </h3>
                <p className="text-gray-600">
                  Knowing what you are feeling and why. Recognising your patterns.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  2. Self-Management
                </h3>
                <p className="text-gray-600">
                  Controlling your impulses. Choosing your response. Staying
                  calm under pressure.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  3. Social Awareness
                </h3>
                <p className="text-gray-600">
                  Understanding what others are feeling. Reading the room.
                  Empathy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  4. Relationship Management
                </h3>
                <p className="text-gray-600">
                  Handling interactions well. Resolving conflicts. Inspiring
                  and influencing others.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Research shows that EQ matters more than IQ for success in
              most areas of life. The person who can manage their emotions
              and understand others will often outperform the &quot;smartest&quot;
              person in the room.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Self-Control
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar dedicated an entire chapter of the Thirukkural to
              &quot;அடக்கமுடைமை&quot; (self-control or restraint):
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;அடக்கம் அமரருள் உய்க்கும் அடங்காமை<br />
              ஆரிருள் உய்த்து விடும்.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Self-control elevates one among
              the gods; lacking it leads to darkness.&quot; (Kural 121)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And on the power of words:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;தீயினாற் சுட்டபுண் உள்ளாறும் ஆறாதே<br />
              நாவினாற் சுட்ட வடு.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              <strong>Meaning:</strong> &quot;Burns from fire will heal; wounds
              from harsh words never recover.&quot; (Kural 129)
              This is why the pause matters&mdash;words spoken in anger leave
              scars that last far longer than the moment.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Emotions are information&mdash;data about your situation, not commands to obey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Often you snap because of hunger, tiredness, or stress&mdash;not the trigger itself</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Create a pause between feeling and action&mdash;respond, do not react</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Naming your emotions precisely reduces their power over you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Emotional intelligence is a skill that can be developed with practice</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of a recent time when you reacted to something and later
              wished you had handled it differently. What were you feeling?
              What was the real cause underneath? How might you respond
              differently next time?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to build awareness of
              your emotional patterns.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/self/power-of-habits"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: The Power of Habits
          </Link>
          <Link
            href="/topics/self/never-stop-learning"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Never Stop Learning
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
