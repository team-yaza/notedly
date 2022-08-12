import Image from "next/image"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderBar>
      <Image src="/logo.svg" height="40" width="40" />

      <LogoText>Notedly</LogoText>
    </HeaderBar>
  )
}

const HeaderBar = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;

  padding: 0.5em 1em;

  z-index: 1;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

  background-color: #fff;
`

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`

export default Header
