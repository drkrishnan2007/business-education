import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spreading the Word - Business Wisdom',
  description: 'The best product in the world is worthless if nobody knows it exists. But you do not need to shout—you need to reach the right ears.',
};

export default function SpreadingTheWordPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics/marketing" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Marketing Fundamentals
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium uppercase tracking-wide">
            Lesson 5 of 5
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Spreading the Word
          </h1>
          <p className="text-xl text-gray-600">
            The best product in the world is worthless if nobody knows it exists.
            But you do not need to shout&mdash;you need to reach the right ears.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {/* Section 1: Channels */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Channels: Where Your Audience Already Is
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A common mistake is trying to drag people to where you are. The
              smarter approach is to go where they already are.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of it like fishing: you go where the fish are, you do not
              expect the fish to come to your living room.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Where might your audience be?</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Physical locations:</strong> Markets, temples, community centres, schools, offices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Social media:</strong> Facebook, Instagram, YouTube, LinkedIn, Twitter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Messaging apps:</strong> WhatsApp groups, Telegram channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Search engines:</strong> Google, when people search for solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Events:</strong> Weddings, festivals, local fairs, professional conferences</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The key question: <em>Where does your ideal customer spend time
              when they are thinking about the problem you solve?</em>
            </p>
          </section>

          {/* Section 2: Word of Mouth */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Word of Mouth: The Original Marketing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before there were advertisements, social media, or even printed
              flyers, there was word of mouth. One person tells another, who tells
              another. It is the oldest form of marketing—and still the most
              powerful.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why is word of mouth so effective?
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Trust:</strong> People trust recommendations from friends and family more than any advertisement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Relevance:</strong> People recommend things to others who would actually benefit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Free:</strong> It costs nothing—you do not pay for genuine recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span><strong>Sustainable:</strong> Happy customers keep recommending, year after year</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              How do you get word of mouth?
            </p>
            <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg mb-4">
              <p className="text-lg font-serif text-[#5b21b6] text-center">
                Be so good that people cannot help but talk about you.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              There is no trick. Delight your customers. Solve their problems
              better than they expected. Go slightly beyond what they paid for.
              They will tell others.
            </p>
          </section>

          {/* Section 3: Written Word */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Written Word: Content That Helps
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the best ways to attract customers is to help them <em>before</em>
              they become customers. This is the idea behind &quot;content marketing&quot;—
              sharing useful information freely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Examples:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A tutor who writes study tips that help students before they even enrol</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A plumber who posts videos explaining how to fix common leaks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A financial advisor who shares simple budgeting guides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A cook who shares recipes, building an audience who then buys her spice mixes</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This might seem counterintuitive: <em>Why give away valuable information
              for free?</em>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Because it builds trust. It demonstrates expertise. It helps people
              who may not buy from you today but will remember you tomorrow. And
              some problems require more than information—they require your actual
              service. The content brings them to you when they are ready.
            </p>
          </section>

          {/* Section 4: Social Proof */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Social Proof: Let Others Speak for You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you say you are good, it sounds like boasting. When others say
              you are good, it sounds like the truth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Types of social proof:</strong>
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Testimonials
                </h3>
                <p className="text-gray-600">
                  Written or video statements from happy customers explaining how
                  you helped them. Real names and photos add credibility.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Reviews and Ratings
                </h3>
                <p className="text-gray-600">
                  Star ratings on Google, Facebook, or industry-specific platforms.
                  Many people will not buy without checking reviews first.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Case Studies
                </h3>
                <p className="text-gray-600">
                  Detailed stories of how you solved a specific problem for a
                  customer, including the before, the process, and the results.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Numbers and Milestones
                </h3>
                <p className="text-gray-600">
                  &quot;500+ students taught&quot; or &quot;10 years in business&quot;—numbers
                  provide objective proof of experience and scale.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ask happy customers for reviews. Make it easy—send them a direct
              link. Most people are happy to help if you simply ask.
            </p>
          </section>

          {/* Section 5: Paid vs Earned vs Owned */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Paid vs Earned vs Owned
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are three ways to get your message out:
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Paid Media
                </h3>
                <p className="text-gray-600 mb-2">
                  You pay to reach people: advertisements, sponsored posts, billboards,
                  Google ads.
                </p>
                <p className="text-gray-600 italic">
                  Pros: Fast results, controllable. Cons: Expensive, stops when you
                  stop paying.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Earned Media
                </h3>
                <p className="text-gray-600 mb-2">
                  Others talk about you: word of mouth, press coverage, viral shares,
                  reviews.
                </p>
                <p className="text-gray-600 italic">
                  Pros: Free, most trusted. Cons: You cannot control it, takes time
                  to build.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#f5f3ff] to-[#fef3e2] p-4 rounded-lg">
                <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                  Owned Media
                </h3>
                <p className="text-gray-600 mb-2">
                  Channels you control: your website, email list, social media
                  profiles, blog.
                </p>
                <p className="text-gray-600 italic">
                  Pros: You own it, builds over time. Cons: Takes effort to build
                  audience.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The strongest businesses use all three, but they prioritise owned
              and earned media. Paid media can accelerate growth, but relying on
              it alone is expensive and fragile.
            </p>
          </section>

          {/* Section 6: Starting Small */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Starting Small: Choose One Channel Well
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A common mistake is trying to be everywhere at once: post on every
              social platform, run advertisements everywhere, attend every event.
              This spreads you thin and produces mediocre results everywhere.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead, start with one channel and do it well:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Choose where your ideal customers are most active</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Focus your energy there</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Learn what works through experimentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>Only expand when you have mastered the first channel</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For example:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A local tailor might focus entirely on WhatsApp and word of mouth in the neighbourhood</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A tutor might build presence on YouTube with educational videos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">&bull;</span>
                <span>A photographer might focus on Instagram to showcase their work</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Better to be excellent in one place than mediocre in ten.
            </p>
          </section>

          {/* Wisdom Section */}
          <section className="wisdom-box mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Ancient Wisdom on Communication
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chanakya understood the importance of strategic communication and
              reaching the right people:
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;उपायज्ञो अपि च संदेशो न मूर्खाय समर्पयेत्।<br />
              न पण्डिताय वा वाच्यो वचनं योग्यपात्रतः॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;A message, however well-crafted, should
              not be wasted on the wrong audience. Speak to those who can receive
              and act upon your words.&quot;
            </p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2 border-l-4 border-[#eab308] pl-4">
              &quot;यथा हि एकेन चक्रेण न रथस्य गतिर्भवेत्।<br />
              एवं परुषकारेण विना दैवं न सिध्यति॥&quot;
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Meaning:</strong> &quot;Just as a chariot cannot move on one
              wheel alone, destiny alone without effort accomplishes nothing.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>In modern terms:</strong> Do not broadcast your message
              randomly—aim it at those who will value it. And do not wait for
              customers to find you by luck; you must make effort to reach them.
              Great products and great communication work together, like two wheels
              of a chariot.
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="p-8 mb-8 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white shadow-lg">
            <h2 className="text-2xl font-serif mb-4 !text-white" style={{ color: 'white' }}>Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Go where your audience already is—do not expect them to find you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Word of mouth is the most powerful marketing—be so good people cannot help but talk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Content that helps builds trust before the sale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Let others speak for you through testimonials, reviews, and case studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#eab308]">&#10003;</span>
                <span>Start with one channel and do it excellently before expanding</span>
              </li>
            </ul>
          </section>

          {/* Reflection */}
          <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
              Reflection Question
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you could only use one method to spread the word about a business
              or product you believe in, which would you choose? Word of mouth?
              Social media? Helpful content? Something else? Why that one above
              all others?
            </p>
            <p className="text-gray-600 text-sm italic">
              There is no right answer. The point is to think carefully about
              what would work best for your specific audience and situation.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/topics/marketing/building-trust"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Building Trust and Reputation
          </Link>
          <Link
            href="/topics/marketing"
            className="text-[#5b21b6] hover:text-[#7c3aed] flex items-center gap-2"
          >
            Back to Marketing Fundamentals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
