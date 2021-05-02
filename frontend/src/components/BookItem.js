import { useState } from 'react'
import { BookmarkFilled, BookmarkOutline } from './icons'

export default function BookItem({ book, bookmarkHandler }) {
  const [data, setData] = useState(
    book.book ? { ...book.book, bookmark: true } : book
  )

  return (
    <li className="flex shadow-md md:min-h-56 rounded-xl px-3 py-4 bg-white">
      <div className="h-full w-1/4 md:w-1/3 flex-shrink-0">
        <img
          className="object-cover h-full w-full"
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow pt-3 pl-3">
        <div>
          <h2 className="font-semibold">{data.title}</h2>
          <p className="text-xs text-gray-400 mb-1.5">ISBN {data.isbn}</p>
          <p className="text-gray-600">{data.description}</p>
        </div>
        <div className="flex justify-between pt-2">
          <span className="font-semibold">{data.price} </span>
          {data.bookmark ? (
            <span className="">
              <BookmarkFilled />
            </span>
          ) : (
            <button onClick={() => bookmarkHandler(data, setData)}>
              {<BookmarkOutline />}
            </button>
          )}
        </div>
      </div>
    </li>
  )
}
