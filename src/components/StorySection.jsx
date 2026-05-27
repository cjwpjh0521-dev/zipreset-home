const stories = [
  { img: 'tip img1.png', title: '채워져 있던 일상' },
  { img: 'tip img2.png', title: '비워낸 후, 달라진 하루' },
  { img: 'tip img3.png', title: '채워져 있던 일상' },
  { img: 'tip img4.png', title: '비워낸 후, 달라진 하루' },
  { img: 'tip img5.png', title: '채워져 있던 일상' },
  { img: 'tip img6.png', title: '비워낸 후, 달라진 하루' },
]

export default function StorySection() {
  return (
    <div className="story-section">
      <div className="story-title">지금, 리셋이 필요한 순간</div>
      <div className="story-sub">다르게 사는 방법을 시작하세요</div>
      <div className="story-scroll">
        {stories.map((s, i) => (
          <div className="story-card" key={i}>
            <img src={`/images/${s.img}`} alt={`스토리${i + 1}`} />
            <div className="story-overlay"></div>
            <div className="story-card-title">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}