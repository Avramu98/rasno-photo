import { createContext } from 'react';

import { AppContextState, AppContextValue, ModalTypeI, SnackbarTypeI } from '../../types/context';

export const initialAppContextState: AppContextState = {
  activeSnackbar: null,
  activeModal: null,
};

export const openModal = (dispatch: any, modalType: ModalTypeI) => {
  document.body.style.overflow = 'hidden';
  dispatch({ type: 'OPEN_MODAL', payload: modalType });
};
export const closeModal = (dispatch: any) => {
  document.body.style.overflow = 'unset';
  dispatch({ type: 'CLOSE_MODAL' });
};
export const openSnackbar = (dispatch: any, message: string, severity: SnackbarTypeI) => {
  dispatch({ type: 'OPEN_SNACKBAR', payload: { message, severity } });
};
export const closeSnackbar = (dispatch: any) => {
  dispatch({ type: 'CLOSE_SNACKBAR' });
};

export const AppContext = createContext<AppContextValue>({
  activeModal: null,
  activeSnackbar: null,
  openModal: () => {
  },
  openSnackbar: () => {
  },
  closeModal: () => {
  },
  closeSnackbar: () => {
  },
});
