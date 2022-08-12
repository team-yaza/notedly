import styled from "styled-components"
import Header from "./Header"
import Navigation from "./Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  // 700px 이상 스크린에만 레이아웃 적용
  @media (min-width: 700px) {
    display: flex;
    position: relative;
    top: 64px;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`

const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`

export default Layout
