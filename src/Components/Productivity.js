import React from 'react'
import { Link } from 'react-router-dom';

const Productivity = () => {
    return (
        <div className ="Productivity">
                 <div className ='header-productivity'>
        
       <Link to ='/Home'> <h3>Back</h3> </Link>
       <Link to ='/Finances'> <h3>Next</h3> </Link>
        </div> 
            
            <form className ="productivity-form">
            <h1>Let's Track your Productivity</h1>
                <h3> Were you productivity today?</h3>
                <label for="yes">Yes</label>
                <input type ='radio' name ='productivity' value ='yes'/>
                <label for="no">No</label>
                <input type ='radio' name ='productivity' value ='no'/>
                <h3> What did you do today?</h3>
                <input style ={{width: '300px'}} type ='text'/>
            </form>
        </div>
    )
}

export default Productivity
