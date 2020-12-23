import React,{useState} from 'react';
import './InputEmail.css';
import axios from "axios";

function InputEmail() {
    const[email, inputEmail] =useState();
   
    function updateEmail(e){
    e.preventDefault();
    const newEmail = email;
    alert(`Email is ${email}`)
    axios.post("http://localhost:3001/", {
        email: newEmail
    });
    inputEmail("");
    }

    return (
        <React.Fragment>
           <form onSubmit={updateEmail}>
               
               <div className="input-group ">
               <input type="email" className=" input " id="ex2" placeholder="Email" value={email} onChange={e =>inputEmail(e.target.value)}/>
            <div className="input-group-append">
              <button id="button" className="form-control" type="Submit" >Subscribe</button>
            </div>
        </div>
            
          
           </form>
      
        </React.Fragment>
    )
}

export default InputEmail
