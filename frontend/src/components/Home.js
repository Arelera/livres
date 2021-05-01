import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import BookList from './BookList'
import { addMore, clearAll, search } from '../store/actions/books'
import Layout from './Layout'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [by, setBy] = useState('title')
  const [page, setPage] = useState(0)
  const books = useSelector((state) => state)

  useEffect(() => {
    dispatch(clearAll())
    setPage(0)
  }, [dispatch, location])

  useEffect(() => {
    setPage(0)
    const timeout = setTimeout(() => {
      if (query) {
        setIsLoading(true)
        dispatch(search(query, by, page)).then(() => {
          setIsLoading(false)
        })
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [dispatch, query, by])

  useEffect(() => {
    if (query) {
      dispatch(addMore(query, by, page))
    }
  }, [dispatch, page])

  const loadMoreHandler = () => {
    setPage((oldPage) => oldPage + 1)
  }

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
      <button onClick={loadMoreHandler}>Load More</button>
    </Layout>
  )
}
