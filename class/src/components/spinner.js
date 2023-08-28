import React, { Component } from 'react'
import loading from './1485.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={loading} />
      </div>
    )
  }
}

export default Spinner;