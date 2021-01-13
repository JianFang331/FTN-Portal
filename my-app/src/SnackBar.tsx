import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';

import App from "../../../../jameslocal/Jameslocal/src/App";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MenuItemType } from "../../../../jameslocal/Jameslocal/src/global/types/MenuItemType";
import Photo from "../../../../jameslocal/Jameslocal/src/global/views/Photo";
import Race from "../../../../jameslocal/Jameslocal/src/global/views/Race";
import Profile from "../../../../jameslocal/Jameslocal/src/global/views/Profile";
import * as Global from "../../../../jameslocal/Jameslocal/src/global/views";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.background.paper,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    snackbar: {
      [theme.breakpoints.down('xs')]: {
        bottom: 90,
      },
    },
  }),
);

// export default function FabIntegrationSnackbar() {
const FabIntegrationSnackbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              // href="#LoginPage"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              App Bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Snackbar
          open
          autoHideDuration={6000}
          message="Archived"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
          className={classes.snackbar}
        />
      </div>
    </React.Fragment>
  );
}

export default FabIntegrationSnackbar