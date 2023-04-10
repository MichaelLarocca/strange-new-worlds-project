import React from "react";
import logo from "../img/Icon-STN.png";

// export default function Card(props) {
// 	return (
// 		<div className="card">
// 			<p>Name: {props.name}</p>
// 			<p>Rank: {props.rank}</p>
// 			<img src={props.src} alt={props.src} />
// 			<p>Position: {props.position}</p>
// 			<p>About: {props.about}</p>
// 		</div>
// 	);
// }

export default function Card(props) {
	return (
		<div className="card">
			<div className="card-header">
				<img src={logo} />
				<div>
					<p className="name">{props.name}</p>
					<p className="rank">{props.rank}</p>
				</div>
			</div>
			<img
				className="img-character"
				src={props.src}
				alt={`image: ${props.src}`}
			/>
			<p className="position">{props.position}</p>
			<p className="about">{props.about}</p>
		</div>
	);
}
