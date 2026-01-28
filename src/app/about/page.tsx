import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Business Wisdom',
  description: 'Our mission: preparing young people for global opportunities by bridging ancient Bharatiya wisdom with modern business concepts.',
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            About This Resource
          </h1>
          <p className="text-xl text-gray-600">
            Bridging ancient wisdom with modern opportunity
          </p>
        </header>

        {/* Mission */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are preparing young people for global opportunities. The world is changing.
            New trade agreements between the UK and India, and between the EU and India,
            are creating pathways that did not exist before.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Those who understand both Eastern wisdom and Western business practices
            will be uniquely positioned to succeed. This resource helps bridge that gap,
            starting with the fundamentals anyone can understand.
          </p>
        </section>

        {/* Why Now */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why Now?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The UK-India Free Trade Agreement is being finalised. The EU-India trade deal
              is in progress. These are not abstract policy changes—they represent real
              opportunities for young people who are prepared.
            </p>
            <p>
              But preparation means more than technical skills. It means understanding
              how business works, how money flows, how decisions get made, and how
              to lead with integrity. These fundamentals have not changed in thousands
              of years, even as the world has transformed.
            </p>
          </div>
        </section>

        {/* Forgotten Heritage */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">The Forgotten Heritage</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At its peak, Bharat contributed 25% of the world&apos;s GDP. Tamil merchants
              traded with Rome, their coins found across the Mediterranean. The Chola navy
              controlled trade routes from Indonesia to Egypt.
            </p>
            <p>
              <strong>Chanakya</strong> (also known as Kautilya), adviser to Emperor
              Chandragupta Maurya, wrote the Arthashastra over 2,300 years ago—the
              world&apos;s first comprehensive textbook on economics, governance, and
              statecraft. His principles on wealth creation, ethical trade, and
              prosperity remain remarkably relevant today.
            </p>
            <p>
              <strong>Thiruvalluvar</strong>, the celebrated Tamil poet and philosopher,
              composed the Thirukkural—1,330 couplets covering ethics, governance, and
              love. Written around 2,000 years ago, it remains one of the most translated
              works in the world, offering timeless wisdom on character and conduct.
            </p>
            <p>
              <strong>Avvaiyar</strong>, the revered Tamil poetess, wrote simple yet
              profound verses that have been taught to children for over a thousand years.
              Her works like Aathichudi and Konrai Venthan pack deep wisdom into
              memorable phrases that guide everyday life.
            </p>
            <p>
              This heritage was disrupted, not lost. Now is the time to reconnect with
              these roots while embracing modern methods and global opportunities.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-6">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="wisdom-box">
              <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                Knowledge Shared Multiplies
              </h3>
              <p className="text-gray-600">
                Unlike physical goods, knowledge grows when shared. Teaching others
                strengthens our own understanding and builds communities.
              </p>
            </div>

            <div className="wisdom-box">
              <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                Prosperity is Honourable
              </h3>
              <p className="text-gray-600">
                Lakshmi, the goddess of wealth, represents righteous prosperity.
                Earning money through ethical means and using it wisely is a virtue,
                not something to apologise for.
              </p>
            </div>

            <div className="wisdom-box">
              <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                The World is One Family
              </h3>
              <p className="text-gray-600">
                Vasudhaiva Kutumbakam reminds us that borders are lines on maps.
                Business, done well, connects people and creates shared prosperity.
              </p>
            </div>

            <div className="wisdom-box">
              <h3 className="font-serif text-lg text-[#5b21b6] mb-2">
                Wisdom for All
              </h3>
              <p className="text-gray-600">
                These teachings should not be locked away in universities or expensive
                courses. Everyone deserves access to the knowledge that builds prosperity.
              </p>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">About the Author</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            This resource is created by <strong>Dr Krishnan Pasupathi</strong>, a doctor
            and business partner. Having worked at the intersection of service and
            enterprise, he understands that good business and ethical practice are not
            opposites—they strengthen each other.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            His goal is to make business and financial literacy accessible to everyone,
            especially young people preparing for a globalised future.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="card p-8 mb-8 border-l-4 border-[#f97316]">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Important Notice</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>This is educational content, not financial advice.</strong>
            </p>
            <p>
              The information provided here is for learning purposes. Before making any
              financial decisions, you should consult with qualified professionals who
              understand your specific situation.
            </p>
            <p>
              We aim to teach principles and concepts, not to recommend specific investments,
              business strategies, or financial products.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-600 mb-6">
            Begin with our first topic: How Money Works
          </p>
          <Link href="/topics/money" className="btn-primary">
            Start Your Journey
          </Link>
        </section>
      </div>
    </div>
  );
}
