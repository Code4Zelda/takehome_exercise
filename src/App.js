import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../src/components/Home.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default connect()(App)
