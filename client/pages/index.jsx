import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Sparkle from "../components/Sparkle"

export default function Home() {
  return (
    <div>
      <h1>Notedly</h1>
      <p>this is home</p>

      <ul>
        <li>
          <Link href="/mynotes">
            <a>My Notes</a>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
