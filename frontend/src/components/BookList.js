import { useDispatch } from 'react-redux'
import { bookmarkOne } from '../store/actions/books'
import BookItem from './BookItem'

export default function BookList({ books }) {
  const dispatch = useDispatch()

  const bookmarkHandler = (book, setBook) => {
    dispatch(bookmarkOne(book.id))
    setBook((prevBook) => ({ ...prevBook, bookmark: true }))
  }

  return (
    <ul>
      {books.map((book, i) => (
        <BookItem book={book} bookmarkHandler={bookmarkHandler} key={i} />
      ))}
    </ul>
  )
}
