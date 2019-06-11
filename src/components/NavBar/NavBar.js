import React from "react";
import styles from "./NavBar.css";



const getTodaysDate = () =>{

    const today = new Date();

    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const date = month + "/" + day + "/" + year;


    return date;
}






const NavBar = (props) =>{
    
    const newday = getTodaysDate();
    
    



    let listItems =  props.links.map( (item) =>{
        const linkName =  item.newTitle;
       
        console.log(linkName);
        
         return (
            <li onClick = { props.sendData.bind(null, linkName)} className = "nav-item"> <a className = "nav-link" >{linkName}</a></li>
         )
     });





    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <a href="/" className = "navbar-brand">Weather {newday}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#authentication" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id = "authentication" >
                <ul className = " navbar-nav " >
                    {listItems}
                </ul>
            </div>
        </nav>



    );



    
    

}



export default NavBar;
