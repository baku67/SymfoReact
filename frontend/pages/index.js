
import Dashboard from '../src/Components/Dashboard.js';
import { Header } from '../src/Components/Header.js';



function App() {

  return (

    <div className="App">

      <Header title={"Tableau de bord"} />

      <main>
        <Dashboard />
      </main>

    </div>

  );
}

export default App;
