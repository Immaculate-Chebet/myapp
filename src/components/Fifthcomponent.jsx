import { useState } from "react";

const Fifthcomponent=()=>{
    //the useState()enables us to create dynamic websites whereby it usually has the start /initial state that get shown when some effects happen on our websites

    const[number,setNumber]=useState(10);
    return(
        <div className="Fifthcomponent">
            {/* below we bind our value for number */}
            <h1>Welcome to my fifth component</h1>
            <h2>current number is {number}</h2>
            {/* call the set number function to update the number after a click effect */}
            <button onClick={()=>setNumber(20)}>Click to update the number</button>
        </div>
    )
}
export default Fifthcomponent;