export const getAll = () => {
  return async (dispatch) => {
    const books = await fetch('http://localhost:3001/api/books').then((res) =>
      res.json()
    )
    dispatch({
      type: 'GET_BOOKS',
      books,
    })
  }
}
