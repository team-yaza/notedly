import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Sparkle from "../components/Sparkle"

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  )
}
