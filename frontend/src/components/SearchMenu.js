import { useState } from 'react'

export default function SearchMenu({ by, setBy }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="relative flex-shrink-0">
      <button className="px-4 py-2" onClick={() => setExpanded(!expanded)}>
        by {by} &darr;{' '}
      </button>
      <ul className="absolute bg-white shadow rounded">
        {expanded &&
          byOptions.map((opt, i) => (
            <li key={i}>
              <button
                className="w-full text-left px-4 py-1 hover:bg-gray-100"
                onClick={() => {
                  setExpanded(false)
                  setBy(opt)
                }}
              >
                {opt}
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
const byOptions = ['title', 'description', 'isbn']
