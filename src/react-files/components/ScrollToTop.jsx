import { useLayoutEffect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the window to the top on every client-side route change.
 * Uses manual scroll restoration so the browser does not re-apply the previous page's scroll position.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Force instant scroll behavior globally for route changes.
    document.documentElement.style.scrollBehavior = 'auto'
    document.body.style.scrollBehavior = 'auto'
  }, [])

  useLayoutEffect(() => {
    // Jump straight to the top (no smooth scroll), even if CSS attempts smooth scrolling.
    const jump = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    jump()
    const id = requestAnimationFrame(jump)
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}

export default ScrollToTop