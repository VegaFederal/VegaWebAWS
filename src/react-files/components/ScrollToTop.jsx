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
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default ScrollToTop