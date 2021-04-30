import BookItem from './BookItem'

export default function BookList({ books }) {
  return (
    <ul>
      {books.map((book, i) => (
        <BookItem book={book} key={i} />
      ))}
    </ul>
  )
}
