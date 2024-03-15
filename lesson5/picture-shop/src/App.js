import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Todos from "./pages/Todos";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pictures":
      component = <Pictures />;
      break;
    case "/todos":
      component = <Todos />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
    default:
      component = <NotFound />;
  }
  return (
    <div className="app">
      <Header />
      {component}
      <Footer />
    </div>
  );
}

export default App;
