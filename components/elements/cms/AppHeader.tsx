import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

import React from 'react';

export const AppHeader = () => {
  return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Picture CMS
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
  );
};