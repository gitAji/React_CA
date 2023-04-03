import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity,checkout,clearCart } from '../state/cart/cartSlice';
import {Link} from 'react-router-dom'
import {CloseOutlined} from '@ant-design/icons' 
import {storeCartItems} from '../utils/localStorage'

const Cart = () => {
  const { items, total } = useSelector((storeCartItems) => storeCartItems.cart  );
  const dispatch = useDispatch();

  const handleQuantityChange = (e, itemId) => {
    const newQty = e.target.value;
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  if (items.length === 0) {
    return <div className='wrapper'>
      <p>Your cart is empty!</p>
      <Link to='/'><button>Home</button></Link>
      </div>;
}


const handleCheckOut = () => {

  dispatch(checkout());
  dispatch(clearCart());
  window.location.href = '/success';
};

  return (
    <>
      <div className='checkout'>
        {items.map((item) => (
          <div className='cart-product' key={item.id}>
            <div className='cart-img'>
            <img src={item.image} alt={item.title} />
            </div>
            <div>  {item.title} Price: Kr{item.price}</div>
            <input className='quantity'
              size={3}
              value={item.qty}
              type='number'
              min={0}
              onChange={(event) => handleQuantityChange(event, item.id)}
            />
            <div className='add-button'>
            <CloseOutlined  style={{ fontSize: '1.25rem', color: '#FF6E4A' }} onClick={() => {
          dispatch(removeItem(item));
        }} /> 
        </div>       
        </div>
        ))}
        <div className='total'>        <h3>Total: {total.toFixed(2)}</h3>
</div><hr className='line'/>
      </div>
      <div className='checkout-button'>      
      <button onClick={handleCheckOut}>Checkout</button>
      </div>

 
    </>
  );
  
};

export default Cart;
