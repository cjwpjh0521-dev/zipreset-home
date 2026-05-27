import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/buyout.css'

const catItems = [
  { img: 'buyout-cat1.png', label: '가구 / 가전',      w: 38, h: 35 },
  { img: 'buyout-cat2.png', label: '주방용품',          w: 38, h: 35 },
  { img: 'buyout-cat3.png', label: '사무용품',          w: 38, h: 35 },
  { img: 'buyout-cat4.png', label: '수납/정리 용품',    w: 42, h: 47 },
]

const steps = [
  { num: '1', name: '사진 업로드',       desc: '제품의 전체샷과 상세 정보를 등록합니다.' },
  { num: '2', name: '전문 감정사 진단',  desc: '24시간 내에 예상 매입가를 제안드립니다.' },
  { num: '3', name: '수거 및 입금',      desc: '원하는 시간에 수거 후 즉시 입금됩니다.' },
]

const statusCards = [
  { img: 'system-img1.png', alt: '원목 의자',            name: '원목 의자',            date: '2026.04.09', price: '240,000',        pricePrefix: '' },
  { img: 'system-img2.png', alt: '3인용 페브릭 소파',    name: '3인용 페브릭 소파',    date: '2025.12.15', price: '1,800,000',      pricePrefix: '' },
  { img: 'system-img3.png', alt: '3단 이동식 수납 서랍장', name: '3단 이동식 수납 서랍장', date: '2025.08.23', price: '80,000', pricePrefix: '' },
]

export default function Buyout() {
  const navigate = useNavigate()

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

      <header className="bo-header">
        <button className="back-btn" onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="bo-logo"></div>
        <div className="bo-header-icons">
          <img src="/images/icon-cart-index.svg" alt="장바구니" className="header-icon" />
          <img src="/images/icon-search-index.svg" alt="검색" className="header-icon" style={{ width: '23px', height: '22px' }} />
          <img src="/images/icon-bell-index.svg" alt="알림" className="header-icon" />
        </div>
      </header>

      <section className="bo-hero">
        <div className="bo-hero-bg-wrap">
          <img className="bo-hero-bg-img" src="/images/Hero Section-img.png" alt="" />
        </div>
        <div className="bo-hero-overlay"></div>
        <div className="bo-hero-content">
          <div className="bo-hero-text-box">
            <h2 className="bo-hero-title">내 가구의 가치를<br />확인하세요</h2>
            <p className="bo-hero-desc">전문 감정사가 제안하는 합리적인 중고<br />매입 서비스를 지금 경험해보세요.</p>
          </div>
          <button className="bo-hero-btn">
            <img src="/images/buyout-btn-icon.png" alt="" className="hero-btn-icon" />
            내 가구 시세 조회하기
          </button>
        </div>
      </section>

      <section className="bo-category">
        <div className="category-title-box">
          <h2 className="section-title">매입 가능 카테고리</h2>
          <p className="section-sub">다양한 품목으로 전문적으로 취급한다</p>
        </div>
        <div className="cat-grid">
          {catItems.map((c) => (
            <div className="cat-card" key={c.label}>
              <img src={`/images/${c.img}`} alt="" className="cat-icon" style={{ width: `${c.w}px`, height: `${c.h}px` }} />
              <span className="cat-label">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bo-process">
        <h2 className="process-title">간편한 서비스 프로세스</h2>
        <div className="process-steps">
          <div className="process-divider"></div>
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="step-circle"><span className="step-num">{s.num}</span></div>
              <div className="step-info">
                <p className="step-name">{s.name}</p>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bo-status">
        <h2 className="status-title">나의 신청 현황</h2>
        <div className="status-scroll">
          {statusCards.map((c) => (
            <div className="status-card" key={c.name}>
              <div className="status-img-wrap">
                <img src={`/images/${c.img}`} alt={c.alt} className="status-img" />
                <img src="/images/lc-heart-icon.svg" alt="찜" className="heart-icon" />
              </div>
              <div className="status-info">
                <p className="status-brand">집리셋</p>
                <p className="status-name">{c.name}</p>
                <p className="status-date">신청일: {c.date}</p>
                <p className="status-price"><span className="price-main">{c.price}</span>원</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bo-cta">
        <h2 className="cta-title">대량 매입이 필요하신가요?</h2>
        <p className="cta-desc">이사나 사무실 정리 시 한꺼번에 해결하세요</p>
        <button className="cta-btn">상담 신청하기</button>
      </section>

    </div>
  )
}