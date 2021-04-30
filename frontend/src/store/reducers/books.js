export default function reducer(state = null, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return action.books
    default:
      return state
  }
}
