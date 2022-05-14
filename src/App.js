import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDubleClick={(e) => alert("double click")}
      />
    </div>
  );
}

export default App;
