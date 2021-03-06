import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import books from './reducers/books'

export default createStore(books, applyMiddleware(thunk))
