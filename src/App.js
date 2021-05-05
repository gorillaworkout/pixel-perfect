import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Switch>
      <Route exact path='/' component={Home}/>
      
    </Switch>
 
  );
}

export default App;
