
import './App.css';
import Todo from './todos/Todo'
import Login from './auth/Login';
import Singup from './auth/Signup';
import Loader from './components/UIelements/Loader';
import Modal from './components/UIelements/Modal';
function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
