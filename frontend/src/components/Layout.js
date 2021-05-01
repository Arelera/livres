import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>livres</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
