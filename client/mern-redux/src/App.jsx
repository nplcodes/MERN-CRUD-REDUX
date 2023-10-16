import './App.css'
import Users from './Users'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './Create';
import { useEffect } from "react"
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {usersActions} from './redux/userSlice'
import UpdateUser from './UpdateUser';
function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
      const fetchData = async()=>{
          try {
               const response = await axios.get('http://localhost:3000/');
               dispatch(usersActions.getUser(response.data))
          } catch (error) {
              console.log(error);
          }
      }
      fetchData();
  })

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/edit/:id" element={<UpdateUser />} />

    </Routes>
  </Router>
  )
}

export default App
