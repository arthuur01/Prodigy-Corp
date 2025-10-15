export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <video
          className="w-full h-[100vh] object-cover block opacity-70"
          src="/prosthetics_main_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"
        />
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-10 sm:pb-14 md:pb-20 lg:pb-24">
          <div className="px-6 text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Discover our new line of Prodigy prosthetics
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl">
              Transform your everyday with advanced, lightweight,
              <br className="hidden sm:block" />
              and custom-fit prosthetics designed for comfort, performance, and confidence.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white text-black text-sm sm:text-base font-medium hover:bg-white/90 transition-colors"
              >
                Learn more
              </a>
              <a
                href="#buy-now"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
              >
                Buy the new prosthetics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cards de Produtos */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 - Braços */}
            <article className="relative overflow-hidden rounded-2xl shadow-md bg-white">
              <div className="relative h-[560px] sm:h-[660px]">
                <img
                  src="/prosthetic_model_card_1.jpg"
                  alt="Prodigy arm prosthetic model"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end items-center text-center">
                  <p className="text-white/80 text-lg sm:text-xl">Prodigy Armline</p>
                  <h3 className="mt-1 text-white text-4xl sm:text-5xl font-semibold">
                    Vanguard Arms
                  </h3>
                  <p className="mt-2 text-white/90 text-xl sm:text-2xl">
                    Precision that follows every move.
                  </p>
                  <p className="mt-2 text-white/80 text-base sm:text-lg max-w-prose">
                    Lightweight, adaptive arm prosthetics with a comfortable fit.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#learn-more-arms"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-white text-black text-lg font-medium hover:bg-white/90 transition-colors"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2 - Pernas */}
            <article className="relative overflow-hidden rounded-2xl shadow-md bg-white">
              <div className="relative h-[560px] sm:h-[660px]">
                <img
                  src="/prosthetic_model_card_2.jpg"
                  alt="Prodigy leg prosthetic model"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end items-center text-center">
                  <p className="text-white/80 text-lg sm:text-xl">Prodigy Legline</p>
                  <h3 className="mt-1 text-white text-4xl sm:text-5xl font-semibold">
                    Horizon Legs
                  </h3>
                  <p className="mt-2 text-white/90 text-xl sm:text-2xl">
                    Strength and balance to go further.
                  </p>
                  <p className="mt-2 text-white/80 text-base sm:text-lg max-w-prose">
                    Stable, responsive leg prosthetics built for everyday life.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#learn-more-legs"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-white text-black text-lg font-medium hover:bg-white/90 transition-colors"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}