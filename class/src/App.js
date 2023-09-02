import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/news'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
            
          />
          <Routes>
            <Route path='/home' element={<News setProgress={this.setProgress}   key={'home'} pageSize={5} country='in' category='general' />} />
            <Route path='/' element={<News setProgress={this.setProgress}   key={'sports'} pageSize={5} country='in' category='sports' />} />
            <Route path='/general' element={<News setProgress={this.setProgress}   key={'general'} pageSize={5} country='in' category='general' />} />
            <Route path='/business' element={<News setProgress={this.setProgress}   key={'business'} pageSize={5} country='in' category='business' />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress}   key={'entertainment'} pageSize={5} country='in' category='entertainment' />} />
            <Route path='/health' element={<News setProgress={this.setProgress}   key={'health'} pageSize={5} country='in' category='health' />} />
            <Route path='/science' element={<News setProgress={this.setProgress}   key={'science'} pageSize={5} country='in' category='science' />} />
            <Route path='/technology' element={<News setProgress={this.setProgress}   key={'technology'} pageSize={5} country='in' category='technology' />} />
          </Routes>
        </Router>



      </div>
    )
  }
}
