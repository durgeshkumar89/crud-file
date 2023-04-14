import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Update = () => {
     const [id, setId] = useState(0);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");

     const navigate = useNavigate();

     useEffect(() => {
       setId (localStorage.getItem("id"));
       setName (localStorage.getItem("name"));
       setEmail (localStorage.getItem("email"));

     }, [])

const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://642ebb0a2b883abc64157628.mockapi.io/crud-data/${id}`,
    {name: name, email: email,}
    
    ).then(() => {
        navigate("/read");
    })
}

  return (
    <>
    
    <h2>Update Operation</h2>
    <form className="container">
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>

 
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
  <Link to="/read">
  <button className='btn btn-secondary mx-3'>Cancel</button>
  </Link>
</form>

    </>
  )
}

export default Update;