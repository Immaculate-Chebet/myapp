const Thirdcomponent=()=>{
    // variables enable us to create dynamic websites(the content of the website will be changing over time)
    //variables are usually declared just before the return statement in reactjs

    let name ='Immaculate';
    let age=52;
    let message='I love programming'

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            <h5>My name is; {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And{message}</h5>
        </div>
    )

}
export default Thirdcomponent;
