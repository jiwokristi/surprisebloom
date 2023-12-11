'use client'

import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

import { Hamburger } from '../ui/button/Hamburger'

import { useIntersectionObserver } from '@/app/lib/hooks/useIntersectionObserver'

export const RootNav = () => {
  const { isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
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
        'fixed left-32 right-32 top-32 flex items-center justify-between gap-32',
        {
          'text-almost-white': isIntersecting,
          'text-gray-2': !isIntersecting,
        },
      )}
    >
      <button
        className="flex items-center gap-16"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Hamburger open={open} />
        <span className="text-12 transition-all duration-200 ease-in">
          MENU
        </span>
      </button>
      <Link
        href="#"
        className={clsx(
          'absolute left-1/2 top-8 -translate-x-1/2 font-zodiak text-24 transition-all duration-200 ease-in',
          {
            'opacity-0': isLogoIntersecting,
            'opacity-100': !isLogoIntersecting,
          },
        )}
      >
        SURPRISE BLOOM
      </Link>
      <p
        className={clsx(
          'absolute left-1/2 top-8 -translate-x-1/2 text-12 transition-all duration-200 ease-in',
          {
            'opacity-0': !isLogoIntersecting,
            'opacity-100': isLogoIntersecting,
          },
        )}
      >
        HELLO THERE! WE ARE
      </p>
      <div className="flex items-center gap-16">
        <span className="text-12 transition-all duration-200 ease-in">EN</span>
        <Link
          id="login-link"
          href="#"
          className={clsx(
            'px-24 py-12 text-12 ring-1 ring-inset transition-all duration-200 ease-in',
            {
              'ring-almost-white': isIntersecting,
              'ring-gray-2': !isIntersecting,
            },
          )}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  )
}
