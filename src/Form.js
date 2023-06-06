import { useState } from 'react'
import './App.css'
function MyForm() {
  const [inputs, setInputs] = useState({})
  const [car, setCar] = useState('BMW')
  const [textarea, setTexarea] = useState('write your message')

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${inputs.username} ${inputs.age} used ${car}, your's message: ${textarea}`)
  }
  const handleChangeCar = (event) => {
    event.preventDefault()
    setCar(event.target.value)
  }
  const onChangeText = (event) => {
    event.preventDefault()
    setTexarea(event.target.value)
  }

  return (
    <div className="wrapper">
      <form className='formWithHook' onSubmit={handleSubmit}> 
        <input 
          type="text" 
          name="username" 
          placeholder='Enter your name'
          value={inputs.username || ""} 
          onChange={handleChange}
        />
          <input 
            type="text" 
            name="age" 
            placeholder='Enter your age'
            value={inputs.age || ""} 
            onChange={handleChange}
          />
        <input type="submit" />
        <select value={car} onChange={handleChangeCar}>
          <option>Fiat</option>
          <option>Volvo</option>
          <option>BMW</option>
          <option>Reno</option>
        </select>
        <textarea value={textarea} onChange={onChangeText}></textarea>
      </form>
    </div>
  )
}
export default MyForm