import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../css/care-service.css'

const serviceCards = [
  { icon: 'cs-service1-icon.svg', name: '가전 분해 청소', desc: '보이지 않는 곳까지 깨끗하게' },
  { icon: 'cs-service2-icon.svg', name: '가구 살균 케어', desc: '진드기 및 유해물질 완벽 차단' },
  { icon: 'cs-service3-icon.svg', name: '설치 & 수리',    desc: '전문가의 손길로 꼼꼼하게' },
]

export default function CareService() {
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
    <div className="page-wrap">

      <header className="cs-header">
        <button className="cs-header-back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &#60;
        </button>
        <span className="cs-header-title">케어 서비스</span>
        <span className="cs-header-spacer"></span>
      </header>

      <section className="cs-hero">
        <img src="/images/cs-hero-bg.png" alt="케어 서비스 배경" className="cs-hero-img" />
        <div className="cs-hero-gradient"></div>
        <div className="cs-hero-text">
          <p>정리된 공간을</p>
          <p>오래 유지하세요</p>
        </div>
      </section>

      <div className="cs-status-card">
        <p className="cs-status-label">공간 상태</p>
        <div className="cs-status-score">
          <em>92</em><span>%</span>
        </div>
        <p className="cs-status-sub">Premium Space Reset Experience</p>
        <div className="cs-status-tags">
          <span className="cs-tag cs-tag--dark">최적화됨</span>
          <span className="cs-tag cs-tag--light">오늘 할 일 1건</span>
        </div>
      </div>

      <section className="cs-care-section">
        <div className="cs-care-header">
          <p className="cs-care-title">내 케어 현황</p>
          <a href="#" className="cs-care-more">전체보기</a>
        </div>
        <div className="cs-schedule-card">
          <div className="cs-schedule-left">
            <div className="cs-schedule-icon-wrap">
              <img src="/images/cs-schedule-icon.svg" alt="" className="cs-schedule-icon" />
            </div>
            <div className="cs-schedule-info">
              <span className="cs-schedule-label">다음 일정</span>
              <span className="cs-schedule-date">내일, 13:00 PM</span>
              <span className="cs-schedule-name">가전 정밀 세척</span>
            </div>
          </div>
          <img src="/images/cs-arrow-icon.svg" alt="" className="cs-schedule-arrow" />
        </div>
      </section>

      <section className="cs-service-list">
        {serviceCards.map((s) => (
          <div className="cs-service-card" key={s.name}>
            <div className="cs-service-top">
              <div className="cs-service-icon-wrap">
                <img src={`/images/${s.icon}`} alt="" className="cs-service-icon" />
              </div>
              <button className="cs-reserve-btn">예약하기</button>
            </div>
            <p className="cs-service-name">{s.name}</p>
            <p className="cs-service-desc">{s.desc}</p>
            <div className="cs-progress-track">
              <div className="cs-progress-fill"></div>
            </div>
          </div>
        ))}
      </section>

      <div className="cs-promo-card">
        <div className="cs-promo-text">
          <p className="cs-promo-label">Premium Insight</p>
          <p className="cs-promo-title">여름 대비 에어컨 청소<br />20% 할인</p>
          <p className="cs-promo-sub">시즌 맞이 얼리버드 한정 혜택</p>
        </div>
        <div className="cs-promo-icon-wrap">
          <img src="/images/cs-promo-icon.svg" alt="" className="cs-promo-icon" />
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="nav-inner">
          <Link to="/home" className="nav-item">
            <img src="/images/nav-home-mp.png" alt="홈" className="nav-icon" />
            <span>홈</span>
          </Link>
          <div className="nav-item">
            <img src="/images/nav-cate-mp.svg" alt="카테고리" className="nav-icon" />
            <span>카테고리</span>
          </div>
          <div className="nav-item">
            <img src="/images/nav-biuom-mp.svg" alt="비움" className="nav-icon" />
            <span>비움</span>
          </div>
          <div className="nav-item active">
            <img src="/images/nav-cwoom-mp.svg" alt="채움" className="nav-icon" />
            <span>채움</span>
          </div>
          <Link to="/mypage" className="nav-item">
            <img src="/images/nav-my-mp.svg" alt="마이" className="nav-icon nav-icon--white" />
            <span>마이</span>
          </Link>
        </div>
      </nav>

    </div>
  )
}