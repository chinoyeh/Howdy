import React from 'react'
import { Link } from 'react-router-dom';

const Health = () => {
    return (
        <div className ="Productivity">
                 <div className ='header-productivity'>
        
       <Link to ='/Home'> <h3>Back</h3> </Link>
       <Link to ='/Finances'> <h3>Next</h3> </Link>
        </div> 
            
            <form className ="productivity-form">
                <h3> How is your mental Health today?</h3>
                <input style ={{width: '300px'}} type ='text'/>
               <p> <button> View Today</button></p>

            </form>
        </div>
    )
}

export default Health
