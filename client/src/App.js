import './App.css';
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {Landing}/>
      <Route exact path = '/home' component = {Home}/>
      <Route exact path = '/form' component = {Form}/>
      <Route exact path = '/detail' component = {Detail}/>
    </div>
  );
}

export default App;
