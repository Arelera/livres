import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from './store/actions/books'

export default function App() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state)
  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div>
      {books && !books.error ? (
        books.map((book, i) => (
          <p key={i}>
            {book.title} {book.bookmark && ' - bookmarked'}
          </p>
        ))
      ) : (
        <p>got nothin</p>
      )}
    </div>
  )
}
