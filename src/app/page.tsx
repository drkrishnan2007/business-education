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

        <Link href="/about" className="btn-secondary text-lg px-8 py-4">
          Learn More
        </Link>
      </section>

      {/* Two Track Choice */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-serif text-[#5b21b6] text-center mb-4">
          Choose Your Path
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We recommend starting with Foundations to build core business understanding,
          then moving to Careers for professional skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Foundations Track */}
          <Link href="/foundations" className="card p-8 md:p-10 border-2 border-transparent hover:border-[#5b21b6] transition-colors block">
            <div className="text-5xl mb-4">🏛️</div>
            <span className="inline-block text-xs bg-[#5b21b6] text-white px-3 py-1 rounded-full mb-4">
              Recommended First
            </span>
            <h3 className="text-2xl font-serif text-[#5b21b6] mb-3">
              Foundations
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Business basics that everyone should know. Money, organisations, people,
              decisions, leadership, negotiation, and more. Ancient Bharatiya wisdom
              meets modern business concepts.
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>📚 8 topics · 45 lessons</p>
              <p>⏱️ ~10 hours total</p>
              <p>🧘 Deep integration of ancient wisdom</p>
            </div>
          </Link>

          {/* Careers Track */}
          <Link href="/careers" className="card p-8 md:p-10 border-2 border-transparent hover:border-[#f97316] transition-colors block">
            <div className="text-5xl mb-4">🚀</div>
            <span className="inline-block text-xs bg-[#f97316] text-white px-3 py-1 rounded-full mb-4">
              Professional Skills
            </span>
            <h3 className="text-2xl font-serif text-[#5b21b6] mb-3">
              Careers
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Soft skills that employers want but schools don&apos;t teach.
              Communication, problem-solving, teamwork, and more. Each lesson
              includes AI practice prompts to build real skills.
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>📚 11 topics · 46 lessons</p>
              <p>⏱️ ~12 hours total</p>
              <p>🤖 AI-powered practice prompts</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Why This Matters Now */}
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
    </div>
  );
}
