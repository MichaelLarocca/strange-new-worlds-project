import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.src} alt={`image: ${props.src}`} />
            <p>{props.name}</p>
            <p>{props.rank}</p>
            <p>{props.position}</p>
            <p>{props.about}</p>
            {/* <hr /> */}
        </div>
    )
}