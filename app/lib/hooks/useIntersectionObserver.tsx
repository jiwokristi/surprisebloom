'use client'

import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = ({
  threshold,
  elementId,
}: {
  threshold: number
  elementId?: string
}) => {
  const elementRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  const intersectionHandler: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
      } else {
        setIsIntersecting(false)
      }
    })
  }

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold,
    }
    const currentElement =
      elementRef.current || document.getElementById(elementId as string)
    const observer = new IntersectionObserver(intersectionHandler, options)

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, elementId])

  return { ref: elementRef, isIntersecting }
}
