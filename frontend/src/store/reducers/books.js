export default function reducer(state = null, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return action.books
    case 'ADD_BOOKS':
      return [...state, ...action.books]
    case 'CLEAR_BOOKS':
      return null
    default:
      return state
  }
}
