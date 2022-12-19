import { PayloadAction, Action } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ControlState } from './types';

export const initialState: ControlState = {
  detailModalState: {
    isOpen: false,
    data: {
      title: '',
      body: '',
      modeler: -1,
    },
  },
};

const slice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    setDetailModal(state, action: PayloadAction<any>) {
      state.detailModalState = { ...state.detailModalState, ...action.payload };
      return state;
    },
    closeDetailModal(state, action: Action<any>) {
      state.detailModalState = { ...initialState.detailModalState };
      return state;
    },
  },
});

export const { actions: controlActions } = slice;

export const useControlSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useControlSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
