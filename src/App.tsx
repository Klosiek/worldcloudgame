import "./App.css";
import HomePage from "pages/HomePage";
import GlobalStylesProvider from "providers/GlobalStylesProvider";

function App() {
  return (
    <>
      <GlobalStylesProvider />
      <HomePage />
    </>
  );
}

export default App;
