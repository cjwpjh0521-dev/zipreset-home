export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-links">
        <div className="footer-link-item">
          집리셋 문의
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 14.92z" /></svg>
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </div>
        <div className="footer-link-item">
          A/S 문의
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .38 1.97.74 2.9a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.36 1.9.61 2.9.74A2 2 0 0122 14.92z" /></svg>
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </div>
      </div>
      <div className="footer-biz-info">
        <span>사업자번호: 123-45-67890</span>
        <span>전화번호: 02-1234-5678</span>
        <span>이메일: support@zipreset.com</span>
      </div>
      <div className="footer-logo">
        <span className="footer-logo-txt">ZIP</span>
        <img src="/images/logo-r-footer.svg" alt="R" className="footer-logo-r" />
        <span className="footer-logo-txt">ESET</span>
      </div>
    </footer>
  )
}