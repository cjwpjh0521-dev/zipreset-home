import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/furniture-category.css'

const scrollCards = [
  { img: 'btn-img1.png', alt: '리셋 미니멀 프레임 침대',  name: '리셋 미니멀 프레임 침대',  price: '920,000' },
  { img: 'btn-img2.png', alt: '리셋 컴포트 라운지 소파',  name: '리셋 컴포트 라운지 소파',  price: '1,059,000' },
  { img: 'btn-img3.png', alt: '리셋 모던 주방 세트',      name: '리셋 모던  주방 세트',      price: '2,480,000' },
]

const gridCards = [
  { img: 'fc-grid1.png', alt: '6인용 가죽 소파',    name: '6인용 가죽 소파',    desc: '고급 이태리 천연 가죽 소재의 편안함',        price: '2,450,000' },
  { img: 'fc-grid2.png', alt: '원목 원형 식탁',      name: '원목 원형 식탁',      desc: '공간의 조화를 이루는 라운드 실루엣',          price: '890,000' },
  { img: 'fc-grid3.png', alt: '모던 라운드 테이블',  name: '모던 라운드 테이블',  desc: '공간에 자연스럽게 스며드는 미니멀 오브제',    price: '1,200,000' },
  { img: 'fc-grid4.png', alt: '미니멀 수납장',       name: '미니멀 수납장',       desc: '깔끔한 공간을 연출을 위한 최적의 선택',      price: '450,000' },
]

const chips = ['가격 >', '브랜드 >', '배송 >', '컬러계열 >']

export default function FurnitureCategory() {
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

      <header className="fc-header">
        <button className="fc-header-back" onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &#60;
        </button>
        <h1 className="fc-header-title">가구 카테고리</h1>
        <span className="fc-header-spacer"></span>
      </header>

      <div className="fc-page-title">
        <p>채움의 기준<br />필요한 것만 채우세요</p>
      </div>

      <section className="fc-hero">
        <img src="/images/fc-hero-bg.png" alt="가구 카테고리 배경" className="fc-hero-img" />
        <div className="fc-hero-gradient"></div>
        <div className="fc-hero-text">
          <p>더 나은 선택으로 채워보세요</p>
          <p>이제, 공간을 완성할 차례입니다</p>
        </div>
      </section>

      <section className="fc-scroll-section">
        {scrollCards.map((c) => (
          <div className="fc-card" key={c.name}>
            <div className="fc-card-img-wrap">
              <img src={`/images/${c.img}`} alt={c.alt} className="fc-card-img" />
            </div>
            <div className="fc-card-info">
              <span className="fc-card-brand">집리셋</span>
              <span className="fc-card-name">{c.name}</span>
              <span className="fc-card-price"><em>{c.price}</em>원</span>
            </div>
          </div>
        ))}
      </section>

      <section className="fc-grid-section">
        <div className="fc-filter-row">
          <button className="fc-chip fc-chip--active">AI 공간 추천</button>
          <div className="fc-chip-divider"></div>
          {chips.map((chip) => (
            <button className="fc-chip" key={chip}>{chip}</button>
          ))}
          <button className="fc-filter-icon-btn">
            <img src="/images/fc-filter-icon.svg" alt="필터" />
          </button>
        </div>

        <div className="fc-sort-row">
          <span className="fc-count">전체 <strong>289</strong>건</span>
          <button className="fc-sort-btn">
            인기순
            <img src="/images/fc-sort-icon.svg" alt="" />
          </button>
        </div>

        <div className="fc-product-grid">
          {gridCards.map((c) => (
            <div className="fc-grid-card" key={c.name}>
              <div className="fc-grid-img-wrap">
                <img src={`/images/${c.img}`} alt={c.alt} className="fc-grid-img" />
              </div>
              <div className="fc-grid-info">
                <span className="fc-card-brand">집리셋</span>
                <span className="fc-card-name">{c.name}</span>
                <span className="fc-grid-desc">{c.desc}</span>
                <span className="fc-card-price"><em>{c.price}</em>원</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}