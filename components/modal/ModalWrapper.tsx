import ReactDOM from 'react-dom';
import { Box } from '@mui/material';

import { ModalI } from '../../types/misc';

const ModalWrapper = ({ activeModal, children }: Partial<ModalI>) => {
  if (!activeModal) return null;

  return ReactDOM.createPortal(
        <Box style={{ zIndex: 999 }} className='modal'>
            {children}
        </Box>, document.body);
};

export default ModalWrapper;