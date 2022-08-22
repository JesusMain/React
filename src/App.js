import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMayName from './components/SayMayName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frases'
import List from './components/List'

function App() {
const nome='Maria'

  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <HelloWorld />
      <SayMayName nome='Matheus' />
      <SayMayName nome='Jão' />
      <SayMayName nome={nome} />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
      </div>
      
  );
}

export default App;
