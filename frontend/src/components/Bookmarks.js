import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoreBookmarked, getBookmarked } from '../store/actions/books'
import Layout from './Layout'
import BookList from './BookList'
import Button from './Button'

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
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <BookList books={books} />
      )}
      <div className="py-8 text-center">
        <Button onClick={() => setPage((oldPage) => oldPage + 1)}>
          Load More
        </Button>
      </div>
    </Layout>
  )
}
