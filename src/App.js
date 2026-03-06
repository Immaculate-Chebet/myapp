
import './App.css';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Help from './components/Help';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react</h1>
        <h2>React is fun</h2>

      </header>
              {/* below we render /display/show our component */}
        <Firstcomponent/>
        <Secondcomponent/>
        <Thirdcomponent/>
        <Contactus/>
        <Help/>
    </div>
  );
}

export default App;
