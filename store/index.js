import { configureStore } from '@reduxjs/toolkit';
import testimonialsReducer from './testimonials';

const store = configureStore({
  reducer: { testimonials: testimonialsReducer },
});

export default store;
