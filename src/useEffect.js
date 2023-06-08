import { useEffect, useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  return (
    <h1>Value of the Counter: {count} </h1>
  )

}
export default Counter