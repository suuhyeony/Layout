import Aside from "../components/common/Aside/Aside"
import Footer from "../components/common/Footer/Footer"
import Header from "../components/common/Header/Header"
import CommerceContent from "../components/web/Content/CommerceContent"
import DetailList from "../components/web/DetailList/DetailList"

const Web = () => {
  const menu = {
    topMenu: ['쇼핑', '문화', '여행', '레저', '추천', '전체보기'],
    bottomMenu: ['버튼', '버튼', '버튼', '버튼', '버튼', '버튼', '버튼', '버튼']
  }
  return (
    <div id="commerce_wrap">
      <Header type="commerce" menu={menu} />
      <Aside />
      <DetailList />
      <CommerceContent />
      <Footer />
    </div>
  )
}

export default Web