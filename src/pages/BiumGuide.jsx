import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/bium-guide.css'

export default function BiumGuide() {
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

      <header className="guide-header">
        <button className="header-back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          &#60;
        </button>
        <h1 className="header-title">비우기 가이드</h1>
      </header>

      <section className="bg-hero-visual">
        <div className="bg-hero-img-wrap">
          <img src="/images/code-box.png" alt="비우기 가이드 배경" className="bg-hero-img" />
        </div>
        <div className="bg-hero-gradient"></div>
        <div className="bg-hero-text">
          <p className="bg-hero-title">비우는 기준을 알려드려요</p>
          <p className="bg-hero-desc">전문적인 공간 관리를 위한 준비를 시작하세요. 우리의 가이드는 무엇을 남기고 무엇을 비울지 정리하여 원활한 전환을 도와드립니다.</p>
        </div>
      </section>

      <section className="process-section">
        <div className="process-title-row">
          <img src="/images/bg-process-icon.svg" alt="" className="process-icon" />
          <span className="process-title-text">단계별 프로세스</span>
        </div>
        <div className="process-body">
          <div className="step-block">
            <div className="step-label-box">
              <span className="step-label">STEP 1&nbsp;&nbsp;상담신청 / 사전상담 </span>
            </div>
            <p className="step-desc">물건들을 '필수' , '기부' , '폐기' 더미로 분류하세요.</p>
          </div>
          <div className="step-block">
            <div className="step-label-box">
              <span className="step-label">STEP 2&nbsp;&nbsp;문서화 </span>
            </div>
            <p className="step-desc step-desc--sm">보험 및 서비스 기록을 위해 고가 품목의 사진을 찎어두세요.</p>
          </div>
          <button className="guide-start-btn">가이드 시작하기</button>
        </div>
      </section>

      <section className="tips-section">
        <div className="tip-box">
          <div className="tip-box-header">
            <img src="/images/bg-checklist-icon.svg" alt="" className="tip-box-icon" />
            <span className="tip-box-title">필수 체크리스트</span>
          </div>
          <ul className="checklist">
            <li>
              <img src="/images/bg-dot1-icon.svg" alt="" className="dot-icon" />
              <span>공공요금 차단</span>
            </li>
            <li>
              <img src="/images/bg-dot2-icon.svg" alt="" className="dot-icon" />
              <span>열쇠 준비</span>
            </li>
          </ul>
        </div>
        <div className="tip-box">
          <div className="tip-box-header">
            <img src="/images/bg-trash-icon.svg" alt="" className="tip-box-icon tip-box-icon--wide" />
            <span className="tip-box-title">폐기 팁</span>
          </div>
          <div className="trash-desc">
            <p>처리하기 어려운 대형<br />폐기물과 위험물, 안전하게<br />비우는 방법을 확인해보세요</p>
            <p className="trash-link">&nbsp;→ 상세보기</p>
          </div>
        </div>
      </section>

      <section className="expert-tip-section">
        <div className="expert-tip-bg">
          <p className="expert-tip-title">전환을 위한 전문가 팁</p>
          <div className="expert-tip-card">
            <div className="skill-img-wrap">
              <img src="/images/비우기가이드-skill-img.png" alt="효율적인 패킹" className="skill-img" />
            </div>
            <div className="skill-text">
              <p className="skill-title">효율적인 페킹 시스템</p>
              <p className="skill-desc">비우는 동안 가업의 유산을 분류하기 위한<br />'Z-Methood'를 배워보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-section">
        <div className="consult-inner">
          <img src="/images/bg-expert-icon.svg" alt="" className="consult-icon" />
          <p className="consult-title">전문가의 도움이 필요하신가요?</p>
          <p className="consult-desc">저희 컨시어지 팀이 물리적인 정리와 분류를 도와드릴 수 있습니다.</p>
          <button className="consult-btn">전문가와 상담하기</button>
        </div>
      </section>

    </div>
  )
}