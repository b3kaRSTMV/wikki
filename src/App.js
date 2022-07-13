import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/loginPage/LoginPage"
import "./App.css";
import "./style/index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path= "/login" element = {<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
