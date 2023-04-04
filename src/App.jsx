import './App.css'
import characters from './data.jsx'
import Card from '../src/components/Card'

import imgSpockTest from './img/Spock.png'

function App() {

  const cards = characters.map(character => {
    return <Card 
      key={character.key}
      img={character.img}
      name={character.name}
      rank={character.rank}
      position={character.position}
      about={character.about}
    />
  })

  return (
    <div className="ctn-main">
      <p>Hello World</p>
      {/* <img src={imgSpockTest} /> */}
      {/* <Card src={imgSpockTest} /> */}
      {/* <Card src={imgSpock} img="img" name="name" rank="rank" position="position" about="about" /> */}
      {cards}
    </div>
  )
}

export default App
