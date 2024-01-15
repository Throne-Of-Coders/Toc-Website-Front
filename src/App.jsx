import { useState } from "react";
import "./App.css";
import { DefaultNavBar } from "./components/navBar/DefaultNavBar";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
//pages
import { HomePage } from "./pages/HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DefaultNavBar></DefaultNavBar>
      <HomePage></HomePage>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
