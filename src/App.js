import logo from './logo.svg';
import './App.css';
import TodoList from'./TodoList';

function App() {
  return (
    <div className="App">
      <h1 class= "App-header">TodoList</h1>
      <h3>ADD TODO:</h3>
      <TodoList />
     
      <table>
        <tbody>
       
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
