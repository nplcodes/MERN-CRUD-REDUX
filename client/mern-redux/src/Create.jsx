import axios from "axios";
import { useState } from "react";
import { usersActions } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:3000/create', {
            name, email, age
        })
        .then((response)=>{
            dispatch(usersActions.addUser(response.data))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add user</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" 
                    placeholder="Enter name"
                    className="form-control"
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" 
                placeholder="ener email"
                className="form-control"
                onChange={(e)=> setEmail(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" 
                placeholder="enter age"
                className="form-control"
                onChange={(e)=> setAge(e.target.value)}
                />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

        
    </div>
  )
}

export default CreateUser