export default function Button({ onClick, children }) {
  return (
    <button
      className="shadow px-4 py-2 bg-green-500 text-green-50 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
