import React from "react";
import "./card.style.css";

export function Card (props)
{
    return(
    <div className="card-container">
        <img alt ="monsters"src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
        
        <h1>{props.monsters.email}</h1>
        <h1>{props.monsters.username}</h1><h2>{props.monsters.name}</h2>
        <h1>{props.monsters.address.city}</h1>

    </div>
)}