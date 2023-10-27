import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, { payload }) {
      return payload;
    }
//  deleteContact: (state, action) => {
//   state.contacts = state.contacts.filter(el => el.id !== action.payload)
//  },
//  addContact: (state, action) => {
//   state.contacts = [...state.contacts, action.payload]
//  },
},
  },
);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
