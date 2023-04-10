import "./HardCodedCard.css";
import Card from "../src/components/";
import characters from "./data.jsx";

function App() {
	const cards = characters.map((character) => {
		return (
			<Card
				key={character.key}
				src={character.src}
				name={character.name}
				rank={character.rank}
				position={character.position}
				about={character.about}
			/>
		);
	});

	return <main className="ctn-main">{cards}</main>;
}

export default App;

// function App() {
// 	return (
// 		<main className="ctn-main">
// 			<Card
// 				src="../src/img/Pike.png"
// 				name="Pike"
// 				rank="Fleet Captain"
// 				position="Captain"
// 				about="Captain Christopher Pike is the commanding officer of the USS
// 					Enterprise during the era of the original Star Trek series. He is known
// 					for his intelligence, bravery, and strong moral character."
// 			/>
// 			<Card
// 				src="../src/img/Spock.png"
// 				name="Spock"
// 				rank="Science Officer"
// 				position="Commander"
// 				about="Spock is a half-human, half-Vulcan officer serving aboard the USS Enterprise. He is known for his logical and unemotional approach to problem-solving, as well as his close friendship with Captain Kirk."
// 			/>
// 			<Card
// 				src="../src/img/ChristineChapel.png"
// 				name="Christine Chapel"
// 				rank="Fleet Captain"
// 				position="Head Nurse"
// 				about="Christine Chapel is a nurse serving aboard the USS Enterprise. She is known for her dedication to her patients and her unrequited love for Mr. Spock."
// 			/>
// 		</main>
// 	);
// }

// export default App;
