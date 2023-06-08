import { useEffect, useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  const onChangeCounter = () => {
    setCount(count => count + 1)
  }
  const styles = {
    h1: {
      textAlign: "center",
      margin: '50px auto',
    },
    btn: {
      display: 'block',
      margin: '0 auto'
    }
  }
  return (
    <>
    <h2 style={styles.h1}>Value of the Counter: {count} </h2>
      <button onClick={onChangeCounter} style={styles.btn}>Call counter</button>
    </>
  )

}
export default Counter