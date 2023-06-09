import { useRef, useState, useEffect } from 'react'

const KeepPreviousValue = () => {
  const [value, setValue] = useState('')
  const previousValue = useRef('')
  useEffect(() => {
    previousValue.current = value
  }, [value])
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'center',
    }}>
      <hr style={{
        border: 'none',
        height: '5px', width: '500px',
        backgroundColor: 'purple',
        margin: '15px auto'
    }}/>
    <h2>Previous value: {previousValue.current}</h2>
      <input placeholder='inter your value' name='text' onChange={onChangeValue}/>
    <h2>Next value: {value}</h2>
    </div>
  )
}
export default KeepPreviousValue