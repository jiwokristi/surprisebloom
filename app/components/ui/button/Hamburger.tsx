'use client'

import clsx from 'clsx'

import { useIntersectionObserver } from '@/app/lib/hooks/useIntersectionObserver'

interface HamburgerProps extends React.ComponentProps<'button'> {
  open: boolean
}

export const Hamburger = ({ open, ...props }: HamburgerProps) => {
  const { isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    elementId: 'section-hero',
  })

  return (
    <button
      type="button"
      className={clsx(
        'relative z-50 h-24 w-24 cursor-pointer transition-all duration-200 ease-in',
        {
          'rotate-0': !open,
          'rotate-90': open,
        },
      )}
      {...props}
    >
      <span
        className={clsx(
          'absolute left-0 top-0 h-2 w-24 transition-all duration-200 ease-in',
          {
            'translate-y-2 rotate-0 bg-almost-white': !open && isIntersecting,
            'translate-y-8 rotate-45 bg-almost-white': open && isIntersecting,
            'translate-y-2 rotate-0 bg-gray-2': !open && !isIntersecting,
            'translate-y-8 rotate-45 bg-gray-2': open && !isIntersecting,
          },
        )}
      >
        &nbsp;
      </span>
      <span
        className={clsx('absolute left-0 top-0 h-2 w-24 translate-y-[1rem]', {
          hidden: open,
          'bg-almost-white': !open && isIntersecting,
          'bg-gray-2': !open && !isIntersecting,
        })}
      >
        &nbsp;
      </span>
      <span
        className={clsx(
          'absolute left-0 top-0 h-2 w-24 transition-all duration-200 ease-in',
          {
            'translate-y-[1.8rem] rotate-0 bg-almost-white':
              !open && isIntersecting,
            'translate-y-8 -rotate-45 bg-almost-white': open && isIntersecting,
            'translate-y-[1.8rem] rotate-0 bg-gray-2': !open && !isIntersecting,
            'translate-y-8 -rotate-45 bg-gray-2': open && !isIntersecting,
          },
        )}
      >
        &nbsp;
      </span>
    </button>
  )
}
