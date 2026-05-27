import { Link } from 'react-router-dom'
import '../../css/splash.css'

export default function Splash() {
  return (
    <a className="splash-screen" href="/onboarding">
      <div className="splash-center">
        <img className="splash-logo" src="/images/splash-logo.png" alt="집리셋 로고" />
        <p className="splash-brand">ZipReset</p>
      </div>
    </a>
  )
}
