import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import "./style/index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
