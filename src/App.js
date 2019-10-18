import React from 'react'
import RandomQuote from './RandomQuote'
import SavedQuote from './SavedQuote'
import AddQuote from './AddQuote'
import ListAllQuotes from './ListAllQuotes'
import './App.css'
// import Todo from './Todo'
// import Profile from './Profile'
// import Person from './Person';
// import UsersList from './UsersList'
// import Contact from './Contact'

import {BrowserRouter,Link,Route} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <h2 className='App-header'>Quote of the Day</h2>
      <BrowserRouter>
      {/* <Link to='/Person'>Person</Link>&nbsp;|&nbsp;
      <Link to='/Profile'>Profile</Link>&nbsp;|&nbsp;
      <Link to='/Users'>Users</Link>&nbsp;|&nbsp;
      <Link to='/Todo'>Todo</Link>&nbsp;|&nbsp;
      <Link to='/Contact'>Contact</Link>&nbsp;|&nbsp;
      <br/><br/>

      <Route path='/Contact' component={Contact}/>
      <Route path='/Person' component={Person}/>
      <Route path='/Todo' render={() => <Todo tasks={JSON.parse(localStorage.getItem('tasks'))}/> }/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/Users' component={UsersList}/> */}
      <div className='App-div'>
      <Link className='App-link' to='/random-quote'>Random Quote(API)</Link>
      <Link className='App-link' to='/saved-quote'>Random Quote(Local)</Link>
      <Link className='App-link' to='/add-quote'>Add Quote</Link>
      <Link className='App-link' to='/list-all-quotes'>List All Quotes(Local)</Link>
      </div>
      
      <Route path='/random-quote' component={RandomQuote} />
      <Route path='/saved-quote' component={SavedQuote} />
      <Route path='/add-quote' component={AddQuote} />
      <Route path='/list-all-quotes' component={ListAllQuotes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
