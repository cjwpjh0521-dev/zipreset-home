const products = [
  { img: 'card img1.png', name: '리셋 컴포트 라운지 소파', desc: '하루의 피로를 내려놓는 가장 편안한 자리', price: '1,123,000' },
  { img: 'card img2.png', name: '리셋 밸런스 플랫폼 침대', desc: '편안한 휴식과 정돈된 공간을 동시에 완성', price: '1,200,000' },
  { img: 'card img3.png', name: '리셋 스토리지 시스템 수납장', desc: '비워낼수록 더 넓어지는 공간의 시작', price: '459,000' },
  { img: 'card img4.png', name: '리셋 모듈 수납 옷장', desc: '흩어진 일상을 정리하고 공간의 여유를 되찾는 구조', price: '849,000' },
]

export default function ProductSection() {
  return (
    <div className="product-section">
      <div className="section-top">
        <span className="sec-title">지금, 공간을 바꿀 선택</span>
        <span className="sec-more">더보기  ›</span>
      </div>
      <div className="sec-subtitle">나에게 맞는 상품을 찾아보세요!</div>
      <div className="hscroll">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="pcard-img">
              <img className="main-img" src={`/images/${p.img}`} alt={p.name} />
              <span className="fav-btn">
                <svg viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </span>
            </div>
            <div>
              <div className="pcard-brand">집리셋</div>
              <div className="pcard-name">{p.name}</div>
              <div className="pcard-desc">{p.desc}</div>
              <div className="pcard-price">{p.price}<span className="won">원</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}