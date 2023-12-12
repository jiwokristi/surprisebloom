import Link from 'next/link'

export const CallToAction = () => {
  return (
    <section
      id="section-call-to-action"
      className="mt-48 bg-brown-3 px-32 py-128"
    >
      <div className="mx-auto w-3/5 text-center text-almost-white">
        <header className="mb-48">
          <span className="mb-48 inline-block text-16">OUR SERVICES</span>
          <h2 className="font-zodiak-light text-36 leading-medium">
            A UNIQUE AND PERSONALIZED
            <br />
            <span className="font-general-sans">GIFTING EXPERIENCE</span>
          </h2>
        </header>
        <p className="mb-48 font-general-sans-medium text-14 leading-paragraph">
          Our devoted team meticulously crafts moments of joy with unwavering
          dedication. From careful planning to personalized touches, we ensure
          each gift embodies the spirit of thoughtful surprises. Our commitment
          to excellence guarantees that every delivery is a testament to the
          care and creativity we pour into making your moments unforgettable.
        </p>
        <Link
          href="#"
          className="inline-block px-24 py-12 text-12 ring-1 ring-inset ring-almost-white transition-all duration-200 ease-in"
        >
          VIEW SERVICES
        </Link>
      </div>
    </section>
  )
}
