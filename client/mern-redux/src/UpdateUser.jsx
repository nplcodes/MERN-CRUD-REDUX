import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { usersActions } from "./redux/userSlice";

function UpdateUser() {
    const {id} = useParams()
    const users = useSelector((state)=> state.users.users);
    const user = users.find((user)=> user.id === id)
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.put('http://localhost:3000/update/'+id, {
            name, email, age
        })
        .then(()=>{
            dispatch(usersActions.updateUser({name, email,age, id})) 
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
                <h2>Update user</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" 
                    placeholder="Enter name"
                    className="form-control"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" 
                placeholder="ener email"
                className="form-control"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" 
                placeholder="enter age"
                className="form-control"
                value={age}
                onChange={(e)=> setAge(e.target.value)}
                />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

        
    </div>     );
}

export default UpdateUser;