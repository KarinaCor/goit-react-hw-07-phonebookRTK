import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contacts: [], // [{}, {}, ...]
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContacts(state, { payload }) {
      // state.products = [...state.products, payload];
      state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(product => product.id !== payload);
    },
  },
});

// Генератори екшен криейторів
export const { deleteContacts, addContacts } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
