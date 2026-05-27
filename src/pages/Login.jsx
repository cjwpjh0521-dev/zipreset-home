import { useNavigate } from 'react-router-dom'
import '../../css/login.css'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="screen" id="login-page">

      <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

      <div className="logo-wrap">
        <div className="logo">
          <span className="logo-txt">ZIP</span>
          <img src="/images/logo-r-login.svg" alt="R" className="logo-r" />
          <span className="logo-txt">ESET</span>
        </div>
      </div>

      <div className="form-wrap">
        <input className="input-field" type="email" placeholder="아이디(이메일)를 입력해 주세요." defaultValue="ABC@naver.com" />
        <input className="input-field" type="password" placeholder="비밀번호를 입력해주세요." defaultValue="password123" />

        <div className="find-link-wrap">
          <a href="#" className="find-link">아이디/비밀번호  찾기</a>
        </div>

        <button className="btn-login" onClick={() => navigate('/home')}>로그인</button>
      </div>

      <div className="social-wrap">
        <button className="social-btn kakao">
          <svg viewBox="0 0 24 24" fill="#3C1E1E"><path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.08 4 6.55l-.98 3.65 4.2-2.77c.9.16 1.83.25 2.78.25 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/></svg>
        </button>
        <button className="social-btn naver"><span>N</span></button>
        <button className="social-btn point"><span>P</span></button>
        <button className="social-btn apple">
          <svg viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        </button>
      </div>

      <div className="form-wrap">
        <button className="btn-signup">회원가입</button>
      </div>

      <div className="bottom-links">
        <a href="#" className="bottom-link">비회원 주문조회</a>
        <span className="divider">|</span>
        <a href="#" className="bottom-link">비회원/취소/반품/교환</a>
      </div>

    </div>
  )
}