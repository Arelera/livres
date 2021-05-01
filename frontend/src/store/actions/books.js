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

export const clearAll = () => ({ type: 'CLEAR_BOOKS' })

export const getBookmarked = () => {
  return async (dispatch) => {
    const books = await fetch(
      'http://localhost:3001/api/bookmarks'
    ).then((res) => res.json())

    dispatch({
      type: 'GET_BOOKS',
      books,
    })
  }
}

export const bookmarkOne = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/api/bookmarks/${id}`, {
      method: 'POST',
    })
  }
}

export const search = (query, by = 'title') => {
  return async (dispatch) => {
    const books = await fetch(
      `http://localhost:3001/api/books/search?query=${query}&by=${by}`
    ).then((res) => res.json())
    dispatch({
      type: 'GET_BOOKS',
      books,
    })
  }
}
