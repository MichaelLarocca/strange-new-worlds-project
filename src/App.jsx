import './App.css'
import characters from './data.jsx'
import Card from '../src/components/Card'
import CardHardCoded from '../src/components/CardHardCoded'
import Navbar from '../src/components/Nav'
import Hero from '../src/components/Hero'

function App() {

  const cards = characters.map(character => {
    return <Card 
      key={character.key}
      src={character.src}
      name={character.name}
      rank={character.rank}
      position={character.position}
      about={character.about}
    />
  })

  return (
    <div className="ctn">
      <Navbar />
      <Hero />
      <main className="ctn-main">
        {/* <p>Hello Strange New World</p> */}
        {/* <CardHardCoded /> */}
        {/* <Card src="../src/img/Pike.png" name="Pike" rank="Fleet Captain" position="Captin" about="Captin of the star ship Enterprise" /> */}
        {/* <Card src="../src/img/Spock.png" name="Spock" rank="Science Officer" position="Commander" about="Spock is a half-human, half-Vulcan officer serving aboard the USS Enterprise. He is known for his logical and unemotional approach to problem-solving, as well as his close friendship with Captain Kirk." /> */}
        {/* <Card src="../src/img/ChristineChapel.png" name="Christine Chapel" rank="Fleet Captain" position="Head Nurse" about="Christine Chapel is a nurse serving aboard the USS Enterprise. She is known for her dedication to her patients and her unrequited love for Mr. Spock." /> */}
        {cards}
      </main>
    </div>
  )
}

export default App
