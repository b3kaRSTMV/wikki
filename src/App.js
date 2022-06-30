import { useSelector, useDispatch } from "react-redux";
import { test } from "./reduxToolkit/toolkitReducer";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const testShowCount = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{testShowCount}</div>
      <button onClick={() => dispatch(test())}>click here</button>
      <h1>{t("Welcome")}</h1>
    </div>
  );
}

export default App;
