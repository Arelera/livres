import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="containe md:w-5/5 mx-auto text-gray-800 px-4 md:px-10">
      <header className="my-4">
        <h1 className="font-bold text-4xl text-center text-green-500 py-2">
          Livres
        </h1>
        <nav className="text-center">
          <NavLink
            to="/"
            activeClassName="underline text-green-500"
            className="px-2 hover:underline text-lg text-green-400"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/bookmarks"
            activeClassName="underline text-green-500"
            className="px-2 hover:underline text-lg text-green-400"
            exact
          >
            Bookmarks
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
