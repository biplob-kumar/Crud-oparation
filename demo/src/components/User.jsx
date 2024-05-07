import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [user, setuser] = useState([])

useEffect(() => {

axios.get('http://localhost:3000')
.then(result=> setuser(result.data) )
.catch(err=> console.log(err) )

}, [])


  return (
    <div className='vh-100 d-flex bg-primary justify-content-center  align-items-center'>
      <div className="w-50 bg-whiite rounded  p-3">
        <Link to='/create' className='btn btn-success' > Add + </Link>
           <table className='table'>
               <thead>
                  <tr>
                    <td> Name</td>
                    <td> Email</td>
                    <td> Age</td>
                    <td> Action</td>
                </tr>
               </thead>
               <tbody >
              {
                user.map((user)=>{
                    return <tr key={user._id} >
                        <td> {user.name} </td>
                        <td> {user.email} </td>
                        <td> {user.age} </td>
                        <td>
                        <Link to={`/update ${user._id}`} className='btn btn-success' > Update </Link>
                     <button  className='btn btn-danger mx-3'> Delete </button>
                        </td>
                    </tr>
                })
              }
               </tbody>
           </table>
      </div>
    </div>
  )
}

export default User