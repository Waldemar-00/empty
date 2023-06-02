import React from 'react'
import './App.css'

class InsertText extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    this.onClickButton()
  }
  onClickButton = () => {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <>
        <input className='inputRef' type="text" name="name" ref={this.inputRef}></input>
        <button onClick={this.onClickButton}>Click me for focus!</button>
      </>
    )
  }

}
export default InsertText