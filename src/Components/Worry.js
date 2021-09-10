import React from 'react'
import { Link } from 'react-router-dom'

const Finances = () => {
    return (
        <div className ="Worry" style ={{marginTop:'200px'}}>
        <div className ='header-productivity'>

<Link to ='/Finances'> <h3>Back</h3> </Link>
<Link to ='/Health'> <h3>Next</h3> </Link>
</div> 
   
   <form className ="productivity-form">
 
       <h3> What are you worried about?</h3>
       <input style ={{width: '300px'}} type ='text'/>
       <h3> What are the things you can do about it?</h3>
       <input style ={{width: '300px', height:'50px'}} type ='text'/>
       <h3> What are you going to do about it?</h3>
       <input style ={{width: '300px'}} type ='text'/>
       <h3> When are you going to start it?</h3>
       <input style ={{width: '300px'}} type ='text'/>
   </form>
</div>
    )
}

export default Finances
