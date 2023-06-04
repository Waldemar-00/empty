import React from 'react'
import './App.css'

class InsertText extends React.Component {
  buttonRef = React.createRef()
  buttonFromClass = React.createRef()
  blurFocus = React.createRef()
  getFocus = React.createRef()
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
    if (this.blurFocus.current.value === 'aaaa') {
      this.getFocus.current.focus()
    }
  }
  render() {
    return (
      <>
        <label htmlFor='blur'>Blur focus</label>
        <input id='blur' className='inputRef' ref={this.blurFocus} onChange={this.changeInputFocus}></input>
        <label htmlFor='getFocus'>Get focus</label>
        <input id='getFocus' className='inputRef' ref={this.getFocus}></input>
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