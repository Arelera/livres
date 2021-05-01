export default function BookItem({ book }) {
  const data = book.book ? { ...book.book, bookmark: true } : book
  return (
    <li>
      <div>
        <img src={data.image} alt={data.title} />
      </div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.author}</p>
        <div>
          <span>{data.price}$</span>
          {data.bookmark && <span> *bookmarked*</span>}
        </div>
      </div>
    </li>
  )
}
