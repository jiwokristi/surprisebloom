import Link from 'next/link'

export const Hero = () => {
  return (
    <section id="section-hero" className="h-screen bg-gray-1 px-32 py-48">
      <div className="mx-auto flex h-full max-w-[140rem] flex-col justify-between text-almost-white">
        <header className="mt-12">
          <h1 className="text-center font-zodiak text-98">
            <Link href="#" id="logo-image">
              SURPRISE BLOOM
            </Link>
          </h1>
        </header>
        <p className="w-[55rem] text-[2.2rem] leading-medium">
          Discover joy in every moment with Surprise Bloom. From unique plant
          bouquets to personalized packages, each surprise is a testament to the
          art of gifting.
        </p>
      </div>
    </section>
  )
}
