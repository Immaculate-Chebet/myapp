
import './App.css';
import Contactus from './components/Contactus';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Help from './components/Help';
import Secondcomponent from './components/Secondcomponent';
import Sixthcomponent from './components/Sixthcomponent';
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
        <Fourthcomponent/>
        <Fifthcomponent/>
        <Sixthcomponent/>
        
    </div>
  );
}

export default App;
//npm-node package module 
//npx-node package execute
//app.js is our route  component
