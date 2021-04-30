import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, search } from './store/actions/books'
import BookList from './components/BookList'
import Search from './components/Search'

export default function App() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [by, setBy] = useState('title')
  const books = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        dispatch(search(query, by))
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [dispatch, query, by])

  if (!books) {
    return <p>Start typing to search for books.</p>
  }

  return (
    <main>
      <Search query={query} setBy={setBy} setQuery={setQuery} />
      <BookList books={books} />
    </main>
  )
}
