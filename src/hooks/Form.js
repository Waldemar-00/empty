import { useState } from 'react'
import '../App.css'
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
  const styles = {
    cssStyle : {
      fontSize: '40px',
      marginTop: '50px',
      color: 'lightblue',
      textAlign: 'center'
    },
    wrapper :  {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      width: '500px',
      minHeight: '200px',
      margin: '50px auto 50px auto'
    },
    formWithHook :  {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px 20px',
      alignContent: 'center'
    },
    hr : {
    marginTop: '35px',
    marginBottom: 0,
    height: '4px',
    backgroundColor: 'blue',
    border: 'none'
    }
  }
  
  return (
    <div style={styles.wrapper}>
      <form style={styles.formWithHook} onSubmit={handleSubmit}> 
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
      <hr style={styles.hr}/>
      <h2 style={styles.cssStyle}>CSS Styles</h2>
    </div>
  )
}
export default MyForm