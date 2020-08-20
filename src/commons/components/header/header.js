import React from "react";
import "./header.css"
import photo from './photo.png'; 
function Header (props) {
    
    return(
        <div className="header">
            <img src={photo} className="photo" />
            <h1>{props.author}</h1>
        </div>
    )
}


Header.defaultProps={
    author:"Mihalcea Cosmin"
}
export default Header;

