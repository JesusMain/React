import './App.css'
import Evento from './components/Evento';
import Forms from './components/Forms';

function App() {

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Forms />
      
      </div>
      
  );
}

export default App;
