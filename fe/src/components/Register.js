import { useState } from "react"
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register=()=>{
   
  const history=useHistory()
const [user,setUser]=useState({
  username:"",email:"",password:"",cpassword:""
})
let name,value;
const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user, [name]:value})
}
const registerUser=async (e)=>{
  e.preventDefault()
const {username,email,password,cpassword}=user;
const data=await fetch('/register',{
  method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({username,email,password})
});
console.log(data)
const response=await data.json()
console.log(response)
if(data.status===500 || !data){
  toast.warn('email exist click on Login', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  history.push('/register')
}else if(data.status===201){
  history.push('/login')
}

}
  return(<>
  <div className="container">
   <ToastContainer/>
    <div className="row align-items-center mt-4 register">
    <div className="display-5">Register</div>
    <form method="post">
      <div className="offset-md-4 col-md-4 ">
      <div className="mb-3 row">
    <label htmlFor="username" className="col-sm-3 col-form-label">Name</label>
    <div className="col-sm-9">
      <input type="text" name="username" value={user.username} onChange={handleInputs} className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
    <div className="col-sm-9">
      <input type="text" name="email" value={user.email}  onChange={handleInputs} className="form-control" id="staticEmail"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
    <div className="col-sm-9">
      <input type="password" name="password" value={user.password}  onChange={handleInputs} className="form-control" id="password"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">CPassword</label>
    <div className="col-sm-9">
      <input type="password" name="cpassword" value={user.cpassword}  onChange={handleInputs} className="form-control" id="inputPassword"/>
    </div>
  </div>
  <button type="button" onClick={registerUser}  className="btn btn-primary">Register</button>
      </div>
      </form>
</div>
  </div>
  </>)
}
export default Register;