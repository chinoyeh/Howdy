import React, {useState} from 'react'
import {  useHistory } from 'react-router-dom';
import './index.css'

const Login = () => {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState ("");
    const [error, setError] = useState("");
    const history = useHistory();
    const handleLogin = (e)=>{
        e.preventDefault();
        
        if (password === "chinoyeh"&& user ==='chinoyeh' ){
            history.push('/Home');
        }
        else if (password ==="" ||user === ""){
            setError('Feild Cannot be Empty')
        }
        else if (password !=="chinoyeh" ||user !=="chinoyeh"  ){
            setError ('Wrong details')
        }
 
    }
    return (
     
     
   <div className = 'container'>
            <div className ="Login">
       
       <div className ="Login-image">
       
       </div>
       <div >
           <form className ="login-form">
               <h1>Login</h1>
             
               <label htmlFor ="name">Username: </label>
               <input type = "name" id ="name" name ="email" value ={user}   onChange={(e) => setUser(e.target.value)}/>                    
               <label htmlFor = "password">Password: </label>
               <input type ="password" id = "password" name ="password" value ={password}   onChange={(e) => setPassword(e.target.value)}/>
               <button  type = 'submit' onClick ={handleLogin}> Login </button>
               <p style ={{color: "red", marginTop: "10px"}}> {error}</p>
               {/* <p>Don't have an account <Link to  ='/signup'>Sign up</Link></p> */}
           </form>


   </div>
   
</div>
   </div>


    )
}

export default Login

