import { styled, TextField } from '@mui/material';

export const CssTextField = styled(TextField, {})({
  // input label when focused
  '& .MuiFormLabel-root': {
    zIndex: 0,
    fontFamily: 'var(--poppins-font) !important',
  },

  '& .MuiInputLabel-root': {
    zIndex: 0,
    fontFamily: 'var(--poppins-font) !important',
  },
  
  '& label.Mui-focused': {
    color: '#FB8500',
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FB8500',
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#FB8500',
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#FB8500',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'var(--poppins-font)',
  },
});