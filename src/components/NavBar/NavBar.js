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
       
        
         return (
            <li onClick = {props.sendData} className = "nav-item"> <a className = "nav-link" >{linkName}</a></li>
         )
     });





    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <a href="/" className = "navbar-brand">What Are You Wearing?!! {newday}</a>
            <div className = "collapse navbar-collapse" >
                <ul className = " navbar-nav " >
                    {listItems}
                </ul>
            </div>
        </nav>



    );



    
    

}



export default NavBar;
