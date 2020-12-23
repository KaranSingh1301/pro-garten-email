import React from 'react'
import InputEmail from './InputEmail'
import './Body.css'

function Body() {
    return (
        <>
<div className="row" >
        <div className="col-lg">
          <img  className="body-img" alt="" src="/images/cs.png"/>
          
        </div>
        <div className="body-content col-lg" >
          <h1>Welcome are launching soon</h1>
          <h2 style={{fontWeight:"lighter"}}>India's First Clinical Career Counselling Initiative</h2>
          <h2 style={{lineHeight:"7rem"}}>Book your free session today with us</h2>
       
        <InputEmail />
        
        </div>
</div>
       



       </>
        

    )
    
};

export default Body
