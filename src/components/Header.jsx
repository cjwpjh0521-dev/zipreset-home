import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="logo" style={{ gap: '3px' }}>
        <span className="logo-txt" style={{ fontSize: '15px' }}>ZIP</span>
        <img src="/images/logo-r-index.svg" alt="R" className="logo-r-img" style={{ width: '13px', height: '16px', marginBottom: '1px' }} />
        <span className="logo-txt" style={{ fontSize: '15px' }}>ESET</span>
      </div>
      <div className="header-icons">
        <img src="/images/icon-cart-index.svg" alt="장바구니" className="header-icon" />
        <Link to="/search"><img src="/images/icon-search-index.svg" alt="검색" className="header-icon" /></Link>
        <img src="/images/icon-bell-index.svg" alt="알림" className="header-icon" />
      </div>
    </header>
  )
}