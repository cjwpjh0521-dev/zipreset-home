import { useEffect } from 'react'
import '../../css/splash.css'

export default function Splash() {
  useEffect(() => {
    const h = document.documentElement
    const b = document.body
    h.style.setProperty('background', '#FF8732', 'important')
    b.style.setProperty('background', '#FF8732', 'important')
    b.style.setProperty('display', 'flex', 'important')
    b.style.setProperty('min-height', '100vh', 'important')
    b.style.setProperty('max-width', 'none', 'important')
    b.style.setProperty('margin', '0', 'important')
    b.style.justifyContent = 'center'
    b.style.alignItems = 'center'
    return () => { h.style.cssText = ''; b.style.cssText = '' }
  }, [])

  return (
    <a className="splash-screen" href="/onboarding">
      <div className="splash-center">
        <img className="splash-logo" src="/images/splash-logo.png" alt="집리셋 로고" />
        <p className="splash-brand">ZipReset</p>
      </div>
    </a>
  )
}
