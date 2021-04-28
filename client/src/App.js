import React from 'react'
import './App.css';
import Nav from './components/Nav'
import AddPost from './pages/AddPost'
import Home from './pages/Home'
import Post from './pages/Post'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/addpost' component={AddPost}/>
          <Route path='/:id' component={Post}/>
        

        </Switch>
       </Router>
    </div>
  );
}

export default App;
