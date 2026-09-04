// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          فلك
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          خرائط فلكية دقيقة + استشارات متخصصة
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/tools/natal"
            className="px-6 py-3 bg-cosmic-600 hover:bg-cosmic-700 rounded-lg transition"
          >
            احسب خريطتك مجاناً
          </a>
          <a
            href="/book-session"
            className="px-6 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white rounded-lg transition"
          >
            احجز جلسة
          </a>
        </div>
      </div>
    </main>
  );
}
