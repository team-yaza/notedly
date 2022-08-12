import Link from "next/link"
import styled from "styled-components"

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link href="/">
            <a>
              <span aria-hidden="true" role="img">
                🏠{" "}
              </span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mynotes">
            <a>
              <span aria-hidden="true" role="img">
                📝{" "}
              </span>
              My Notes
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <a>
              <span aria-hidden="true" role="img">
                ⭐️{" "}
              </span>
              Favorites
            </a>
          </Link>
        </li>
      </NavList>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`

export default Navigation
