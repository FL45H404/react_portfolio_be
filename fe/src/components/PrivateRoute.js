import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const PrivateRoute=({children,...rest})=>{
    const isAuth=useSelector(state=>state.isLogin);
    // const isAuth=false
    return(<Route {...rest} render={()=>isAuth?(children):<Redirect to={'/login'}/>}/>);
}
export default PrivateRoute;