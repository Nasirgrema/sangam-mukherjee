import {useEffect, useState} from 'react';
import ProductItem from './components/product-item.jsx';
import './style.css';

const initialState = true;
function ProductsList({name, city, listOfProducts}) {
const [flag, setFlag] = useState(initialState);
const [count, setCount] = useState(0);
const [changeStyle, setChangeStyle] = useState(false);

function handleToggleText(){
  setFlag(!flag);
}

function handleIncreaseCount(){
  setCount(count + 1);
}
useEffect(()=>{
  setFlag(!flag);
  console.log('run only once page load');

  return ()=>{
    console.log('component is getting unmounted -> some side effect also');
  }

}, []);//this will only run on page load once
useEffect(()=>{
 if(count === 10) setChangeStyle(true);
},[count]);
console.log(changeStyle);
  
  return(
    <div>
      <h3 className='title'>ECommerce project</h3>
      <button onClick={handleToggleText}>Toggle</button>
      {/* <ProductItem /> */}
      { 
      flag ?(<h4>{name} and {city}</h4>) : (<h4>Hello</h4>)
      }
      <div>
        <button style={{backgroundColor: changeStyle ? 'black' : 'white',
           color: changeStyle ? '#ffffff' : '#000000',
           }}
            onClick={handleIncreaseCount}
        >
              Increase count
        </button>
        <p> count is {count}</p>
      </div>
      <ul>
        {
          listOfProducts.map((item, index)=>(
            <ProductItem singleProductItem={item} key={index} />
          ))
        }
      </ul>
    </div>
  );
}
export default ProductsList;