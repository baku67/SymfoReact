import logo from './logo.svg';
import './App.css';

import TaskList from './Components/TaskList.js';
import ProjectList from './Components/ProjectList.js';


function App() {
  return (

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Raec
        </a>

        <ProjectList />

        <TaskList />

      </header>

    </div>

  );
}

export default App;
