import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductsList from './components/products'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {

  return (
    <>
      <h1>React JS concepts 2024</h1>
      <ClassBasedComponent />
      {/* <FunctionalComponent/> */}
      {/* <ProductsList listOfProducts = {dummyProductData} name = "Nasir" city = "Gombe" /> */}
    </>
  )
}

export default App
