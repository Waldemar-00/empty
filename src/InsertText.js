import React from 'react'
import './App.css'

class InsertText extends React.Component {
  inputtRef = null
  buttonRef = React.createRef()
  buttonFromClass = React.createRef()
  inputFocus = React.createRef()
  putInElementRef = (element) => {
      this.inputRef = element // put element in inputRef property 
  }
  componentDidMount() {
    this.inputRef.inputRef.current.focus()
    // put element in inputRef property 
  }
  onColorChange = () => {
    this.buttonRef.current.innerText = "SUCCESS"
    this.buttonRef.current.style.backgroundColor = 'rgb(176, 242, 176)'
  }
  changeInputFocus = () => {
    
  }
  render() {
    return (
      <>
        <input className='inputRef' ref={this.inputFocus}></input>
        <CreateInput ref={this.putInElementRef} />
        <button className='btnRef' ref={this.buttonRef} onClick={this.onColorChange}>Click me for focus!</button>
        <CreateButton ref={this.buttonFromClass}/>
      </>
    )
  }
}
class CreateInput extends React.Component {
  inputRef = React.createRef() // put {current: element} in inputRef property 
  render() {
    return (
      <input className='inputRef' type="text" name="name" ref={this.inputRef}></input>
    )
  }
}
class CreateButton extends React.Component {
  buttonRef = React.createRef() // put {current: element} in inputRef property
  onChangeColorInClass = () => {
    this.buttonRef.current.style.backgroundColor = 'rgb(247, 163, 163)'
    this.buttonRef.current.innerText = 'color changed'
  }
  render() {
    return (
      <button className='inputRef' type="text" name="name" ref={this.buttonRef} onClick={this.onChangeColorInClass}>Button from class</button>
      )
    }
  }  

export default InsertText