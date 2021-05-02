const baseUrl = ''

export const search = (query, by = 'title', page = 0) => {
  return async (dispatch) => {
    const books = await fetch(
      `${baseUrl}/api/books/search?query=${query}&by=${by}&page=${page}`
    ).then((res) => res.json())
    dispatch({
      type: 'GET_BOOKS',
      books,
    })
  }
}

export const getBookmarked = () => {
  return async (dispatch) => {
    const books = await fetch(`${baseUrl}/api/bookmarks`).then((res) =>
      res.json()
    )

    dispatch({
      type: 'GET_BOOKS',
      books,
    })
  }
}

export const addMore = (query, by, page) => {
  return async (dispatch) => {
    const books = await fetch(
      `${baseUrl}/api/books/search?query=${query}&by=${by}&page=${page}`
    ).then((res) => res.json())

    dispatch({
      type: 'ADD_BOOKS',
      books,
    })
  }
}

export const addMoreBookmarked = (page) => {
  return async (dispatch) => {
    const books = await fetch(
      `${baseUrl}/api/bookmarks?page=${page}`
    ).then((res) => res.json())

    dispatch({
      type: 'ADD_BOOKS',
      books,
    })
  }
}

export const clearAll = () => ({ type: 'CLEAR_BOOKS' })

export const bookmarkOne = (id) => {
  return async (dispatch) => {
    await fetch(`${baseUrl}/api/bookmarks/${id}`, {
      method: 'POST',
    })
  }
}
