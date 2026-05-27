import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/mypage.css'

const orderMenus = ['주문·배송 내역', '취소·반품·교환 내역', '계단운반비 조회']
const benefitMenus = ['쿠폰, 포인트', '쿠폰, 포인트 선물', '상품권']
const activityCol1 = ['찜', '상품 후기', '상품문의']
const activityCol2 = ['최근 본 상품', '재입고 알림 신청 내역']
const csMenus = ['1:1 문의', 'A/S 문의', '설정', '공지사항']

export default function Mypage() {
  useEffect(() => {
    const b = document.body
    b.style.background = '#fff'
    b.style.minHeight = '100vh'
    b.style.overflowY = 'auto'
    b.style.display = 'block'
    return () => { b.style.cssText = '' }
  }, [])

  return (
    <div className="screen">

      <header className="header">
        <div className="logo">
          <span className="logo-txt">ZIP</span>
          <img src="/images/logo-r-mark.svg" alt="R" className="logo-r" />
          <span className="logo-txt">ESET</span>
        </div>
        <div className="header-icons">
          <img src="/images/icon-cart-mypage.svg" alt="장바구니" className="header-icon-img" />
          <img src="/images/icon-search-index.svg" alt="검색" className="header-icon-img" />
          <img src="/images/icon-bell-index.svg" alt="알림" className="header-icon-img" />
        </div>
      </header>

      <main>

        <div className="profile-card">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">
              <img src="/images/profile-avatar.png" alt="프로필 아바타" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <button className="edit-btn">
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M8.5 1.5l2 2-7 7H1.5v-2l7-7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              <span className="profile-name">김희망</span>
              <span className="profile-role">Estate Curator</span>
            </div>
            <p className="profile-email">kim.curator@example.com</p>
            <button className="btn-manage">내 정보 관리</button>
          </div>
        </div>

        <section className="menu-section">
          <h2 className="menu-section-title">주문 관리</h2>
          <div className="menu-grid">
            {orderMenus.map((m) => <a href="#" className="menu-link" key={m}>{m}</a>)}
          </div>
          <hr className="divider" />
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">나의 혜택</h2>
          <div className="menu-grid">
            {benefitMenus.map((m) => <a href="#" className="menu-link" key={m}>{m}</a>)}
          </div>
          <hr className="divider" />
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">나의 활동</h2>
          <div className="menu-grid menu-grid-2col">
            <div className="menu-col">
              {activityCol1.map((m) => <a href="#" className="menu-link" key={m}>{m}</a>)}
            </div>
            <div className="menu-col">
              {activityCol2.map((m) => <a href="#" className="menu-link" key={m}>{m}</a>)}
            </div>
          </div>
          <hr className="divider" />
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">고객센터 <span className="arrow">&gt;</span></h2>
          <div className="menu-grid">
            {csMenus.map((m) => <a href="#" className="menu-link" key={m}>{m}</a>)}
          </div>
          <hr className="divider" />
        </section>

      </main>

      <nav className="bottom-nav">
        <div className="nav-inner">
          <Link to="/home" className="nav-item">
            <img src="/images/nav-home-mp.png" alt="홈" className="nav-icon" />
            <span>홈</span>
          </Link>
          <div className="nav-item">
            <img src="/images/nav-biuom-mp.svg" alt="비움" className="nav-icon" />
            <span>비움</span>
          </div>
          <div className="nav-item">
            <img src="/images/nav-cate-mp.svg" alt="카테고리" className="nav-icon" />
            <span>카테고리</span>
          </div>
          <div className="nav-item">
            <img src="/images/nav-cwoom-mp.svg" alt="채움" className="nav-icon" />
            <span>채움</span>
          </div>
          <div className="nav-item active">
            <img src="/images/nav-my-mp.svg" alt="마이" className="nav-icon" />
            <span>마이</span>
          </div>
        </div>
      </nav>

    </div>
  )
}