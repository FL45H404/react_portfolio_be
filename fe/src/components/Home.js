// import "../public/css/style.css"
// import "../public/js/main.js"
import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
// import {} from 'react-router-dom'
const Home=()=>{
  const classes = useStyles();
  return(
    <>
<section className="hero-wrap js-fullheight mt-5">
      <div className="overlay mt-5">

      </div>
      <div className="container mt-4">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 ftco-animated d-flex align-items-center">
          	<div className="text text-center">
          		<span className="subheading">Hey! I am</span>
		  				<h1>Vipul Waghamode</h1>
			  				<h2>I'm a  <span> MERN Developer</span>
								</h2>
                <div className={classes.root}>
<Link to="/about">
<Fab variant="extended">
  <NavigationIcon className={classes.extendedIcon} />
  Click Me
</Fab>
</Link>
</div>
							</div>
            </div>
          </div>
        </div>
    
      <div className="mouse">
			
			</div>
    </section>

        </>
  )
}
export default Home;