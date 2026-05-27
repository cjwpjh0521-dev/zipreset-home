import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/lighting-category.css'

const scrollCards = [
  { img: 'nbn-img1.png', name: '리셋 미니 테이블 램프',  price: '79,000' },
  { img: 'nbn-img2.png', name: '리셋 무드 스탠드 조명',  price: '129,000' },
  { img: 'nbn-img3.png', name: '리셋 월 라이트 조명',    price: '98,000' },
]

const gridCards = [
  { img: 'prompt-img1.png', name: '리셋 무드 스탠드 조명', desc: '부드러운 조명으로 공간의 분위기를 완성해요',    price: '129,000' },
  { img: 'prompt-img2.png', name: '리셋 미니 테이블 램프', desc: '은은한 빛으로 편안한 공간을 만들어 줘요',      price: '79,000' },
  { img: 'prompt-img3.png', name: '리셋 펜던트 조명',      desc: '공간에 포인트를 더해 분위기를 살려줘요',      price: '159,000' },
  { img: 'prompt-img4.png', name: '리셋 월 라이트 조명',   desc: '벽면을 활용해 공간을 더 감각적으로 연출해요',  price: '98,000' },
]

const chips = ['가격 >', '브랜드 >', '배송 >', '컬러계열 >']

export default function LightingCategory() {
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

      <header className="lc-header">
        <button className="lc-header-back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &#60;
        </button>
        <span className="lc-header-title">패브릭 조명</span>
        <span className="lc-header-spacer"></span>
      </header>

      <div className="lc-page-title">
        <p>공간을 바꾸는 조명</p>
        <p>분위기는 빛에서 시작됩니다</p>
      </div>

      <section className="lc-hero">
        <img src="/images/lc-hero-bg.png" alt="조명 배경" className="lc-hero-img" />
        <div className="lc-hero-overlay"></div>
        <div className="lc-hero-text">작은 빛, 큰 변화</div>
      </section>

      <section className="lc-scroll-section">
        {scrollCards.map((c) => (
          <div className="lc-card" key={c.name}>
            <img src={`/images/${c.img}`} alt={c.name} className="lc-card-img" />
            <div className="lc-card-info">
              <span className="lc-brand">집리셋</span>
              <span className="lc-name">{c.name}</span>
              <span className="lc-price"><em>{c.price}</em>원</span>
            </div>
          </div>
        ))}
      </section>

      <section className="lc-grid-section">
        <div className="lc-filter-row">
          <button className="lc-chip lc-chip--active">AI 공간 추천</button>
          <span className="lc-chip-divider"></span>
          {chips.map((chip) => (
            <button className="lc-chip" key={chip}>{chip}</button>
          ))}
          <button className="lc-filter-icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 8H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z" fill="white" stroke="black" strokeWidth="1.5"/>
              <path d="M4 16H20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 18C15.1046 18 16 17.1046 16 16C16 14.8954 15.1046 14 14 14C12.8954 14 12 14.8954 12 16C12 17.1046 12.8954 18 14 18Z" fill="white" stroke="black" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>

        <div className="lc-sort-row">
          <span className="lc-count">전체 <strong>289</strong>건</span>
          <button className="lc-sort-btn">
            인기순
            <img src="/images/lc-sort-icon.svg" alt="" />
          </button>
        </div>

        <div className="lc-product-grid">
          {gridCards.map((c) => (
            <div className="lc-grid-card" key={c.name}>
              <div className="lc-grid-img-wrap">
                <img src={`/images/${c.img}`} alt={c.name} className="lc-grid-img" />
              </div>
              <div className="lc-grid-info">
                <span className="lc-brand">집리셋</span>
                <span className="lc-name">{c.name}</span>
                <span className="lc-grid-desc">{c.desc}</span>
                <span className="lc-price"><em>{c.price}</em>원</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}