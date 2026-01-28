import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gradient-warm">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#5b21b6] mb-4">
          Vasudhaiva Kutumbakam
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 italic mb-2">
          &quot;The world is one family&quot;
        </p>
        <p className="text-lg text-[#f97316] font-medium mb-8">
          Ancient wisdom meets modern business
        </p>

        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
          For thousands of years, Bharat was a centre of global trade and wisdom.
          Tamil merchants sailed to Rome. Chanakya wrote the world&apos;s first economics textbook.
          Our ancestors understood business deeply. Now it&apos;s time to reclaim that heritage
          and prepare for the opportunities ahead.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/topics/money" className="btn-primary text-lg px-8 py-4">
            Start Learning
          </Link>
          <Link
            href="/about"
            className="btn-secondary text-lg px-8 py-4"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Featured Topic */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl md:text-8xl">
              <span role="img" aria-label="money">💰</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-[#eab308] text-sm font-medium uppercase tracking-wide">
                Featured Topic
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-4 text-white">
                How Money Works
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Understand the basics of money, from its origins to how businesses use it today.
                Learn the timeless principles that Chanakya taught over 2,000 years ago.
              </p>
              <Link
                href="/topics/money"
                className="inline-block bg-white text-[#5b21b6] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-serif text-[#5b21b6] text-center mb-12">
          Why This Matters Now
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-serif text-xl text-[#5b21b6] mb-3">Global Opportunities</h3>
            <p className="text-gray-600">
              The UK-India FTA and EU-India trade deals are opening doors.
              Young people who understand both worlds will thrive.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-serif text-xl text-[#5b21b6] mb-3">Forgotten Heritage</h3>
            <p className="text-gray-600">
              Bharat once contributed 25% of world GDP. Our ancestors were master traders
              and economists. That wisdom is still relevant.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-serif text-xl text-[#5b21b6] mb-3">Plain Language</h3>
            <p className="text-gray-600">
              No jargon. No complicated theories. Just clear explanations that anyone
              can understand, backed by timeless principles.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="wisdom-box text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-[#5b21b6] italic">
            &quot;Wealth, properly employed, bears fruit. Wealth, improperly employed, bears no fruit.
            Therefore, wealth should be properly employed.&quot;
          </blockquote>
          <p className="mt-4 text-gray-600">
            — Chanakya, Arthashastra (4th century BCE)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16 text-center">
        <h2 className="text-3xl font-serif text-[#5b21b6] mb-4">
          Ready to Begin?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Start with our first topic: How Money Works. It takes about 15 minutes
          to complete the first lesson.
        </p>
        <Link href="/topics/money" className="btn-primary text-lg px-8 py-4">
          Start Your First Lesson
        </Link>
      </section>
    </div>
  );
}
