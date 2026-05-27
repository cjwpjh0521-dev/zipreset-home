import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/category.css'

const leftItems = [
  { label: '서비스 소개', href: '/app-overview' },
  { label: '비움센터',    href: '/buyout',                active: true },
  { label: '채움스토어', href: '/furniture-category' },
  { label: '케어서비스', href: '/care-service' },
  { label: '포인트하우스', href: '/point-house' },
]

const sections = [
  {
    title: '비움센터',
    items: [
      { label: 'AI 가구 상태 분석',  icon: 'cat-icon-bium1.svg',   href: '/ai-analysis' },
      { label: '중고 매입 서비스',    icon: 'cat-icon-bium2.svg',   href: '/buyout' },
      { label: '공간 비우기 가이드',  icon: 'cat-icon-bium3.svg',   href: '/bium-guide' },
    ],
  },
  {
    title: '채움스토어',
    items: [
      { label: '가구 카테고리',      icon: 'cat-icon-chaeum1.svg', href: '/furniture-category' },
      { label: '패브릭 조명',        icon: 'cat-icon-chaeum2.svg', href: '/lighting-category' },
      { label: 'VR 스타일 패키지',   icon: 'cat-icon-chaeum3.svg', href: '/vr-scan' },
    ],
  },
  {
    title: '케어 서비스',
    items: [
      { label: '가전 분해 청소',     icon: 'cat-icon-care1.svg',   href: '/care-service' },
      { label: '가구 살균 캐어',     icon: 'cat-icon-care2.svg',   href: '/care-service' },
      { label: '설치 & 수리',        icon: 'cat-icon-care3.svg',   href: '/care-service' },
    ],
  },
  {
    title: '포인트 하우스',
    items: [
      { label: '포인트 샵',          icon: 'cat-icon-point1.svg',  href: '/point-house' },
      { label: '집리셋 클럽',        icon: 'cat-icon-point2.svg',  href: '/membership' },
      { label: '나의 보유 포인트',   icon: 'cat-icon-point3.svg',  href: '/point-house' },
    ],
  },
]

export default function Category() {
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
      <header className="cat-header">
        <span className="header-title">카테고리</span>
        <button className="close-btn" onClick={() => navigate('/home')}>✕</button>
        <div className="header-divider"></div>
      </header>

      <div className="cat-body">
        <nav className="cat-left">
          {leftItems.map((item) => (
            <a
              key={item.label}
              className={`cat-item${item.active ? ' active' : ''}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="cat-right">
          {sections.map((sec) => (
            <section className="sub-section" key={sec.title}>
              <div className="sub-header">
                <h3 className="sub-title">{sec.title}</h3>
                <hr className="sub-divider" />
              </div>
              <ul className="sub-list">
                {sec.items.map((item) => (
                  <li key={item.label}>
                    <a className="sub-link" href={item.href}>
                      <span>{item.label}</span>
                      <img src={`/images/${item.icon}`} alt="" className="sub-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
