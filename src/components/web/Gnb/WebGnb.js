import './WebGnb.css'

const WebGnb = ({ menu }) => {
  return (
    <>
      <nav id="top_gnb_commerce">
        <div className="menu item_1 active"></div>
        {menu.topMenu.map((item, idx) => <div key={`top_${idx+2}`} className={`menu item_${idx + 2}`}></div>)}
      </nav>
      <nav id="bottom_gnb_commerce">
        {menu.bottomMenu.map((item, idx) => <div key={`bottom_${idx + 2}`} className={`menu item_${idx + 1}`}></div>)}
        <div className="menu item_9 active"></div>
        <div className="menu item_10"></div>
      </nav>
    </>
  )
}

export default WebGnb