import { useState } from "react";
import "./App.css";
import { DefaultNavBar } from "./components/navBar/DefaultNavBar";
import { Footer } from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DefaultNavBar></DefaultNavBar>
      <Footer></Footer>
    </>
  );
}

export default App;
