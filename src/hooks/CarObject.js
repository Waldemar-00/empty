import { useState } from 'react'
const MyCar = () => {
  const [car, setCar] = useState(
    {
      brand: 'Mercedes-Benz',
      color: 'Yellow',
      class: 'A-Class Hatchback',
      placeholder: 'write your color'
    }
  )
  const onChangeColor = () => {
    const input = document.querySelector('#input')
    setCar(carObj => {
      return { ...carObj, color : input.value }
    })
    input.focus()
  }
  const styles = {
    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    input: {
      margin: '10px auto 15px auto',
    }
  }
  return (
    <div style={styles.div}>
      <h2>{car.brand}</h2>
      <p>{car.class}</p>
      <p>{car.color}</p>
      <input
        id='input'
        type='text'
        name='color'
        placeholder={car.placeholder}
        style={styles.input}/>
      <button onClick={onChangeColor}>Change color</button>
    </div>
  )
}
export default MyCar