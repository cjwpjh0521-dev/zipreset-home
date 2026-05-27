import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../css/vr-scan.css'

const furnitureCards = [
  { img: 'Velvet-img1.png', clipClass: '',              imgClass: 'vr-item-img--1', heart: true,  heartClass: '',          name: '벨벳 3인용 소파',      price: '1,059,000', btnClass: '' },
  { img: 'Velvet-img2.png', clipClass: 'vr-item-img-clip--2', imgClass: 'vr-item-img--2', heart: true,  heartClass: 'vr-heart-btn--2', name: '3단 서랍장',            price: '565,500',   btnClass: '' },
  { img: 'Velvet-img3.png', clipClass: 'vr-item-img-clip--3', imgClass: 'vr-item-img--3', heart: true,  heartClass: '',          name: '옷장',                  price: '1,130,000', btnClass: '' },
  { img: 'Velvet-img4.png', clipClass: 'vr-item-img-clip--4', imgClass: 'vr-item-img--4', heart: false, heartClass: '',          name: '멀티수납 조명화장대',  price: '829,000',   btnClass: 'vr-place-btn--alt' },
]

export default function VrScan() {
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

      <header className="vr-header">
        <button className="vr-header-back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &#8249;
        </button>
        <div className="vr-header-icons">
          <img src="/images/vr-icon-cart.svg"   alt="장바구니" className="vr-header-icon" />
          <img src="/images/vr-icon-search.svg" alt="검색"     className="vr-header-icon vr-header-icon--search" />
          <img src="/images/vr-icon-bell.svg"   alt="알림"     className="vr-header-icon" />
        </div>
      </header>

      <div className="vr-page-title">
        <h1 className="vr-title-main">공간 분석 기반 가상 배치</h1>
        <p className="vr-title-sub">공간 분석을 통해 사용자 취향에 맞는 인테리어를 제안합니다.</p>
      </div>

      <div className="vr-visual">
        <img src="/images/vr-ai-bg.png" alt="공간 분석 이미지" className="vr-visual-img" />
        <div className="vr-visual-overlay">
          <div className="vr-scan-frame">
            <div className="vr-scan-inner"></div>
          </div>
          <div className="vr-scan-info">
            <div className="vr-scan-info-item">
              <img src="/images/vr-scan-icon2.svg" alt="" className="vr-scan-info-icon" />
              <span>스캔 면적: 18.5m</span>
            </div>
            <div className="vr-scan-info-item">
              <img src="/images/vr-wall-icon2.svg" alt="" className="vr-scan-info-icon vr-scan-info-icon--wall" />
              <span>벽면 검지: 4곳</span>
            </div>
          </div>
        </div>
      </div>

      <section className="vr-furniture-section">
        <div className="vr-furniture-header">
          <h2 className="vr-furniture-title">내 공간에 딱 맞는 가구</h2>
          <a href="#" className="vr-furniture-more">
            전체보기
            <img src="/images/vr-arrow-icon.png" alt="" />
          </a>
        </div>

        <div className="vr-card-list">
          {furnitureCards.map((c) => (
            <div className="vr-item-card" key={c.name}>
              <div className="vr-item-img-wrap">
                <div className={`vr-item-img-clip${c.clipClass ? ' ' + c.clipClass : ''}`}>
                  <img src={`/images/${c.img}`} alt={c.name} className={`vr-item-img ${c.imgClass}`} />
                  {c.heart && (
                    <button className={`vr-heart-btn${c.heartClass ? ' ' + c.heartClass : ''}`} aria-label="찜하기">
                      <img src="/images/vr-heart-icon.png" alt="" />
                    </button>
                  )}
                </div>
              </div>
              <p className="vr-item-name">{c.name}</p>
              <p className="vr-item-price"><em>{c.price}</em>원</p>
              <button className={`vr-place-btn${c.btnClass ? ' ' + c.btnClass : ''}`}>
                <img src="/images/vr-place-icon.png" alt="" />배치하기
              </button>
            </div>
          ))}
        </div>
      </section>

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
            <img src="/images/nav-my-vr.svg" alt="마이" className="nav-icon nav-icon--white" />
            <span>마이</span>
          </Link>
        </div>
      </nav>

    </div>
  )
}