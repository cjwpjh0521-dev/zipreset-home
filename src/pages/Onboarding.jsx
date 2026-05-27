import { useNavigate, Link } from 'react-router-dom'
import '../../css/onboarding.css'

export default function Onboarding() {
  const navigate = useNavigate()

  return (
    <div className="screen" onClick={() => { window.location.href = '/signup-guide' }}>

      <div className="bg-layer">
        <img src="/images/onboarding-bg.png" alt="인테리어 배경" />
      </div>
      <div className="overlay"></div>

      <div className="header-icons">
        <div onClick={e => e.stopPropagation()}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 5H6L8.1 14.2C8.2 14.68 8.62 15 9.11 15H17.8C18.25 15 18.64 14.7 18.75 14.26L20 9H7.2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 20.2C10.6627 20.2 11.2 19.6627 11.2 19C11.2 18.3373 10.6627 17.8 10 17.8C9.33726 17.8 8.8 18.3373 8.8 19C8.8 19.6627 9.33726 20.2 10 20.2Z" fill="white"/>
            <path d="M17 20.2C17.6627 20.2 18.2 19.6627 18.2 19C18.2 18.3373 17.6627 17.8 17 17.8C16.3373 17.8 15.8 18.3373 15.8 19C15.8 19.6627 16.3373 20.2 17 20.2Z" fill="white"/>
          </svg>
        </div>
        <a href="#" onClick={e => e.stopPropagation()}>
          <svg className="icon-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
        </a>
        <a href="#" onClick={e => e.stopPropagation()}>
          <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        </a>
      </div>

      <div className="title-box">
        <h1 className="brand">ZipReset</h1>
        <div className="text-content">
          <p className="tagline">Clear. Reset.<br />Live better</p>
          <p className="subtitle">남의 집 온라인 집들이 그만,<br />이제 당신의 방을 진짜 집으로!</p>
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="nav-inner">
          <div className="nav-item" onClick={e => e.stopPropagation()}>
            <img src="/images/nav-icon-6097.svg" alt="카테고리" style={{width:'14px',height:'14px',objectFit:'contain'}} />
            <span>카테고리</span>
          </div>
          <div className="nav-item" onClick={e => e.stopPropagation()}>
            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            <span>비움</span>
          </div>
          <div className="nav-home-wrap" onClick={e => e.stopPropagation()}>
            <Link to="/home" className="nav-home-btn">
              <img src="/images/icon-home-nav.png" alt="홈" style={{width:'26px',height:'23px',objectFit:'contain'}} />
            </Link>
            <span>홈</span>
          </div>
          <div className="nav-item" onClick={e => e.stopPropagation()}>
            <img src="/images/nav-icon-6091.svg" alt="채움" style={{width:'14px',height:'14px',objectFit:'contain'}} />
            <span>채움</span>
          </div>
          <div className="nav-item" onClick={e => e.stopPropagation()}>
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>마이</span>
          </div>
        </div>
      </nav>

    </div>
  )
}
