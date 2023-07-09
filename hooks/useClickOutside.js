import { useEffect } from 'react'

export default function useClickOutside(targetRef, closeMenu) {
  useEffect(() => {
    const handler = (e) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(e.target) &&
        !e.target.closest('.optionBtn')
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => document.removeEventListener('mousedown', handler)
  }, [])
}
