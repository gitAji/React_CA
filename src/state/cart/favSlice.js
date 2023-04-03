import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const isAlreadyAdded = state.items.some(item => item.id === action.payload.id);

      if (!isAlreadyAdded) {
        state.items.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav} = favoritesSlice.actions;

export default favoritesSlice.reducer;
