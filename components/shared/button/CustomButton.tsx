import { styled, Button } from '@mui/material';

export const CustomButton = styled(Button, {})({
  '&.MuiButton-outlined': {
    border: '1px solid var(--color-contrast)',
    color: 'var(--color-contrast)',
  },

  '&:hover': {
    border: '1px solid var(--color-contrast)',

  },
});