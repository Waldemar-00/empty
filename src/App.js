import './App.css'
import InsertText from './InsertText'
import Portal from './Portal'
import MyForm from './Form'
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
    </>
  )
}

export default App;
