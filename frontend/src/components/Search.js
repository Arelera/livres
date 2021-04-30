import SearchMenu from './SearchMenu'

export default function Search({ query, setBy, setQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <SearchMenu setBy={setBy} />
    </div>
  )
}
