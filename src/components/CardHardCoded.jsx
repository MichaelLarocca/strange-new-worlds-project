import React from "react";
import logo from "../img/Icon-STN.png"

export default function CardHardCoded() {
    return (
        <div className="card">
            <div className="card-header">
                <img src={logo} />
                <div>
                    <p className="name">Pike</p>
                    <p className="rank">Fleet Captain</p>
                </div>
            </div>
            <img src="../src/img/Pike.png" alt="Pike"/>
            <p>Captin</p>
            <p>Captin of the star ship Enterprise</p>
            {/* <hr /> */}
        </div>
    )
}