const magazines = [
  {
    img: 'bg-img1.png',
    overlay: 'rgba(0,0,0,0.3)',
    title: '좁은 방, 더 넓어 보이게\n하는 배치법',
    desc: '불필요한 요소를 줄이고, 시선을 분산시키지\n않는 배치가 공간을 더 넓게 만듭니다.',
  },
  {
    img: 'bg-img2.png',
    overlay: 'rgba(0,0,0,0.28)',
    title: '버리지 못하는 물건\n정리하는 기준',
    desc: '망설일 때 필요한 단 하나의 기준',
  },
  {
    img: 'bg-img3.png',
    overlay: 'rgba(0,0,0,0.22)',
    title: '계절마다 달라지는\n침구 관리법',
    desc: '계절에 맞게 바꾸는 것만으로,\n숙면의 질이 달라집니다.',
  },
]

export default function MagazineSection() {
  return (
    <>
      <div className="mag-title">리셋 매거진</div>
      <div className="tip-scroll">
        {magazines.map((t, i) => (
          <div className="tip-card" key={i}>
            <img src={`/images/${t.img}`} alt={`팁${i + 1}`} />
            <div className="tip-overlay" style={{ background: t.overlay }}></div>
            <div className="tip-content">
              <div className="tip-card-title">
                {t.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </div>
              <div className="tip-card-desc">
                {t.desc.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}