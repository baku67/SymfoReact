import logo from './logo.svg';
import './App.css';


import Dashboard from './Components/Dashboard.js';
import { Header } from './Components/Header.js';



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
