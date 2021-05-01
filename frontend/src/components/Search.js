import SearchMenu from './SearchMenu'

export default function Search({ query, by, setBy, setQuery }) {
  return (
    <div className="flex mx-auto shadow-md w-full sm:w-2/3 xl:w-2/5 mb-4">
      <input
        className="px-4 py-2 w-full border-r-100 border-gray-100 "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <SearchMenu by={by} setBy={setBy} />
    </div>
  )
}
