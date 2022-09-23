import './App.css';
import Header from './Header/Header';
import Users from './Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <h1 className='text-center'>hello from app.js</h1>
      </div>
      <Users></Users>
    </div>
  );
}

export default App;
