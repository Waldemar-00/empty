import { useState } from 'react'
const styles = {
  h: {
    textAlign: 'center',
  },
  input: {
    display: 'block',
    margin: '0 auto'
  }
}
const Component1 = () => {
  const [user, setUser] = useState("Jesse Hall")
  const onChangeName = (e) => {
  setUser(e.target.value)
  }
  return (
    <>
      <h2 style={styles.h}>{`Hello ${user}!`}</h2>
      <input style={styles.input} placeholder='inter your name' name='name'
        onChange={onChangeName}
      />
      <Component2 user={user} />
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <h2 style={styles.h}>Component 2</h2>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h2 style={styles.h}>Component 3</h2>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h2 style={styles.h}>Component 4</h2>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h2 style={styles.h}>Component 5</h2>
      <h3 style={styles.h}>{`Hello ${user} again!`}</h3>
    </>
  );
}
export default Component1