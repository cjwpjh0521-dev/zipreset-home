const banners = [
  {
    img: 'banner-img1.png',
    badge: 'Pure Space',
    title: '비움으로 가치를 찾고,\n데이터로 공간을 채우다',
    desc: '망설였던 가구는 덜어내고, 비워진 자리에\n당신의 취향을 채우세요.',
    overlay: null,
    num: 1,
  },
  {
    img: 'banner-img2.png',
    badge: 'Pure Space',
    title: '"비우는 순간,\n당신의 집은 호텔이 됩니다."',
    desc: 'AI가 제안하는 비움 솔루션으로 숨겨진\n공간의 가치를 찾으세요.',
    overlay: 'linear-gradient(to bottom,rgba(0,0,0,0.35) 60%,rgba(120,120,120,0.25))',
    num: 2,
  },
  {
    img: 'banner-img3.png',
    badge: 'VR Spatial Analysis',
    title: '"망설였던 가구, 이제 VR로\n미리 배치해보세요."',
    desc: '공간을 VR로 정밀 분석하여, 당신의 집에\n딱 맞는 프리미엄 가구를 추천해 드립니다.',
    overlay: 'rgba(30,10,10,0.28)',
    num: 3,
  },
  {
    img: 'banner-img4.png',
    badge: 'Premium Experience',
    title: '"물건이 떠난 자리에\n여유를 채우세요."',
    desc: '비움 신청부터 프리미엄 수거까지,\n집리셋이 당신의 일상을 케어합니다.',
    overlay: 'rgba(0,0,0,0.3)',
    num: 4,
  },
]

export default function BannerSlider() {
  return (
    <div className="banner-wrap">
      {banners.map((b) => (
        <div className="banner-slide" key={b.num}>
          <img src={`/images/${b.img}`} alt={`배너${b.num}`} />
          <div className="banner-overlay" style={b.overlay ? { background: b.overlay } : undefined}></div>
          <div className="banner-content">
            <div className="banner-badge"><span>{b.badge}</span></div>
            <div className="banner-title">
              {b.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
            <div className="banner-desc">
              {b.desc.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
          </div>
          <div className="banner-indicator"><span>{b.num} <span className="sep">|</span> 4 +</span></div>
        </div>
      ))}
    </div>
  )
}