import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/ai-analysis.css'

export default function AiAnalysis() {
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

      <header className="ai-header">
        <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="header-logo"></div>
        <div className="header-icons">
          <img src="/images/icon-cart-index.svg" alt="장바구니" className="header-icon" />
          <img src="/images/icon-search-index.svg" alt="검색" className="header-icon" style={{ width: '23px', height: '22px' }} />
          <img src="/images/icon-bell-index.svg" alt="알림" className="header-icon" />
        </div>
      </header>

      <div className="aa-title-box">
        <h1 className="title-main">가구 상태 분석 및 비움</h1>
        <p className="title-sub">촬영 시 AI가 즉시 가치를 평가합니다.</p>
      </div>

      <div className="visual-wrap">
        <div className="visual-bg-wrap" aria-hidden="true">
          <div className="visual-bg-white"></div>
          <div className="visual-bg-img-wrap">
            <img className="visual-bg-img" src="/images/custom-img.png" alt="" />
          </div>
        </div>
        <div className="visual-overlay"></div>

        <div className="scanner-area">
          <div className="scanner-frame">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
            <div className="scan-line"></div>
            <div className="badge badge-frame">
              <span className="badge-top">[프레임 상태]</span>
              <span className="badge-bottom">최상</span>
            </div>
            <div className="badge badge-wear">
              <span className="badge-top">[마모도]</span>
              <span className="badge-bottom">3.5% 수준</span>
            </div>
            <button className="camera-btn">
              <span className="camera-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </span>
            </button>
          </div>
          <p className="guide-text">수평을 맞춰 촬영하세요</p>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <p className="info-label">예상 매입가</p>
          <p className="info-value">125,000</p>
          <div className="info-sub-row">
            <span className="info-sub">시제 대비 상위 15%</span>
            <img src="/images/aa-icon1.svg" alt="" className="info-icon" />
          </div>
        </div>
        <div className="info-card">
          <p className="info-label">처분 난이도</p>
          <div className="info-value-row">
            <span className="info-value">쉬움</span>
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="info-sub-row">
            <span className="info-sub">시제 대비 상위 15%</span>
            <img src="/images/aa-icon2.svg" alt="" className="info-icon" />
          </div>
        </div>
      </div>

      <div className="btn-area">
        <button className="btn-primary">즉시 수거 신청하기</button>
        <p className="btn-note">* AI 분석 결과는 실제 방문 시 변동될 수 있습니다.</p>
      </div>

    </div>
  )
}