import React from 'react'
import './App.css'

class InsertText extends React.Component {
  constructor(props) {
    super(props)
    // this.inputRef = React.createRef()
    this.elementRef = null
    this.putInElementRef = (element) => {
      this.elementRef = element
    }
  }
  // componentDidMount() {
    // if (this.elementRef)this.onClickButton()
  // }
  onClickButton = () => {
    // this.inputRef.current.focus()
    if(this.elementRef) this.elementRef.focus()
  }
  render() {
    return (
      <>
        <input className='inputRef' type="text" name="name" ref={this.putInElementRef}></input>
        <button className='btnRef'onClick={this.onClickButton}>Click me for focus!</button>
      </>
    )
  }

}
export default InsertText