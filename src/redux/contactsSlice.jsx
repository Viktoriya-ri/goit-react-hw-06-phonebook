import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: {items:[]},

};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, action) {
        state.items = [...state.items, action.payload];
    },

      // prepare(name, number) {
      //   return {
      //     payload: {
      //       name,
      //       number,
      //       id: nanoid(),
      //     },
      //   };
      // },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id !== action.payload);
      state.items.splice(index, 1);
    },
  },
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
