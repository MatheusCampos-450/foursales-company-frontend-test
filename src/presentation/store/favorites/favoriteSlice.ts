import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FavoritesState } from './types';

const initialState: FavoritesState = {
  userIds: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.userIds.includes(action.payload)) {
        state.userIds.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.userIds = state.userIds.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
