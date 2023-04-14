import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Create () {


  
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const history = useNavigate();

        const header = {"Access-Control-Allow-Origin": "*"};

        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("clicked");
         axios.post("https://642ebb0a2b883abc64157628.mockapi.io/crud-data",
         
         {
            
            name: name,
            email: email,
            header: header,
         })
         
         .then(() => history("/read"))
         
        
        }
  return ( 
    <>
    <div className="d-flex justify-content-between m-3">
    <h2>Create Operation</h2>
    <Link to="/read">
    <button className="btn btn-primary">Show Data</button>
    </Link>
    </div>
    <form className="container">
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
  </div>

 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  );
}

export default Create;
