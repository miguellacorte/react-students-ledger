import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import users from "./users";
import 'bootstrap/dist/css/bootstrap.css';
import linkPic from "./linkedin.png"



function App() {

  // console.log(users)
  
  const [name,setName] = useState('');
  const [search,setSearch] = useState('');
  const [userList, setUserList] = useState(users)
  const [studentCheck,setStudentCheck] = useState(false);
  const [teacherCheck,setTeacherCheck] = useState(false);
  
  // console.log(search.toLowerCase())

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSearch = {search};
    console.log("Submitted:",newSearch );
  
  }

  const filteredUsers = userList.filter(user =>{
    if (user.lastName.toLowerCase().includes(search.toLowerCase()) || user.firstName.toLowerCase().includes(search.toLowerCase()) ){
      return true
    } else {
      return false
    }
  });

 
  const handleIsStudentChange = e => {
    setStudentCheck(e.target.checked)

    if (studentCheck === true) {
      setUserList(users)
     } else {
       const checkboxFunct =  userList.filter(user => 
         user.role === 'student')
        setUserList(checkboxFunct);
     }

  }

  const handleIsTeacherChange = e => {
    setTeacherCheck(e.target.checked)
    console.log(e.target.checked)

    if (teacherCheck === true) {
      setUserList(users)
     } else {
       const checkboxFunct =  userList.filter(user => 
         user.role === 'teacher')
        setUserList(checkboxFunct);
     }

  }
  
   

  return (
    <div>

    <form onSubmit={handleSubmit} >
      <label> Search:</label>
      <input 
      type="text"
      value={search}
      placeholder="Search by name"
      name="input" 
      onChange = {(e)=> setSearch(e.target.value)}
      />

      <label>
        <input 
        type="checkbox" 
        value='Student'
        checked={studentCheck}
        onChange = {handleIsStudentChange}
        />
        Students
      </label>  

      <label>
        <input 
        type="checkbox" 
        value='teacher'
        checked={teacherCheck}
        onChange = {handleIsTeacherChange}
        />
        Teachers
      </label>  


      

    </form>
    

    <div className='Table'>
    <table> 
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
      </thead>

    <tbody>
    
      {filteredUsers.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td>{user.linkedin ? <img height="16" src={linkPic}/> : ""}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
    </div>
   
    </div>
 

  );
}

export default App
