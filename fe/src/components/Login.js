import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { NavLink } from 'react-router-dom'
// import {actionLogin} from '../reducer/action'
import {actionLogin} from '../reducer/action'
import {useDispatch} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },label:{backgroundColor:"white",marginTop: theme.spacing(-0.3)},
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login=()=>{
 const dispatch=useDispatch()
const history=useHistory()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const login=async (e)=>{
  e.preventDefault();
  const data=await fetch('/login',{
    method:'POST',
    headers:{'Content-Type':'application/json'},credentials:'include',
    body:JSON.stringify({email,password})
  });
  console.log(data)
  const response=await data.json()
  console.log(response)
  if(data.status===400 || !response){
      history.push('/login')

      toast.error('invalid credentials', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        progressStyle:({background:'red'}),
        });
  }else{
    dispatch(actionLogin())
    history.push('/')
  }
}
const classes = useStyles();
return(<>
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form method="POST" className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            InputLabelProps={{classes:{root:classes.label}}}
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            InputLabelProps={{classes:{root:classes.label}}}
            value={password} onChange={(e)=>{setPassword(e.target.value)}}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={login}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );

<ToastContainer/>
</>
)}
export default Login
