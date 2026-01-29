import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Art of Communication - Business Wisdom',
  description: 'Learn why listening is more important than talking. Discover how to understand what people really mean, with wisdom from Thirukkural on speech and listening.',
};

export default function ArtOfCommunicationPage() {
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
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            The Art of Communication
          </h1>
          <p className="text-xl text-gray-600">
            The best communicators are not the best talkers. They are the best listeners.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Listening > Talking */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Listening Is More Important Than Talking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people think good communication means speaking well&mdash;being
              clear, articulate, persuasive. That matters. But the real secret
              is something else: listening.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about the best conversations you have had. What made them
              good? Probably it was someone who really listened to you. Someone
              who did not just wait for their turn to talk, but actually heard
              what you said.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the strange truth: people will think you are a great
              communicator if you let them talk and show you are listening.
              They will leave the conversation thinking, &quot;What a wonderful
              person!&quot;&mdash;even if you barely said anything.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Why? Because feeling heard is one of the deepest human needs.
              When someone truly listens, it feels like being seen. Most people
              are so busy thinking about what they want to say that real
              listening has become rare and precious.
            </p>
          </section>

          {/* Section 2: What People Say vs Mean */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What People Say vs What They Mean
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something tricky about communication: words are only part
              of the message. Sometimes a small part.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              People often say one thing but mean another:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I&apos;m fine&quot; often means &quot;I&apos;m not fine, but I do not want to explain&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;Whatever you want&quot; sometimes means &quot;I have a preference but I am testing if you care&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;It does not matter&quot; can mean &quot;It matters a lot, but I feel silly saying so&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;I am not angry&quot; said in an angry tone clearly means the opposite</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is not people being dishonest. It is that emotions are
              complicated, and words are limited. Sometimes people do not even
              know what they really feel until later.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Good communicators pay attention to what is behind the words:
              the tone, the hesitation, the things left unsaid. They ask follow-up
              questions: &quot;What do you mean by that?&quot; or &quot;How are you really feeling?&quot;
            </p>
          </section>

          {/* Section 3: Body Language and Tone */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Silent Language: Body and Tone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Research suggests that the majority of communication is not words
              at all. It is body language (posture, facial expressions, gestures)
              and tone of voice (how you say things).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about it. &quot;That&apos;s great&quot; can mean completely different
              things depending on how you say it:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Said with enthusiasm and a smile &rarr; genuine excitement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Said flatly while looking away &rarr; boredom or dismissal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Said with a sigh and eye roll &rarr; sarcasm or frustration</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              What to watch for:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Eye contact:</strong> Looking away might mean discomfort or thinking; looking at you shows engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Posture:</strong> Crossed arms often means defensiveness; leaning in means interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Tone:</strong> A rising tone can show uncertainty; a steady tone shows confidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Pace:</strong> Speaking fast might mean excitement or anxiety; slowing down often shows importance</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When words and body language do not match, believe the body. It
              is much harder to fake.
            </p>
          </section>

          {/* Section 4: Asking Good Questions */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Power of Good Questions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Great communicators ask great questions. Questions show interest.
              They help you understand. They make others feel valued.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some questions open doors. Some questions close them:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Closed Questions (Get Short Answers)
                </h3>
                <p className="text-gray-600">
                  &quot;Did you like it?&quot; &rarr; &quot;Yes.&quot;<br />
                  &quot;Are you okay?&quot; &rarr; &quot;Fine.&quot;<br />
                  These have their place, but they do not start conversations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Open Questions (Invite Stories)
                </h3>
                <p className="text-gray-600">
                  &quot;What was the best part?&quot; &rarr; A story unfolds.<br />
                  &quot;How are you feeling about it?&quot; &rarr; Real thoughts emerge.<br />
                  &quot;What made you decide that?&quot; &rarr; You learn their thinking.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Powerful questions to try:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;Tell me more about that...&quot; (shows genuine interest)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;What do you mean by...?&quot; (shows you want to understand)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;How did that make you feel?&quot; (shows you care about their experience)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>&quot;What would help?&quot; (shows you want to support them)</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Making Others Feel Heard */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Making Others Feel Truly Heard
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Listening is not just staying quiet while someone talks. Real
              listening is active. Here is how to show someone you are truly
              hearing them:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Put away distractions:</strong> Your phone face-down says &quot;You matter more.&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Make eye contact:</strong> Not staring, but looking at them when they speak.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Nod and respond:</strong> Small acknowledgements like &quot;mm-hmm&quot; or &quot;I see&quot; show you are following.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Reflect back:</strong> &quot;So what you are saying is...&quot; shows you understood (or helps clarify if you did not).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Do not interrupt:</strong> Wait until they finish, even if you have something brilliant to say.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Remember later:</strong> Bringing up something they mentioned days ago shows you really listened.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When someone feels heard, they trust you more. They open up more.
              They want to hear what you have to say in return. Listening is
              the foundation of all good relationships.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Speech and Listening
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar dedicated several chapters to the power of words
              and the value of good listening:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;செவிக்குணவு இல்லாத போழ்து சிறிது<br />
              வயிற்றுக்கும் ஈயப் படும்.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;When the ear is not fed with learning,
              even a little food may be given to the stomach.&quot; (Kural 412)
            </p>
            <p className="text-gray-700 leading-relaxed">
              Thiruvalluvar placed learning through listening on the same level
              as food for survival. Just as the body needs food, the mind needs
              to listen and learn. Those who truly listen become wise. Those who
              only wait to speak remain forever limited to their own small world.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Listening is more important than speaking&mdash;people remember those who truly hear them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Words are only part of the message&mdash;pay attention to what is behind them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Body language and tone often reveal more than words&mdash;when they conflict, believe the body</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Good questions open doors&mdash;ask &quot;what&quot; and &quot;how&quot; instead of yes/no questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Show you are listening: put away distractions, make eye contact, reflect back what you hear</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about your last conversation with a friend or family member.
              Were you truly listening, or were you thinking about what you
              wanted to say next? What would change if you focused entirely
              on understanding them?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to become aware of how
              you listen.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/foundations/people/why-people-do"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Why People Do What They Do
          </Link>
          <Link
            href="/foundations/people/working-in-teams"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Working in Teams
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
