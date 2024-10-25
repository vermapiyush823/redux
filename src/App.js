import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AddToDo />
      <ToDo />
    </div>
  );
}

export default App;
