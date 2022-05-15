import MobileGnb from '../../mobile/Gnb/MobileGnb'
import './Header.css'
import Logo from '../../../assets/icons/logo.png'
import WebGnb from '../../web/Gnb/WebGnb'

const Header = ({ title, type, menu, toggle }) => {
  if (type === 'simple') {
    return (
      <>
        <header id="main_header">
          <a className="left" href="#">Main</a>
          <h1>{title}</h1>
          <label className="right" htmlFor="toggle">Toggle</label>
        </header>
        <MobileGnb menu={menu} toggle={toggle} />
      </>
    )
  } else if (type === 'commerce') {
    return (
      <>
        <header id="commerce_header">
          <h1 className="logo">
            <a href="#"><img src={Logo} alt="logo" /></a>
          </h1>
          <div className="login_menu">
            <span><a href="#">로그인</a></span>
            <span><a href="#">회원가입</a></span>
            <span><a href="#">고객센터</a></span>
          </div>
        </header>
        <WebGnb menu={menu} />
      </>
    )
  }
}

export default Header