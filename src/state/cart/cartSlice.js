import { createSlice } from '@reduxjs/toolkit';
import { storeCartItems } from '../../utils/localStorage';

const initialState = {
  items: [],
  total: 0,
  qty: [],
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    addItem: (state, action) => {
      let isFound = state.items.some((item) => {
        if (action.payload.id === item.id) {
          return true;
        }
        return false;
      });

      if (isFound) {
        let qtyIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[qtyIndex].qty += 1;
        state.total = state.total + action.payload.price;
      }
     
      else {
        state.items.push(action.payload);
        state.total = state.total + action.payload.price;
      }
      storeCartItems(state);
    },
    updateQuantity: (state, action) => {
      let TotalQtyIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[TotalQtyIndex].qty = action.payload.quantity;
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      storeCartItems(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      storeCartItems(state);
    },
   
    checkout: (state) => {
      const cartData = {
        items: state.items,
        total: state.total,
      };
      storeCartItems(cartData);
    },
     clearCart: (state) => {
      // Reset 
      state.items = [];
      state.total = 0;
    },
  },
});


export const { addItem, updateQuantity, removeItem,checkout,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
