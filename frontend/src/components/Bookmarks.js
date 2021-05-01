import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './Layout'
import BookList from './BookList'
import { getBookmarked } from '../store/actions/books'
import { useState } from 'react'

export default function Bookmarks() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getBookmarked()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  return (
    <Layout>
      {isLoading ? <p>Loading...</p> : <BookList books={books} />}
    </Layout>
  )
}
