import React, { Component } from 'react'
import Newsitem from './newsitem'

export class News extends Component {
  render() {
    return (
      <div>
        this is news page
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
      </div>
    )
  }
}

export default News
