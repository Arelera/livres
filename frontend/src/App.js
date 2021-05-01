import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bookmarks" component={Bookmarks} exact />
      </Switch>
    </Router>
  )
}
