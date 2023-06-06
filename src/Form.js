import { useState } from 'react'
import './App.css'
function MyForm() {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${inputs.username} ${inputs.age}`)
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
        </form>
    </div>
  )
}
export default MyForm