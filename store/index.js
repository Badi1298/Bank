import { configureStore } from '@reduxjs/toolkit';

import testimonialsReducer from './testimonials';
import authReducer from './auth';

const store = configureStore({
  reducer: { testimonials: testimonialsReducer, auth: authReducer },
});

export default store;
