import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Navbar, UseTransitionHook } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/use-transition" element={<UseTransitionHook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
