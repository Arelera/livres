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
    <ul className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-4">
      {books.map((book, i) => (
        <BookItem book={book} bookmarkHandler={bookmarkHandler} key={i} />
      ))}
    </ul>
  )
}
