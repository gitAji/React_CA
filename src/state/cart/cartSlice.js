import { createSlice } from '@reduxjs/toolkit';

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
  
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    
    },
   
  },
});


export const { addItem, updateQuantity, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
