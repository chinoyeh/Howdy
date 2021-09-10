import React from 'react'
import { Link } from 'react-router-dom'

const Finances = () => {
    return (
        <div className ="Productivity">
        <div className ='header-productivity'>

<Link to ='/Productivity'> <h3>Back</h3> </Link>
<Link to ='/Worry'> <h3>Next</h3> </Link>
</div> 
   
   <form className ="productivity-form">
   <h1>Let's Track your Finances</h1>
       <h3> Did you exceed your budget</h3>
       <label for="yes">Yes</label>
       <input type ='radio' name ='productivity' value ='yes'/>
       <label for="no">No</label>
       <input type ='radio' name ='productivity' value ='no'/>
       <h3> How much did you spend?</h3>
       <input style ={{width: '300px'}} type ='text'/>
   </form>
</div>
    )
}

export default Finances
