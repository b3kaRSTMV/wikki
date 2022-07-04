import { useSelector, useDispatch } from "react-redux";
import Footer from "./components/footer/Footer";
import { test } from "./reduxToolkit/toolkitReducer";
function App() {
  const testShowCount = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{testShowCount}</div>
      <button onClick={() => dispatch(test())}>click here</button>
      <Footer />
    </div>
  );
}

export default App;
