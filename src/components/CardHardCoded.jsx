import React from "react";
import logo from "../img/Icon-STN.png";

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
			<img className="img-character" src="../src/img/Pike.png" alt="Pike" />
			<p className="position">Captin</p>
			<p className="about">
				Captain Christopher Pike is the commanding officer of the USS Enterprise
				during the era of the original Star Trek series. He is known for his
				intelligence, bravery, and strong moral character.
			</p>
			{/* <hr /> */}
		</div>
	);
}
