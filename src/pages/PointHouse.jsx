import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/point-house.css'

const tabs = ['전체', '모바일 상품권', '홈 케어권', '인테리어']

export default function PointHouse() {
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

      <header className="ph-header">
        <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &lt;
        </button>
        <h1 className="ph-header-title">포인트 하우스</h1>
        <div className="ph-header-spacer"></div>
      </header>

      <div className="ph-title">
        <h2 className="ph-title-main">집리셋 케어<br />포인트</h2>
        <p className="ph-title-sub">포인트와 혜택을 한눈에 관리해요</p>
      </div>

      <div className="ph-card-visual">
        <div className="ph-card-grid">
          {/* Card 1: Purple */}
          <div className="ph-point-card card-purple">
            <img className="card-overlay" src="/images/card-mask-purple1.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-purple2.svg" alt="" />
            <div className="card-top">
              <p className="card-label">Point Card</p>
              <p className="card-brand">ZIP RESET</p>
            </div>
            <p className="card-value">42,850<span className="card-p">P</span></p>
          </div>
          {/* Card 2: Red */}
          <div className="ph-point-card card-red">
            <img className="card-overlay" src="/images/js-img2.png" alt="" />
          </div>
          {/* Card 3: Blue */}
          <div className="ph-point-card ph-card-blue">
            <img className="card-overlay" src="/images/card-mask-blue1.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-blue2.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-blue3.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-blue4.svg" alt="" />
            <div className="card-top">
              <p className="card-label">Point Card</p>
              <p className="card-brand">ZIP RESET</p>
            </div>
            <p className="card-value">최대<br />5% 할인</p>
          </div>
          {/* Card 4: Magenta */}
          <div className="ph-point-card card-magenta">
            <img className="card-overlay" src="/images/card-mask-magenta1.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-magenta2.svg" alt="" />
            <div className="card-top">
              <p className="card-label">Point Card</p>
              <p className="card-brand">ZIP RESET</p>
            </div>
            <p className="card-value">20,000원<br />절약</p>
          </div>
          {/* Card 5: Pink */}
          <div className="ph-point-card card-pink">
            <img className="card-overlay" src="/images/card-mask-pink1.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-pink2.svg" alt="" />
            <img className="card-overlay" src="/images/card-mask-pink3.svg" alt="" />
            <div className="card-top">
              <p className="card-label">Point Card</p>
              <p className="card-brand">ZIP RESET</p>
            </div>
            <p className="card-value">25,850<span className="card-p">P</span></p>
          </div>
          {/* Card 6: Black */}
          <div className="ph-point-card card-black">
            <div className="card-top">
              <p className="card-label">Point Card</p>
              <p className="card-brand">ZIP RESET</p>
            </div>
            <p className="card-value"><span className="card-small">멤버십 </span>Green<br />Master</p>
          </div>
        </div>
      </div>

      <div className="ph-balance-outer">
        <div className="ph-balance-card">
          <div className="ph-balance-info">
            <p className="ph-balance-label">나의 보유 포인트</p>
            <p className="ph-balance-value">42,850 <span className="ph-balance-p">P</span></p>
          </div>
          <div className="ph-balance-btns">
            <button className="ph-btn-gift">
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M7 3.5C7 2.12 8.12 1 9.5 1S12 2.12 12 3.5H7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M7 3.5C7 2.12 5.88 1 4.5 1S2 2.12 2 3.5H7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
                <rect x="1" y="3.5" width="12" height="2.5" rx="1" stroke="#fff" strokeWidth="1.2"/>
                <rect x="2" y="6" width="10" height="7" rx="1" stroke="#fff" strokeWidth="1.2"/>
                <line x1="7" y1="6" x2="7" y2="13" stroke="#fff" strokeWidth="1.2"/>
              </svg>
              포인트 선물하기
            </button>
            <button className="ph-btn-charge">
              <svg viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="#000" strokeWidth="1.2"/>
                <path d="M8.5 5L6 7.5h3L5.5 10.5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              포인트 충전
            </button>
          </div>
          <div className="ph-expire-row">
            <svg viewBox="0 0 15 12" fill="none">
              <circle cx="7.5" cy="6" r="5.5" stroke="#FF8732" strokeWidth="1.2"/>
              <line x1="7.5" y1="4" x2="7.5" y2="6.5" stroke="#FF8732" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="7.5" cy="8.5" r="0.7" fill="#FF8732"/>
            </svg>
            <p className="ph-expire-text">소멸 예정 포인트: 1,200 p</p>
          </div>
        </div>
      </div>

      <div className="ph-club-section">
        <div className="ph-club-header">
          <span className="ph-club-title">집리셋 클럽</span>
          <a href="/membership" className="ph-club-link">
            <span>혜택 자세히 보기</span>
            <span className="ph-club-underline"></span>
          </a>
        </div>
        <div className="ph-club-card">
          <div className="ph-grade-row">
            <div className="ph-grade-icon">
              <img src="/images/grade-icon.svg" alt="등급 아이콘" />
            </div>
            <div className="ph-grade-info">
              <p className="ph-grade-label">현재 등급</p>
              <p className="ph-grade-name">그린 마스터 (Green Master)</p>
            </div>
          </div>
          <div className="ph-benefits-list">
            <div className="ph-benefit-row">
              <div className="ph-benefit-left">
                <div className="ph-benefit-icon">
                  <svg viewBox="0 0 18 22" fill="none">
                    <rect x="1" y="7" width="16" height="14" rx="2" stroke="#555" strokeWidth="1.4"/>
                    <path d="M5.5 7V5a3.5 3.5 0 017 0v2" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
                    <circle cx="9" cy="14" r="2" fill="#555"/>
                  </svg>
                </div>
                <span className="ph-benefit-text">정기 케어 서비스 할인</span>
              </div>
              <span className="ph-benefit-value">15% OFF</span>
            </div>
            <div className="ph-benefit-row">
              <div className="ph-benefit-left">
                <div className="ph-benefit-icon">
                  <svg viewBox="0 0 22 16" fill="none">
                    <rect x="1" y="1" width="20" height="14" rx="2" stroke="#555" strokeWidth="1.4"/>
                    <path d="M1 5h20" stroke="#555" strokeWidth="1.4"/>
                    <path d="M5 10h4" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="ph-benefit-text">포인트 샵 무료 배송</span>
              </div>
              <div className="ph-benefit-check">
                <svg viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#5a2e2a"/>
                  <path d="M5 8.5l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="ph-progress-section">
            <div className="ph-progress-meta">
              <span className="ph-progress-label">다음 등급 달성까지</span>
              <span className="ph-progress-value">7,150 <span className="ph-progress-p">P</span>(65%)</span>
            </div>
            <div className="ph-progress-track">
              <div className="ph-progress-fill" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ph-shop-section">
        <h2 className="ph-shop-title">포인트 샵</h2>
        <div className="ph-tabs">
          {tabs.map((t, i) => (
            <button key={t} className={`ph-tab${i === 0 ? ' active' : ''}`}>{t}</button>
          ))}
        </div>
        <div className="ph-product-grid">
          <div className="ph-product-card">
            <div className="ph-product-img">
              <img src="/images/Product img1.png" alt="세라믹 오브제 화병" />
              <span className="ph-hot-badge">HOT</span>
            </div>
            <div className="ph-product-info">
              <p className="ph-product-cat">인테리어 소품</p>
              <p className="ph-product-name">세라믹 오브제 화병</p>
              <p className="ph-product-price">24,000 <span className="ph-price-p">P</span></p>
            </div>
          </div>
          <div className="ph-product-card">
            <div className="ph-product-img">
              <img src="/images/Product img2.png" alt="심층 매트리스 케어" />
            </div>
            <div className="ph-product-info">
              <p className="ph-product-cat">홈 케어 서비스</p>
              <p className="ph-product-name">심층 매트리스 케어 …</p>
              <p className="ph-product-price">45,000 <span className="ph-price-p">P</span></p>
            </div>
          </div>
          <div className="ph-product-card ph-product-wide">
            <div className="ph-product-img-wide">
              <img src="/images/Product img3.png" alt="프리미엄 기프트 바우처" />
            </div>
            <div className="ph-product-info-wide">
              <p className="ph-product-cat">모바일 상품권</p>
              <p className="ph-product-name-lg">프리미엄 기프트 바우처</p>
              <p className="ph-product-desc">어디서든 자유롭게 사용 가능한<br />5만원 상품권</p>
              <p className="ph-product-price-lg">50,000 <span className="ph-price-p">P</span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}