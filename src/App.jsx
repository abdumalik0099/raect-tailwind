import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {Logotips, Services, Case} from "./components/Main";
import SixBlock from "./components/SixBlock";
import Cta from "./components/Cta";
import Info, { Our } from "./components/Info";
import Ocardion from "./components/Ocardion";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Logotips />
      <Services />
      <SixBlock />
      <Cta />
      <Case />
      <Info />
      <Our />
      <Ocardion />
    </>
  );
};

export default App;
