export default function BookItem({ book }) {
  return (
    <li>
      <div>
        <img src={book.image} />
      </div>
      <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <div>
          <span>{book.price}$</span>
          {book.bookmark && <span> *bookmarked*</span>}
        </div>
      </div>
    </li>
  )
}
