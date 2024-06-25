import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./AllTheBooks.jsx";

function App() {
  return (
    <>
      <MyNav claim="Bellissima" />

      <Welcome sottotitolo="Sito Bello"/>
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
