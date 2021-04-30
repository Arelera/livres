import { useState } from 'react'

export default function SearchMenu({ setBy }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>&darr;</button>
      <ul>
        {expanded &&
          byOptions.map((opt, i) => (
            <li key={i}>
              <button
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
