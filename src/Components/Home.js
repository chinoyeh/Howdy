import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    // const [greeting ,setGreeting] = useState("");
 var today =  new Date();
 var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
 var time = today.getHours() ;
 var greeting;
 if (time >=0 && time <=12){
     greeting ='Good morning'
 }
 else if (time >=13 && time <=16){
    greeting ='Good Afternoon'
 }
 else {
     greeting ='Good Evening'
 }


    return (
        <div className = 'homepage'>  
        <div className ='header'>
         <h3>{date}</h3>
       <Link to ='/'> <h3>Logout</h3> </Link>
        </div>
            <h1>Howdy! </h1>
            <h2> {greeting}  </h2>
           
        <form>
        <p> How are you doing today?</p>
            <input type = 'text'name ='feeling'/>
            <button> Unpack your day?</button>
        </form>
        </div>
    )
}

export default Home
