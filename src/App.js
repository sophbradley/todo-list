import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <div className="container">
        <InputForm />
      </div>
    </div>
  );
}

export default App;
