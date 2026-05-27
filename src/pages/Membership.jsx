import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/membership.css'

const CheckGreen = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="benefit-icon">
    <circle cx="10" cy="10" r="10" fill="#a3e6c2"/>
    <path d="M5.5 10l3 3 6-6" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckBlue = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="benefit-icon">
    <circle cx="10" cy="10" r="10" fill="#2563eb"/>
    <path d="M5.5 10l3 3 6-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckYellow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="benefit-icon">
    <circle cx="10" cy="10" r="10" fill="#fbbf24"/>
    <path d="M5.5 10l3 3 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Membership() {
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

      <header className="mb-header">
        <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &lt;
        </button>
        <h1 className="mb-header-title">멤버십 혜택</h1>
        <div className="mb-spacer"></div>
      </header>

      <section className="mb-hero">
        <div className="hero-img-wrap">
          <img className="hero-bg-img" src="/images/membership-hero.png" alt="" />
        </div>
        <div className="hero-text">
          <h2 className="hero-title">집리셋 클럽 혜택 안내</h2>
          <p className="hero-sub1">&nbsp;공간의 가치를 높이는 프리미엄 케어 서비스</p>
          <p className="hero-sub2">&nbsp;&nbsp;집리셋 클럽으로&nbsp;&nbsp;여유 있는 일상을 경험하세요.</p>
        </div>
      </section>

      <div className="cards-wrap">

        {/* Green Master */}
        <div className="mb-card card-green">
          <div className="card-header">
            <div className="card-icon-box icon-green">
              <img src="/images/membership-icon-green.svg" alt="" className="card-icon-img" style={{ width: '16px', height: '16px' }} />
            </div>
            <span className="card-badge badge-green">STANDARD</span>
          </div>
          <h2 className="card-title title-dark">Green Master</h2>
          <p className="card-sub sub-green">기본에 충실한 실속형 케어</p>
          <ul className="card-benefits">
            <li className="benefit-item"><CheckGreen /><span>홈 케어 서비스 15% 할인</span></li>
            <li className="benefit-item"><CheckGreen /><span>포인트 샵 무료 배송</span></li>
          </ul>
          <button className="card-btn btn-dark-green">신청하기</button>
        </div>

        {/* Blue Elite */}
        <div className="mb-card card-blue">
          <span className="card-badge badge-blue badge-popular">POPULAR</span>
          <div className="card-header">
            <div className="card-icon-box icon-blue">
              <img src="/images/membership-icon-blue.svg" alt="" className="card-icon-img" style={{ width: '10px', height: '20px' }} />
            </div>
          </div>
          <h2 className="card-title title-blue">Blue Elite</h2>
          <p className="card-sub sub-blue">특별한 혜택의 스마트한 선택</p>
          <ul className="card-benefits">
            <li className="benefit-item"><CheckBlue /><span>홈 케어 서비스 20% 할인</span></li>
            <li className="benefit-item"><CheckBlue /><span>이용 금액 5% 포인트 적립</span></li>
            <li className="benefit-item"><CheckBlue /><span>VIP 컨시어지 우선 배정</span></li>
          </ul>
          <button className="card-btn btn-blue">신청하기</button>
        </div>

        {/* Black VIP */}
        <div className="mb-card card-black">
          <div className="card-header">
            <div className="card-icon-box icon-yellow">
              <img src="/images/membership-icon-yellow.svg" alt="" className="card-icon-img" style={{ width: '16px', height: '21px' }} />
            </div>
            <span className="card-badge badge-yellow">ULTIMATE</span>
          </div>
          <h2 className="card-title title-yellow">Black VIP</h2>
          <p className="card-sub sub-dim">최고를 위한 프라이빗 솔루션</p>
          <ul className="card-benefits">
            <li className="benefit-item"><CheckYellow /><span className="benefit-white">홈 케어 서비스 30% 할인</span></li>
            <li className="benefit-item"><CheckYellow /><span className="benefit-white">이용 금액 10% 포인트 적립</span></li>
            <li className="benefit-item"><CheckYellow /><span className="benefit-white">프라이빗 홈 컨설팅</span></li>
            <li className="benefit-item"><CheckYellow /><span className="benefit-white">연 1회 무료 이사 서비스</span></li>
          </ul>
          <button className="card-btn btn-yellow">신청하기</button>
        </div>

      </div>

    </div>
  )
}