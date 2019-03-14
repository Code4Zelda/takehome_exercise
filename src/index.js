import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'
import App from './App'
import About from '../src/components/About'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <div>
      <div className = 'header'>
      <ul>
        <li>
          <Link className='link' to="/">Home</Link>
        </li>
        <li>
          <Link className='link' to="/about">About</Link>
        </li>
      </ul>
         
        </div>
      
        <Route exact path="/" component={App} 
        />
        
         <Route exact path="/About" component={About} 
        />

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
