import { useState, createContext, useContext } from 'react'
const userMove = createContext()
const styles = {
  h: {
    textAlign: 'center',
  },
  input: {
    display: 'block',
    margin: '0 auto'
  }
}
const ComponentWithContext = () => {
  const [user, setUser] = useState("Jesse Hall")
  const onChangeName = (e) => {
    setUser(e.target.value)
  }
  return (
    <userMove.Provider value={user}>
      <h2 style={styles.h}>{`Hello ${user}!`}</h2>
      <input style={styles.input} placeholder='inter your name' name='name'
        onChange={onChangeName}
      />
      <Component2/>
    </userMove.Provider>
  );
}
function Component2() {
  return (
    <>
      <h2 style={styles.h}>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2 style={styles.h}>Component 3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h2 style={styles.h}>Component 4</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(userMove)
  return (
    <>
      <h2 style={styles.h}>Component 5</h2>
      <h3 style={styles.h}>{`Hello ${user} again!`}</h3>
    </>
  );
}
export default ComponentWithContext