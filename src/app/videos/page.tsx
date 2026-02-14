import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos - Business Wisdom',
  description: 'Watch our introduction to business education in English, Hindi, and Tamil.',
};

const videos = [
  {
    id: 'XZU40oOpfJQ',
    language: 'English',
    title: "India's 2,000-Year Trade Secret the World Forgot",
  },
  {
    id: '6dIKrJdJuYw',
    language: 'Hindi',
    title: 'भारत का 2,000 वर्ष पुराना व्यापार रहस्य जो विश्व भूल गया',
  },
  {
    id: 'mrHST3HC3dI',
    language: 'Tamil',
    title: 'உலகம் மறந்த இந்தியாவின் 2,000 ஆண்டு வர்த்தக ரகசியம்',
  },
];

export default function VideosPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Watch Our Videos
          </h1>
          <p className="text-xl text-gray-600">
            Introduction to business education — available in English, Hindi, and Tamil
          </p>
        </header>

        {/* Video Cards */}
        <div className="space-y-8">
          {videos.map((video) => (
            <section key={video.language} className="card p-6">
              <h2 className="text-xl font-serif text-[#5b21b6] mb-4">
                {video.language}: {video.title}
              </h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`${video.language} — ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          ))}
        </div>

        {/* Subscribe CTA */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
            Subscribe for More
          </h2>
          <p className="text-gray-600 mb-6">
            New lessons are released regularly — subscribe to stay updated
          </p>
          <a
            href="https://www.youtube.com/@AryashGuru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Subscribe on YouTube
          </a>
        </section>
      </div>
    </div>
  );
}
