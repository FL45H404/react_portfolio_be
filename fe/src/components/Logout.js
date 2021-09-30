import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {actionLogin} from '../reducer/action'
import {useDispatch} from 'react-redux'
const Logout=()=>{
    const dispatch=useDispatch()
    const histroy=useHistory()
    useEffect(()=>{
fetch('/logout',{
    method:"GET",
    headers:{'Content-Type':'application/json'},
    credentials:"include"
}).then((res)=>{
    dispatch(actionLogin())
    histroy.push('/',{replace:true})
    if(res.status!=200){
        const error=new Error(res.error)
        throw error;
    }
}).catch((err)=>{
    console.log(err)
})
    });
return (<>
<h1>logoutpage</h1>
</>)
}
export default Logout;