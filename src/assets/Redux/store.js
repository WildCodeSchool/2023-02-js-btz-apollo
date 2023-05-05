import { configureStore, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    isOpen: true
  },
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { toggleOpen } = homeSlice.actions;

const store = configureStore({
  reducer: {
    home: homeSlice.reducer
  }
});

export default store;
