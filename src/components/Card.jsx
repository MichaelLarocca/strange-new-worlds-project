import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} alt={`image: ${props.img}`} />
            <p>{props.name}</p>
            <p>{props.rank}</p>
            <p>{props.position}</p>
            <p>{props.about}</p>
            <hr />
        </div>
    )
}