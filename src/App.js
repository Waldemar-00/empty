import './App.css'
import InsertText from './InsertText'
import Portal from './Portal'
import MyForm from './hooks/Form'
import MyCar from './hooks/CarObject'
import Counter from './hooks/useEffect'
import Component1 from './hooks/MoveProps'
import ComponentWithContext from './hooks/createContext'
function App() {
  const name = 'Jone'
  const age = 28
  const array = ['Jack', 34]
  const object = {
    work: 'Frontend',
    job: 'React'
  }
  return (
    <>
    <div className="div">
      <p>name: {name} <br/> age: {age} <br/> work: {object.work}</p>
      <hr/>
      <p>name: {array[0]} <br /> age: {array[1]} <br /> work: {object.job}</p>
      <InsertText />
      </div>
      <Portal />
      <MyForm />
      <MyCar />
      <Counter />
      <Component1 />
      <hr style={{
        height: '5px', width: '500px',
        border: 'none', backgroundColor: 'lightblue',
        display: 'block', margin: '15px auto'
      }} />
      <ComponentWithContext/>
    </>
  )
}

export default App;
