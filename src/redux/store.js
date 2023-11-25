import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter.slice';
import { contactsSlice } from './contact/contacts.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './contactOperation/contactOperation';


const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    
  },
middleware
});