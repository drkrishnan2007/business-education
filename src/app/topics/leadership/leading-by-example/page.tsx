import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading by Example - Business Wisdom',
  description: 'Actions speak louder than words. Learn why the most powerful way to lead is to become what you want others to be, with wisdom from Chanakya and Thiruvalluvar.',
};

export default function LeadingByExamplePage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/leadership" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; How to Lead
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 2 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Leading by Example
          </h1>
          <p className="text-xl text-gray-600">
            Your team will not rise to your words. They will fall to your actions.
            What you do matters infinitely more than what you say.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Why Actions Matter More */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Why Actions Speak Louder
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Everyone has seen this: a parent tells their child not to lie, then
              lies to avoid an inconvenient phone call. A manager preaches work-life
              balance, then sends emails at midnight expecting responses. A teacher
              demands respect, then mocks students in front of the class.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What happens? <strong>People believe what they see, not what they hear.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is human nature. We evolved to watch behaviour, because behaviour
              reveals truth. Words are easy. Actions cost something.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leader, your every action is watched and interpreted. People ask
              themselves: &quot;Do they really mean what they say?&quot; Your actions are
              the answer.
            </p>
          </section>

          {/* Section 2: The Hypocrisy Tax */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Hypocrisy Tax
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your actions do not match your words, you pay what we might call
              the &quot;hypocrisy tax.&quot; This tax is paid in lost credibility.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  First Offence
                </h3>
                <p className="text-gray-600">
                  People notice but give you the benefit of the doubt. &quot;Maybe
                  it was an exception.&quot;
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Second Offence
                </h3>
                <p className="text-gray-600">
                  People start to doubt. They listen to your words more skeptically.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Pattern Established
                </h3>
                <p className="text-gray-600">
                  People stop listening entirely. Your words become noise. They
                  only watch what you do.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Once credibility is lost, it takes years to rebuild&mdash;if it can
              be rebuilt at all. The hypocrisy tax is the most expensive tax a
              leader can pay.
            </p>
          </section>

          {/* Section 3: What Example Sets */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              What Your Example Really Sets
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your behaviour does not just communicate values. It <em>creates
              permission</em> for others to behave the same way.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you arrive late, you create permission for lateness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you cut corners, you create permission to cut corners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you blame others, you create a culture of blame</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>If you gossip, you signal that gossip is acceptable</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              But the opposite is equally true:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&bull;</span>
                <span>If you admit mistakes, you create safety for honesty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&bull;</span>
                <span>If you work hard, you inspire others to work hard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&bull;</span>
                <span>If you stay calm in crisis, you enable others to stay calm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#5b21b6]">&bull;</span>
                <span>If you respect everyone, you build a culture of respect</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You are not just setting an example. You are creating the unwritten
              rules that govern how everyone behaves.
            </p>
          </section>

          {/* Section 4: The Small Things */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Small Things Matter Most
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              People rarely witness your big decisions. They see the small daily
              behaviours. These small things reveal your true character:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Do you listen when junior people speak, or check your phone?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Do you say thank you to the cleaning staff?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Do you take the last piece of food, or offer it to others?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Do you follow the rules you set, or create exceptions for yourself?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Do you admit when you do not know something?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These tiny moments, repeated daily, shape how people see you. You
              cannot be a good leader in big moments if you are not a good leader
              in small ones.
            </p>
          </section>

          {/* Section 5: Going First */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              The Courage to Go First
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leading by example often means doing uncomfortable things first:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Admitting first:</strong> Being the first to say &quot;I was wrong&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Trying first:</strong> Attempting something new before asking others to</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Sacrificing first:</strong> Taking the pay cut or extra shift before asking the team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Learning first:</strong> Being willing to look foolish while learning</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When you go first, you show others it is safe to follow. You absorb
              the risk and uncertainty so they do not have to.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Example
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thiruvalluvar was clear about the importance of a leader&apos;s conduct:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;கடன்என்ப நல்லவை எல்லாம் கடன்அறிந்து<br />
              சான்றாண்மை மேற்கொள் பவர்க்கு&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;All good things are duty to those who
              understand duty and practise excellence.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya taught that the king&apos;s behaviour shapes the kingdom:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;यथा राजा तथा प्रजा।&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;As the king, so the people.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> A team takes on the character of its
              leader. If you want your team to be excellent, you must be excellent
              first. There is no other way.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>People believe what they see, not what they hear&mdash;actions define you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Hypocrisy destroys credibility faster than any mistake</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Your behaviour creates permission for others to behave the same way</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Small daily actions reveal character more than big decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>As Chanakya said: &quot;As the king, so the people&quot;&mdash;your team reflects you</span>
              </li>
            </ul>
          </section>

          {/* Exercise */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Practical Exercise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The Behaviour Audit:</strong> For one week, keep a private
              log of your daily behaviours. At the end of each day, ask yourself:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">1.</span>
                <span>What did I say I valued today?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">2.</span>
                <span>What did my actions actually show I valued?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">3.</span>
                <span>Where was there a gap between words and actions?</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Be honest&mdash;this is for your eyes only. The goal is awareness,
              not perfection. Once you see the gaps, you can work on closing them.
            </p>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about a leader whose actions did not match their words. How
              did it affect your trust in them? How did it affect the group&apos;s
              behaviour overall?
            </p>
            <p className="text-gray-600 text-sm italic">
              Use this memory as a warning sign. When you feel tempted to
              &quot;just this once&quot; break your own standards, remember how it felt
              to watch someone else do the same.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/leadership/what-leadership-means"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: What Leadership Really Means
          </Link>
          <Link
            href="/topics/leadership/building-trust"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Next: Building Trust
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
