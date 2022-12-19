import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.control || initialState;

export const selectControl = createSelector([selectSlice], state => state);
