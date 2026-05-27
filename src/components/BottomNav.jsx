import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-inner">
        <a className="nav-item" href="/category">
          <img src="/images/idx-nav-cate.svg" alt="카테고리" className="nav-img-icon" />
          <span>카테고리</span>
        </a>
        <a className="nav-item" href="/buyout">
          <svg viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
          <span>비움</span>
        </a>
        <div className="nav-home-wrap nav-home-active" style={{ pointerEvents: 'none', marginTop: '-65px' }}>
          <div className="nav-home-btn" style={{ pointerEvents: 'none' }}>
            <svg viewBox="0 0 24 24" fill="white" style={{ width: '22px', height: '19px' }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
        </div>
        <a className="nav-item" href="/furniture-category" style={{ position: 'relative', zIndex: 10 }}>
          <img src="/images/idx-nav-chaeum2.svg" alt="채움" className="nav-img-icon" />
          <span>채움</span>
        </a>
        <a className="nav-item" href="/mypage" style={{ position: 'relative', zIndex: 10 }}>
          <svg viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>마이</span>
        </a>
      </div>
    </nav>
  )
}