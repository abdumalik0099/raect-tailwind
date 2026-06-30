import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {Logotips, Services} from "./components/Main";
import SixBlock from "./components/SixBlock";
import Cta from "./components/Cta";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Logotips />
      <Services />
      <SixBlock />
      <Cta />
    </>
  );
};

export default App;
