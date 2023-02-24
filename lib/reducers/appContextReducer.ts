import { AppContextAction } from '@/lib/actions/appContextAction';

import { AppContextState } from '../../types/context';

export const appContextReducer = (state: AppContextState, action: AppContextAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, activeModal: action.payload };
    case 'OPEN_SNACKBAR':
      return { ...state, activeSnackbar: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, activeModal: null };
    case 'CLOSE_SNACKBAR':
      return { ...state, activeSnackbar: null };
    default:
      return state;
  }
};