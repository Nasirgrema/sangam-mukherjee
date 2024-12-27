import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductsList from './components/products'
import Users from './components/Users'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {

  return (
    <>
      <h1>React JS concepts 2024</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductsList listOfProducts =
       {dummyProductData} name = "Aramma" city = "Gombe" /> */}
      <Users />
    </>
  )
}

export default App
