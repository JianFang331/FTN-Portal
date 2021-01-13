import React from 'react'
// import { AuthForm } from './Auth.components'
// import Box from '@material-ui/core/Box';
// import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/SendRounded';
import FabIntegrationSnackbar from '../SnackBar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
      textAlign: 'center',
    },
    control: {
      padding: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
  }),
);

const LoginPage = () => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid container direction="column" justify="center" alignItems="center">

                <h1>Login Page</h1>
                {/* <label htmlFor="username">Username</label> */}
                {/* <input placeholder="Username"/> */}
                <TextField 
                    id="outlined-basic" 
                    label="Username" variant="outlined"
                    type="username" />
                {/* <label htmlFor="password">Password</label> */}
                <TextField 
                    id="outlined-basic" 
                    label="Password" variant="outlined"
                    type="password" />
                {/* <input placeholder="password" type="password"/> */}
                {/* <button type="submit">Login</button> */}
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    href="Snackbar">
                    Login
                </Button>
                </Grid>
                </Grid>
        </div>
    )
}

export default LoginPage
