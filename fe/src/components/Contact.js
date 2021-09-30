import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'
const Contact=()=>{
const[detail,setDetail]=useState({
  name:"",email:"",number:"",message:""
})
let name,value;
const handleInput=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setDetail({...detail,[name]:value})
}
const contact=async (e)=>{
  e.preventDefault();
  const {name,email,number,message}=detail;
  if(name&&email&&message){
    const data=await fetch('/contact',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,email,number,message})
    })
    console.log(data)
    const response=await data.json()
    if(data.status===200){
      toast.success('Message Sent...', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        setDetail({
          name:"",email:"",number:"",message:""
        })
    }else{
      toast.error('something went wrong ', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }else{
    toast.warn('enter all fields ', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
}
  return(
    <>
    <div className="container">
    <div className="row mt-4">
      
    
    <div className="col-md-6 text-center mt-5">
    <form method="post">
    <div className="mb-3 row display-5">
    Contact Page
  </div>
  
  <div className="mb-3 row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name="name" onChange={handleInput} value={detail.name} className="form-control"  autoComplete="off" id="name" required/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name="email" onChange={handleInput} value={detail.email} className="form-control" autoComplete="off" required/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="Mobile" className="col-sm-2 col-form-label">Mobile</label>
    <div className="col-sm-10">
      <input type="text" name="number" onChange={handleInput} value={detail.number} className="form-control"  autoComplete="off" id="Mobile" required/>
    </div>
  </div>
  <div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Message</label>
  <div className="col-sm-10">
  <textarea name="message" onChange={handleInput} value={detail.message} className="form-control" placeholder="Enter your message here"  autoComplete="off" id="floatingTextarea" required></textarea>
</div>
</div>
<div className="d-flex justify-content-center">
<button onClick={contact}type="button" className="btn btn-primary">SEND</button>
<ToastContainer />
    </div>
    </form>
    </div>
    
    <div className="col-md-6">
    <img src="contact.JPEG" className="img-thumbnail" alt="..."/>
    </div>
    </div>
    </div>
    </>
  )
}
export default Contact;