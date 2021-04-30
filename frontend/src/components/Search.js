export default function Search({ query, setQuery }) {
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}
