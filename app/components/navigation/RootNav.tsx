'use client'

import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

import { Hamburger } from '@/app/components/ui/icon/Hamburger'

import { useIntersectionObserver } from '@/app/lib/hooks/useIntersectionObserver'

export const RootNav = () => {
  const { isIntersecting: isHeroIntersecting } = useIntersectionObserver({
    threshold: 0,
    elementId: 'section-hero',
  })
  const { isIntersecting: isLogoIntersecting } = useIntersectionObserver({
    threshold: 0.75,
    elementId: 'logo-image',
  })

  const [open, setOpen] = useState(false)

  return (
    <nav
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-32 px-64 py-16',
        {
          'bg-gray-1/90 text-almost-white': isHeroIntersecting,
          'bg-almost-white/90 text-gray-2': !isHeroIntersecting,
          'opacity-0': isHeroIntersecting === null,
          'opacity-100': isHeroIntersecting !== null,
        },
      )}
    >
      {/* ----- Hamburger Button ----- */}
      <button
        className="flex items-center gap-16"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Hamburger open={open} />
        <span className="text-12 transition-all duration-300 ease-in">
          MENU
        </span>
      </button>

      {/* ----- Greetings/Small Logo Link ----- */}
      <Link
        href="#"
        className={clsx(
          'absolute left-1/2 top-[2.2rem] -translate-x-1/2 font-zodiak text-24 transition-all duration-300 ease-in',
          {
            'opacity-0': isLogoIntersecting || isHeroIntersecting === null,
            'opacity-100': !isLogoIntersecting && isHeroIntersecting !== null,
          },
        )}
      >
        SURPRISE BLOOM
      </Link>
      <p
        className={clsx(
          'absolute left-1/2 top-[2.8rem] -translate-x-1/2 text-12 transition-all duration-300 ease-in',
          {
            'opacity-0': !isLogoIntersecting,
            'opacity-100': isLogoIntersecting,
          },
        )}
      >
        HELLO THERE! WE ARE
      </p>

      {/* ----- Actions ----- */}
      <div className="flex items-center gap-16">
        <span className="text-12 transition-all duration-300 ease-in">EN</span>
        <Link
          href="#"
          className={clsx(
            'px-24 py-12 text-12 ring-1 ring-inset transition-all duration-300 ease-in',
            {
              'ring-almost-white': isHeroIntersecting,
              'ring-gray-2': !isHeroIntersecting,
            },
          )}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  )
}
