import { Provider } from "react-redux";
import Body from "./components/body/Body";
import { appStore } from "./ReduxToolkit/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
