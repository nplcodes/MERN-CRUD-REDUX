import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { usersActions } from "./redux/userSlice";

function Users() {
    const dispatch = useDispatch()
    const users = useSelector((state)=> state.users.users);

    
    const handleDelete = (id)=>{
        axios.delete('http://localhost:3000/delete/'+id)
        .then(()=>{
            dispatch(usersActions.deleteUser({id}))
            console.log(users)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div className="d-flex vh-100 bg-primary  align-items-center">
        <div className="w-100 bg-white rounded p-3">
            <Link to='/create' className="btn btn-success btn-sm">
                Add +
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return  <tr> 
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className="btn btn-sm btn-success">Update</Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        {/*  */}
    </div>
  )
}

export default Users