import ReactDOM from 'react-dom';
import { ReactElement } from 'react';
import { Box } from '@mui/material';

interface ModalI {
  open: boolean;
  children: ReactElement;
}

const Modal = ({ open, children }: ModalI) => {
  if (!open) return null;

  return ReactDOM.createPortal(
        <Box className='modal'>
            {children}
        </Box>, document.body);

};

export default Modal;