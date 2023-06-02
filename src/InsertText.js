import React from 'react'
import './App.css'

class InsertText extends React.Component {
  constructor(props) {
    super(props)
    this.elementRef = null
    this.putInElementRef = (element) => {
      this.elementRef = element
    }
  }
  componentDidMount() {
    console.log(this.elementRef)
    this.elementRef.inputRef.focus()
     //API of browser, it is using after create DOM
    // no API for class
  }
  render() {
    return (
      <>
        <CreateInput ref={this.putInElementRef} />
        {/* no API for class */}
        <button className='btnRef'>Click me for focus!</button>
      </>
    )
  }
}
class CreateInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = null
  }
  putInRef = (element) => {
    this.inputRef = element
  }
  render() {
    return (
      <input className='inputRef' type="text" name="name" ref={this.putInRef}></input>
      )
    }
  }

export default InsertText