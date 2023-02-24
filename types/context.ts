export enum SnackbarTypeI {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export enum ModalTypeI {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
}

export interface AppContextState {
  activeModal: ModalTypeI | null
  activeSnackbar: {
    message: string,
    severity: SnackbarTypeI
  } | null
}

export interface AppContextValue extends AppContextState {
  openModal: (modalType: ModalTypeI) => void;
  closeModal: () => void;
  openSnackbar: (message: string, severity: SnackbarTypeI) => void;
  closeSnackbar: () => void;
}

