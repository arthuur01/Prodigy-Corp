import { SplineSceneBasic } from "./components/splinescene";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-black">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SplineSceneBasic />
        </div>
      </section>

      
      {/* Seção: Como agendar seu teste */}
      <section className="bg-gray-200 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              How to Schedule Your Trial at Prodigy
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Follow these simple steps to book your personalized prosthetics trial experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 flex flex-col min-h-[320px] md:min-h-[360px]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-black">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 15H5V10h14v9ZM5 8V6h14v2H5Z"/>
              </svg>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Choose a product line</h3>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Select the prosthetics category that best matches your needs (arms or legs).
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 flex flex-col min-h-[320px] md:min-h-[360px]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-black">
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7-5h-2V1h-2v2H9V1H7v2H5a2 2 0 0 0-2 2v3h18V5a2 2 0 0 0-2-2ZM3 21a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3v12Z"/>
              </svg>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Book your appointment</h3>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Pick an available date and time for an in-person or virtual session.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 flex flex-col min-h-[320px] md:min-h-[360px]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-black">
                <path d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1H5a2 2 0 0 1-2-2V5Zm8 1V5H5v10h2V8a2 2 0 0 1 2-2h2Zm-2 4h10v2H9v-2Zm0 4h10v2H9v-2Z"/>
              </svg>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Share measurements</h3>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Provide basic measurements and preferences so we can prepare your trial.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 flex flex-col min-h-[320px] md:min-h-[360px]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-black">
                <path d="M20.285 6.709 9 18l-5.285-5.29 1.41-1.41L9 15.172l9.875-9.873 1.41 1.41Z"/>
              </svg>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Confirm and attend</h3>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Receive confirmation and attend your tailored trial with our specialists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
      
  );
}