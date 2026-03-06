import { useState } from "react"
const Sixthcomponent=()=>{
    const[weight,setWeight]=useState(50)
    return(
        <div className="Sixthcomponent">
            <h1>Sixthcomponent</h1>
            <h5>My weight is{weight}</h5>
            <button onClick={ ()=>setWeight(55)}>Click to update weight</button>
        </div>
    )
}
export default Sixthcomponent; 