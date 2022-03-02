import React from "react";

import './search-box.style.css';

export function Searchbox({placeholder,handlechange}){
    return(
        <input type="search"  placeholder={placeholder}
                 onChange={handlechange}/>
    )
}