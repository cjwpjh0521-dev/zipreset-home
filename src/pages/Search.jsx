import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/search.css'

const recentKeywords = ['러그', '더프리그', '노미아', '패브릭', '행거', '침대', '소파', '수납장', '식탁', '책장', '샘키즈', '서랍장', '거실러그']

const rankings = [
  { num: 1, name: '모듈소파' },
  { num: 2, name: '미드센추리 모던' },
  { num: 3, name: '1인 리클라이너' },
  { num: 3, name: '벽걸이 선반' },
  { num: 4, name: '홈오피스 데스크' },
  { num: 5, name: '러그 200x300' },
  { num: 6, name: 'TV장' },
  { num: 7, name: '선반' },
]

const aiKeywords = ['의자', '러그', '쓰레기통', '현관매트']

export default function Search() {
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
      <header className="search-header">
        <button className="back-btn" onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="검색어를 입력해 주세요" />
          <button className="search-icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">최근 검색어</h2>
          <div className="keyword-chips">
            {recentKeywords.map((kw) => <span className="chip" key={kw}>{kw}</span>)}
          </div>
        </section>

        <section className="section">
          <div className="section-title-row">
            <h2 className="section-title">인기 검색어</h2>
            <span className="section-date">2026.4.21 15:00 기준</span>
          </div>
          <div className="ranking-grid">
            {rankings.map((r, i) => (
              <div className="ranking-item" key={i}>
                <span className="rank-num">{r.num}</span>
                <span className="rank-new">NEW</span>
                <span className="rank-name">{r.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title-row">
            <h2 className="section-title">AI추천 검색어</h2>
            <span className="beta-badge">BETA</span>
          </div>
          <div className="keyword-chips">
            {aiKeywords.map((kw) => <span className="chip" key={kw}>{kw}</span>)}
          </div>
        </section>
      </main>
    </div>
  )
}