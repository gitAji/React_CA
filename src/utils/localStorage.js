export const storeCartItems = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items));

};
