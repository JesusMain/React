import './App.css'
import OutraLista from './components/OutraLista.js';

function App() {
  const meusItens = ['react','vue', 'Angular']
  return (
    <div className="App">
      <h1>Renderização Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      </div>
      
  );
}

export default App;
