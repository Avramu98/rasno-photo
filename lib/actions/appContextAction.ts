export interface AppContextAction {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL' | 'OPEN_SNACKBAR' | 'CLOSE_SNACKBAR'
  payload: any;
}