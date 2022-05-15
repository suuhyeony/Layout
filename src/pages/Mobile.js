import Content from "../components/common/Content/Content"
import Header from "../components/common/Header/Header"
import Footer from "../components/common/Footer/Footer"

const Mobile = () => {
  const menu = {
    toggleMenu: ['버튼', '버튼', '버튼', '버튼', '버튼', '버튼', '버튼', '버튼'],
    topMenu: ['버튼', '버튼', '버튼', '버튼'],
    bottomMenu: ['버튼', '버튼', '버튼', '버튼', '버튼']
  }
  return (
    <>
      <input id="toggle" type="checkbox" />
      <div id="wrap">
        <Header title="Mobile" type="simple" menu={menu} toggle={true} />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default Mobile