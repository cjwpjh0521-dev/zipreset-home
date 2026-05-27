import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/signup-guide.css'

export default function SignupGuide() {
  const navigate = useNavigate()

  useEffect(() => {
    const b = document.body
    b.style.background = '#000'
    b.style.minHeight = '100vh'
    b.style.overflowY = 'auto'
    b.style.display = 'flex'
    b.style.alignItems = 'center'
    b.style.justifyContent = 'center'
    return () => { b.style.cssText = '' }
  }, [])

  return (
    <div className="overlay">
      <div className="modal">

        <div className="modal-title-wrap">
          <p className="modal-title">회원가입 안내</p>
        </div>

        <div className="modal-text-wrap">
          <p className="modal-text">사이트 이용을 위해서는 회원가입이 필요합니<br />다. 회원가입 페이지로 이동하시겠습니까?</p>
        </div>

        <div className="modal-btn-wrap">
          <button className="btn btn-cancel" onClick={() => navigate(-1)}>취소</button>
          <button className="btn btn-signup" onClick={() => navigate('/login-empty')}>회원가입 하기</button>
        </div>

      </div>
    </div>
  )
}