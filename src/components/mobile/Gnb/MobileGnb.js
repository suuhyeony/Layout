import './MobileGnb.css'

const MobileGnb = ({ menu, toggle }) => {
  return (
    <>
      {toggle && <div id="toggle_gnb_wrap">
        <div id="toggle_gnb">
          <ul>
            {menu.toggleMenu.map((item, idx) => (<li key={`toggle-${idx}`}><a href="#">{item}</a></li>))}
          </ul>
        </div>
      </div>}
      <nav id="top_gnb">
        {menu.topMenu.map((item, idx) => (<div key={`top-${idx}`}><a href="#">{item}</a></div>))}
      </nav>
      <nav id="bottom_gnb">
        {menu.bottomMenu.map((item, idx) => (<div key={`bottom-${idx}`}><a href="#">{item}</a></div>))}
      </nav>
    </>
  )
}

export default MobileGnb