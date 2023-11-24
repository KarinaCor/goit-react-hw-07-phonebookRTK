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
import storage from 'redux-persist/lib/storage';
import { contactsDetailsReducer } from './contactDetails/contactDetails';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    // [contactsSlice.name]: persistReducer(contactsConfig, contactsSlice.reducer),
    // [filterSlice.name]: filterSlice.reducer,
    phonebook: contactsDetailsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
