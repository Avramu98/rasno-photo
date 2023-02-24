import { useReducer } from 'react';

import { appContextReducer } from '@/lib/reducers/appContextReducer';
import { closeModal, closeSnackbar, initialAppContextState, openModal, openSnackbar } from '@/lib/context/appContext';

import { ModalTypeI, SnackbarTypeI } from '../../types/context';

export const useAppContext = () => {
  const [appContextState, appContextDispatch] = useReducer(appContextReducer, initialAppContextState);
  const { activeModal, activeSnackbar } = appContextState;

  const contextHandlers = {
    openModal: (modalType: ModalTypeI) => openModal(appContextDispatch, modalType),
    closeModal: () => closeModal(appContextDispatch),
    openSnackbar: (message: string, severity: SnackbarTypeI) => openSnackbar(appContextDispatch, message, severity),
    closeSnackbar: () => closeSnackbar(appContextDispatch),
  };

  return { contextValues: { ...contextHandlers, activeModal, activeSnackbar } };
};

