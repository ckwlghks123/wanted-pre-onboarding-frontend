import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./pages/TodoList/TodoList";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
