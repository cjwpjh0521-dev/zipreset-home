import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/app-overview.css'

const mgmtItems = [
  { num: '01', label: '공간 가치 극대화', desc: '단순한 거주지를 넘어 삶의 영감을 주는 자산으로서의 공간을 관리합니다.' },
  { num: '02', label: '전담 큐레이터 매칭', desc: '당신의 라이프스타일을 완벽히 이해하는 전문가가 모든 과정을 동행합니다.' },
  { num: '03', label: '시간의 자유 보장', desc: '공간 관리의 번거로움을 자동화하여 당신의 소중한 시간을 확보해드립니다.' },
]

const testimonials = [
  {
    name: '박서준 님', role: 'IT 기획자',
    text: <>"퇴근 후 정리에 쏟을 에너지가 늘 부족했는데, 집리셋이 찾아준 <strong>'120cm의 여백'</strong> 덕분에 집이 훨씬 넓어 보이고 동선이 편해졌어요. 단순히 버리는 게 아니라 내 삶에 꼭 필요한 것들로만 채워지는 기분입니다."</>,
  },
  {
    name: '김지현 님', role: '마케터',
    text: '"퇴근 후에는 정리할 힘이 없었는데, 집리셋 덕분에 공간이 훨씬 단순해졌어요. 물건이 줄어드니까 생각도 같이 정리되는 느낌이에요."',
  },
]

export default function AppOverview() {
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

      {/* 헤더 */}
      <header className="app-header">
        <div className="header-inner">
          <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>&#60;</button>
          <div className="header-logo"></div>
          <div className="header-icons">
            <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.97-1.67L23 6H6"/></svg>
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="hero-visual">
        <div className="hero-bg-wrap">
          <img className="hero-bg-img" src="/images/visual-img.png" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="hero-brand">ZipReset</div>
        <div className="hero-subtitle">
          <p className="hero-tagline">"비움으로 가치를 찾고, 데이터로 공간을 채우다"</p>
          <p className="hero-desc">AI 공간 분석과 맞춤형 큐레이션으로 완성하는<br />당신만의 프리미엄 라이프스타일 매니지먼트.</p>
        </div>
      </section>

      {/* 다크 비주얼 */}
      <section className="dark-visual">
        <div className="dark-bg-wrap">
          <img className="dark-bg-img" src="/images/visual2 img.png" alt="" />
        </div>
        <div className="dark-overlay">
          <div className="dark-content">
            <h2 className="dark-title">데이터 기반의 정밀한<br />공간 관리</h2>
            <p className="dark-desc">정교한 공간 데이터 분석으로<br />단순한 청소를 넘어 공간의 효율성과<br />흐름을 수치화하고, 비움과 채움의 균형을<br />통해 지속 가능한 집의 순환 구조를 만듭니다.</p>
          </div>
        </div>
      </section>

      {/* 왜 집리셋 */}
      <div className="why-title-wrap">
        <h2 className="why-title">왜, 지금 집리셋이 필요한가</h2>
      </div>

      {/* AI 리포트 */}
      <section className="ai-report">
        <div className="report-top">
          <div>
            <p className="report-sub">AI 공간 진단 리포트</p>
            <p className="report-main-title">거실 공간 상태</p>
          </div>
          <img className="report-icon" src="/images/ao-report-icon.svg" alt="" />
        </div>
        <div className="donut-wrap">
          <svg className="donut-svg" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="62" fill="none" stroke="#e8e8e8" strokeWidth="6" opacity="0.4"/>
            <circle cx="80" cy="80" r="62" fill="none" stroke="#FF8732" strokeWidth="6"
              strokeDasharray="331.1 58.5" strokeLinecap="round"
              transform="rotate(27 80 80)"/>
            <foreignObject x="0" y="0" width="160" height="160">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'4px'}}>
                <div style={{color:'#5A2E2A',fontSize:'48px',fontFamily:'Manrope,sans-serif',fontWeight:'800',lineHeight:'48px',textAlign:'center'}}>85</div>
                <div style={{color:'#5A2E2A',fontSize:'11px',fontFamily:'Pretendard,sans-serif',fontWeight:'400',letterSpacing:'1.2px',textAlign:'center'}}>최적화됨</div>
              </div>
            </foreignObject>
          </svg>
        </div>
        <div className="progress-bars">
          {[{ label: '정리 효율성', value: 92 }, { label: '심미적 밸런스', value: 78 }].map((p) => (
            <div className="progress-item" key={p.label}>
              <div className="progress-meta">
                <span className="progress-label">{p.label}</span>
                <span className="progress-value">{p.value}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${p.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-img-wrap">
          <img className="features-img" src="/images/Container img.png" alt="" />
          <div className="features-img-overlay"></div>
          <div className="features-preview-card">
            <p className="preview-badge">FEATURE PREVIEW</p>
            <p className="preview-text">AR 기술을 통한 공간 시뮬레이션</p>
          </div>
        </div>
        <div className="features-list">
          {[
            { icon: 'ao-feature1-icon.svg', title: '비움 사이클', desc: '체계적 비움, 채움 플랜. 무조건적인 미니멀리즘이 아닌, 당신의 취향이 온전히 드러날 수 있는 선별적 채움을 제안합니다.' },
            { icon: 'ao-feature2-icon.svg', title: 'VR 가상 배치', desc: '물건을 사기 전, 우리 집에 어울리는지 3D로 미리 배치하세요. 오차 없는 정밀한 측정으로 공간 낭비를 방지합니다.' },
          ].map((f) => (
            <div className="feature-item" key={f.title}>
              <div className="feature-icon-wrap">
                <img src={`/images/${f.icon}`} alt="" className="feature-icon" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 관리 방법 */}
      <div className="mgmt-title-wrap">
        <h2 className="mgmt-title">집리셋은 이렇게<br />공간을 관리해요</h2>
      </div>
      <section className="mgmt-section">
        {mgmtItems.map((m) => (
          <div className="mgmt-item" key={m.num}>
            <div className="mgmt-badge">
              <span className="mgmt-num">{m.num}</span>
              <span className="mgmt-label">{m.label}</span>
            </div>
            <p className="mgmt-desc">{m.desc}</p>
          </div>
        ))}
      </section>

      {/* 후기 */}
      <section className="testimonials">
        <h2 className="testimonials-title">함께하는 집리셋 경험</h2>
        <div className="testimonials-scroll">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-profile">
                <div className="profile-avatar">
                  <img src="/images/ao-profile-avatar.png" alt="" className="profile-avatar-img" />
                </div>
                <div className="profile-info">
                  <p className="profile-name">{t.name}</p>
                  <p className="profile-role">{t.role}</p>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">새로운 일상의 시작</h2>
          <p className="cta-desc">지금 바로 AI 진단을 시작하고 프리미엄<br />홈 케어를 경험하세요.</p>
          <button className="cta-btn">첫 공간 진단 받기</button>
        </div>
      </section>

    </div>
  )
}