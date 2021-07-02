import './App.css'
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Articles from './Components/Articles'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Sign Up</Link>
        <Link to='/Articles'>Articles</Link>
      </nav>
      <h1>This is a test application!</h1>

      <Switch>
        <Route path={'/Login'}>
          <Login/>
        </Route>
        <Route path={'/SignUp'}>
          <SignUp/>
        </Route>
        <Route path={'/Articles'}>
          <Articles/>
        </Route>
        <Route path={'/'}>
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
