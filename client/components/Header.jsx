import Image from "next/image"

const Header = () => {
  return (
    <header>
      <div>
        <Image src="/logo.svg" />
      </div>
      <h1>Notedly</h1>
    </header>
  )
}
export default Header
