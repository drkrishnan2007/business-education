import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helping Others Succeed - Business Wisdom',
  description: 'Discover why the best way to succeed is to help others succeed. Learn about sharing credit, the ripple effect of encouragement, with wisdom from Thirukkural on kindness.',
};

export default function HelpingOthersSucceedPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/people" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How People Work
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Helping Others Succeed
          </h1>
          <p className="text-xl text-gray-600">
            The best way to rise is to lift others.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: The Paradox of Success */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              A Strange Truth About Success
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most people think success is a competition. If someone else wins,
              you lose. If you help others, you are giving away your advantage.
              Hold on to everything you have.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This seems logical, but it is wrong. The most successful people
              in almost every field share a habit: they spend a lot of time
              helping others succeed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why? Because success is rarely a zero-sum game. When you help
              someone:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They remember you and want to help you back someday</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Others see you as someone worth knowing and trusting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You build skills and connections in the process of helping</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>The person you helped may create opportunities that benefit you too</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Think of success like a garden, not a pie. Helping others grow
              does not shrink your harvest&mdash;it often makes the whole garden
              more abundant.
            </p>
          </section>

          {/* Section 2: Sharing Credit */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Sharing Credit Makes You More Respected
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It might seem that if you share credit for success, you get less.
              Actually, the opposite is true. People who share credit are trusted
              and admired more than people who grab it all.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what happens when someone always takes credit:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>People stop wanting to work with them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Team members stop contributing their best ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Others secretly resent them and look for chances to criticise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Their reputation suffers even as they try to build it</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              And here is what happens when someone shares credit generously:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>People want to work with them on the next project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Team members give their best because they feel valued</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Others speak well of them and support them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>They become known as someone who brings out the best in others</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Strangely, the more credit you give away, the more comes back to
              you. People notice who made the team successful, even if that
              person points at everyone else.
            </p>
          </section>

          {/* Section 3: Teaching Deepens Learning */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Teaching Others Deepens Your Own Understanding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have you ever tried to explain something and realised you did not
              understand it as well as you thought? That is because explaining
              requires deeper understanding than just knowing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you teach someone:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You have to organise your thoughts clearly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You discover gaps in your own knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Their questions make you think in new ways</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>You remember the material better because you explained it</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is why the best students are often those who help their
              classmates. It is not just generosity&mdash;it is smart learning.
              Teaching is one of the best ways to master something.
            </p>
            <p className="text-gray-700 leading-relaxed">
              So when someone asks you for help, see it as an opportunity. You
              are not just helping them. You are strengthening your own skills.
            </p>
          </section>

          {/* Section 4: Building Up vs Tearing Down */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Building People Up vs Tearing Them Down
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every interaction is a choice. You can build someone up or tear
              them down. You can leave them feeling better or worse about
              themselves.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some ways people tear others down (sometimes without meaning to):
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Mocking someone&apos;s mistake in front of others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Pointing out flaws without acknowledging strengths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Comparing them unfavourably to others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Dismissing their ideas without really considering them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Gossiping or speaking negatively behind their back</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ways to build people up:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Noticing and mentioning what they did well</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Giving feedback privately, praise publicly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Asking for their opinion and really listening</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Expressing confidence in their ability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Speaking well of them to others</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The person who builds others up becomes someone everyone wants
              around. The person who tears others down becomes someone everyone
              avoids.
            </p>
          </section>

          {/* Section 5: The Ripple Effect */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Ripple Effect of Encouragement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is something remarkable: when you encourage someone, the
              effect does not stop with them. Like a stone dropped in water,
              it ripples outward.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The person you encourage feels better. They are more likely to
              encourage someone else. That person does the same. Soon, your
              single act of kindness has touched dozens of people you will
              never meet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The opposite is also true. Unkindness ripples too. The person you
              criticise harshly goes home and snaps at their family. The cycle
              continues.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about the people who encouraged you in your life. A teacher
              who believed in you. A friend who said you could do it. A family
              member who noticed your effort. Those moments might have changed
              your whole path.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You have the power to be that person for others. Every day, you
              can choose to start positive ripples instead of negative ones.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom: Thirukkural on Kindness
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar dedicated Chapter 8 to &quot;அன்புடைமை&quot; (having love
              and kindness), understanding that generosity is the foundation
              of a good life:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-4 border-l-4 border-[#eab308] pl-4">
              &quot;அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார்<br />
              என்பும் உரியர் பிறர்க்கு.&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Those without love keep everything for
              themselves. Those with love would give even their bones for
              others.&quot; (Kural 72)
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is not about giving away everything you have. It is about
              having a generous spirit. Those who approach life asking &quot;How can
              I help?&quot; rather than &quot;What can I get?&quot; find that life gives back
              more than they could ever take.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Helping others succeed often leads to your own success&mdash;it builds relationships and opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Sharing credit makes you more respected, not less&mdash;people want to work with generous leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Teaching others deepens your own understanding&mdash;explaining forces you to truly know</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Every interaction is a choice to build up or tear down&mdash;choose to build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Encouragement ripples outward&mdash;your kindness touches people you will never meet</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of someone who helped you when they did not have to. A
              teacher, friend, or family member who encouraged you or taught
              you something. How did their help affect your path? Is there
              someone you could do the same for now?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to notice the chain of
              help and consider extending it.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/people/handling-conflict"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Handling Conflict
          </Link>
          <Link
            href="/topics/people"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to Topic Overview
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
