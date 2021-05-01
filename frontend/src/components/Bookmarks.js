import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './Layout'
import BookList from './BookList'
import { addMoreBookmarked, getBookmarked } from '../store/actions/books'
import { useState } from 'react'

export default function Bookmarks() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    dispatch(getBookmarked()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  useEffect(() => {
    if (page) {
      dispatch(addMoreBookmarked(page))
    }
  }, [dispatch, page])

  return (
    <Layout>
      {isLoading ? <p>Loading...</p> : <BookList books={books} />}
      <button onClick={() => setPage((oldPage) => oldPage + 1)}>
        Load More
      </button>
    </Layout>
  )
}
