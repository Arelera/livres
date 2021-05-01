import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import BookList from './BookList'
import { clearAll, search } from '../store/actions/books'
import Layout from './Layout'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [by, setBy] = useState('title')
  const books = useSelector((state) => state)

  useEffect(() => {
    dispatch(clearAll())
  }, [location])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        setIsLoading(true)
        dispatch(search(query, by)).then(() => {
          setIsLoading(false)
        })
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [dispatch, query, by])

  let content
  if (!books) {
    content = <p>Start searchin to see results.</p>
  } else {
    if (books.length) {
      content = <BookList books={books} />
    } else {
      content = <p>No books found.</p>
    }
  }

  return (
    <Layout>
      <Search query={query} setBy={setBy} setQuery={setQuery} />
      {isLoading ? <p>Loading...</p> : content}
    </Layout>
  )
}
