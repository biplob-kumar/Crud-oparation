import React, { useEffect, useState } from 'react'
import {

    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,

  }

  from 'mdb-react-ui-kit';

import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const UpdateUser = () => {
  const {id}=useParams()

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [age, setage] = useState();
  const navigate=useNavigate();

  useEffect(() => {

    axios.get('http://localhost:3000/getUser'+id)
    .then(result=> { console.log(result) 
       setname(result.data.name)
       setemail(result.data.email)
       setage(result.data.age)
    })
    .catch(err=> console.log(err) )
    
    }, [])

    const update=(e)=>{
      e.preventDeafult();
      axios.put("http://localhost:3000/updateUser"+id ,{name,email,age})
      .then(result =>{
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
      
    }
    

  return (
    <form action="" onSubmit={update}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
    <div className='mask gradient-custom-3'></div>
    <MDBCard className='m-5' style={{maxWidth: '600px'}}>

      <MDBCardBody className='px-5'>
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' value={name}
          onChange={(e) => setname(e.target.value)} 
        />
        <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' value={email}
          onChange={(e) => setname(e.target.value)} 
        />
        <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form3' type='Age'  value={age}
          onChange={(e) => setname(e.target.value)} 
        />
        <button className='btn btn-success'>Update</button>


      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  </form>
  )
}

export default UpdateUser