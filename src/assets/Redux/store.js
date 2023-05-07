import { configureStore, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    isOpen: true
  },
  reducers: {
    toggleOpenHome: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleOpenCard: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});



export const { toggleOpenHome } = homeSlice.actions;
export const { toggleOpenCard } = cardSlice.actions;

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    card: cardSlice.reducer
  }
});

export default store;
