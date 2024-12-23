import ProductItem from './components/product-item.jsx';
import './style.css';

function ProductsList({name, city, listOfProducts}) {
  const flag = true;
  function renderTextBlock(getFlag){
       return getFlag ? <h4>
        Name is {name}, he/she is belongs to this city {city}
       </h4> : <h4>Hello world</h4>;
  }
  return(
    <div>
      <h3 className='title'>ECommerce project</h3>
      {/* <ProductItem /> */}
      {
        renderTextBlock(flag)
      }
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