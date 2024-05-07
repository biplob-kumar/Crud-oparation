
import React, { useState } from 'react';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}

from 'mdb-react-ui-kit';

import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [age, setage] = useState();
  const navigate=useNavigate();

  const submit=(e)=>{
   e.preventDefault();
  axios.post("http://localhost:3000/createUser",{name,email,age})
  .then(result =>{
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
  }


  

  return (
    <div>

   <form action="" onSubmit={submit}>



   <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
   

     <MDBCard className='m-5' style={{maxWidth: '600px'}}>

<MDBCardBody className='px-5'>
  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  <MDBInput wrapperClass='mb-4' label='Your Name'  size='lg' id='form1' type='text' 
  onChange={(e) => setname(e.target.value)} 
  
  />
  <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' 
      onChange={(e) => setemail(e.target.value)}
  />
  <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form3' type='Age'
      onChange={(e) => setage(e.target.value)}
  />
  <button className='btn btn-success'>Submit</button>


</MDBCardBody>
</MDBCard>

    </MDBContainer>

   </form>

    </div>
  )
}

export default CreateUser







