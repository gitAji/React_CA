import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../utils/constant';
import { addItem } from '../state/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col } from 'antd';
import ReactStars from "react-rating-stars-component";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartNotify = () => toast("Item added to cart!");
  const favNotify = () => toast("Item added to fav!");

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await fetch(url + id);
      let data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, rating, price, discountedPrice, tags, reviews, imageUrl } = product;
  const priceToPrint = discountedPrice ? discountedPrice : price;
  const percentage = ((price - discountedPrice) / price) * 100;

  const handleAdd = () => {
    dispatch(
      addItem({
        id: product.id,
        title: title,
        image: imageUrl,
        price: price,
        qty: 1,
      })
    );
  };

  const handleAddToCart = () => {
    handleAdd();
    cartNotify();
  };

  return (
    <>
      <div className='container'>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <div className='product-img'>
              <img
                src={imageUrl}
                alt={title}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className='product-description'>
              <div>
              <h1>{title}</h1>
              </div>
              <div>
              <p>Description: {description}</p>
              </div>
              <div>
              <h3>Ratings: {rating}</h3>
              <ReactStars
    count={rating}
    size={24}
    activeColor="#ffd700"
    color="#F9715A"
  />
              </div>
              <div>
              {discountedPrice && (
                <h3>Offer: <span className='offer'>{percentage.toFixed(0)}%</span></h3>
              )}
              </div>
              <div>
              <h3>$ {priceToPrint}</h3>
              </div>
              <h4>
                Tags:
                {tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </h4>
              <div>
                {reviews.length > 1 ? (
              
                  <h3>Reviews</h3>

                   

                ) : (
                  <h3>Review:</h3>
                )}
                {reviews.length === 0 && <div>No reviews available.</div>}
                {reviews.map((review) => (
                  <div key={review.id}>
                    User: {review.username}
                    <br />
                    Review: {review.description}
                  </div>
                ))}
              </div>
              <div className='form'>
            
         
 <h2>Add review</h2>
    <input className='input' type="text" name="name" placeholder='Name' />
  
 
    <input className='input' type="textarea" name="review" placeholder='Review' />
 
  <input className='review-btn input' type="submit" value="Submit" />


              </div>

    </div>
          </Col>
        </Row>
      </div>
        <div className='checkout-btn'>
        <div className='bottom-icons'><button className='checkout-button' onClick={handleAddToCart}>{<ShoppingCartOutlined />}</button><ToastContainer style={{ fontSize: '16px'}}/>  </div>        
        <div className='bottom-icons'> <button className='checkout-button'onClick={favNotify} >{ <HeartOutlined  />}</button>  </div>
             
</div>

      
    </>
  );
};

export default ProductView;


