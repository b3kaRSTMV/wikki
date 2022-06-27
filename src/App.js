import { useSelector, useDispatch } from "react-redux";
import { test } from "./reduxToolkit/toolkitReducer";
import "./App.scss";
function App() {
  const testShowCount = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{testShowCount}</div>
      <button className="btn" onClick={() => dispatch(test())}>
        click here
      </button>
    </div>
  );
}

export default App;
