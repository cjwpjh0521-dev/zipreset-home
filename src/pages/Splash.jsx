import { useEffect } from 'react'
import '../../css/splash.css'

export default function Splash() {
  useEffect(() => {
    const b = document.body
    b.style.background = '#FF8732'
    b.style.display = 'flex'
    b.style.justifyContent = 'center'
    b.style.alignItems = 'center'
    b.style.minHeight = '100vh'
    b.style.margin = '0'
    b.style.maxWidth = 'none'
    return () => { b.style.cssText = '' }
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
