import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addMore, clearAll, search } from '../store/actions/books'
import Search from './Search'
import BookList from './BookList'
import Layout from './Layout'
import Button from './Button'

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
    content = <P className="text-center">Start typing to search for books</P>
  } else {
    if (books.length) {
      content = (
        <>
          <BookList books={books} />
          <div className="text-center py-8">
            <Button onClick={loadMoreHandler}>Load More</Button>
          </div>
        </>
      )
    } else {
      content = <P>No books found</P>
    }
  }

  return (
    <Layout>
      <Search query={query} by={by} setBy={setBy} setQuery={setQuery} />
      {isLoading ? <P>Searching...</P> : content}
    </Layout>
  )
}

const P = ({ children }) => {
  return <p className="text-center ">{children}</p>
}
