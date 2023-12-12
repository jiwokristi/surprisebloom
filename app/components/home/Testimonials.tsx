'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Testimonials = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#animation-container',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#animation-container',
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#animation-container',
        start: 'top 15%',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    tl.fromTo(
      '#animation-item-1',
      { yPercent: 100 },
      { yPercent: 0, duration: 1 },
    )
    tl2.fromTo(
      '#animation-item-2',
      { yPercent: 100 },
      { yPercent: 10, duration: 1 },
      '<',
    )
    tl3.fromTo(
      '#animation-item-3',
      { yPercent: 100 },
      { yPercent: 20, duration: 1 },
      '<',
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true)
      })
    }
  }, [])

  return (
    <section
      id="section-testimonials"
      className="mt-128 h-[60rem] overflow-hidden border-t border-gray-2/30 pb-128 pt-48"
    >
      <div
        id="animation-container"
        className="relative flex h-full justify-between overflow-hidden"
      >
        {/* ----- Left Content/Testimonials ----- */}
        <div
          id="animation-item-1"
          className="absolute bottom-0 left-0 h-full w-1/2 bg-brown-1"
        ></div>
        <div
          id="animation-item-2"
          className="absolute bottom-0 left-0 h-full w-1/2 bg-brown-2"
        ></div>
        <div
          id="animation-item-3"
          className="absolute bottom-0 left-0 h-full w-1/2 bg-brown-3"
        ></div>

        {/* ----- Right Content/Heading ----- */}
        <div className="absolute right-0 top-0 h-full">
          <header className="mb-48 max-w-fit">
            <h2 className="font-zodiak-light text-44 leading-medium">
              HEARTFELT
              <br />
              <span className="font-general-sans">MOMENTS</span>
            </h2>
          </header>
          <p className="font-general-sans-medium text-14 leading-paragraph">
            Step into the world of heartfelt moments as shared by our cherished
            customers.
          </p>
        </div>
      </div>
    </section>
  )
}
