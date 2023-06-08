import { useEffect, useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  const [multi, setMulti] = useState(0)
  
  useEffect(() => {
    // setTimeout(() => {setCount(count => count + 1)}, 1000)
    setMulti(() => count * 2)
  }, [count])
  const onChangeCounter = () => {
    setCount(count => count + 1)
  }
  const styles = {
    h2: {
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
    <h2 style={styles.h2}>Value of the Counter: {count} </h2>
      <button onClick={onChangeCounter} style={styles.btn}>Call counter</button>
    <h2 style={styles.h2}>After multiplication: {multi} </h2>
    </>
  )

}
export default Counter