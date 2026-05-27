const categories = [
  { img: 'category-img1.png', label: '침실' },
  { img: 'category-img2.png', label: '거실가구' },
  { img: 'category-img3.png', label: '옷장·드레스룸' },
  { img: 'category-img4.png', label: '다이닝' },
  { img: 'category-img5.png', label: '부엌' },
  { img: 'category-img6.png', label: '생활가전' },
  { img: 'category-img7.png', label: '욕실용품' },
  { img: 'category-img8.png', label: '주방용품' },
  { img: 'category-img9.png', label: '비움' },
  { img: 'category-img10.png', label: '채움' },
]

export default function CategoryGrid() {
  return (
    <div className="category-section">
      <div className="category-grid">
        {categories.map((cat, i) => (
          <div className="category-item" key={i}>
            <div className="cat-icon-box">
              <img src={`/images/${cat.img}`} alt={cat.label} className={`cat-img cat-img--${i + 1}`} />
            </div>
            <span className="cat-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}