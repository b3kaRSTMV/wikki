import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
