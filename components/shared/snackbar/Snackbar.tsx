import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
// eslint-disable-next-line import/named
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useContext } from 'react';

import { AppContext } from '@/lib/context/appContext';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  let { activeSnackbar, closeSnackbar } = useContext(AppContext);

  const isActiveSnackbar = !!activeSnackbar?.message;

  if (activeSnackbar?.severity === 'error') {
    return (
            <>
                <Snackbar className='z-40' open={isActiveSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
                    <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
                        {activeSnackbar.message}
                    </Alert>
                </Snackbar>
            </>
    );
  }
  if (activeSnackbar?.severity === 'success') {
    return (
            <>
                <Snackbar open={isActiveSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
                    <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
                        {activeSnackbar.message}
                    </Alert>
                </Snackbar>
            </>
    );
  }
  return (
        <></>
  );
}