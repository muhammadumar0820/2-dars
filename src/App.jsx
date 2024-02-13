import Cars from './components/Cars';
import data from './assets/data/cars.json';
import './App.css'

function App() {

  return (
    <>
      <Cars cars = {data}/>
    </>
  )
}

export default App
