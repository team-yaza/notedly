import Image from "next/image"

const Header = () => {
  return (
    <header>
      <Image src="/logo.svg" height="40" width="40" />

      <h1>Notedly</h1>
    </header>
  )
}

export default Header
