import "../styles/styles.scss"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./sections/Header";
import Cupcakes from "./pages/Cupcakes";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
const App = () =>(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/cupcakes" element={<Cupcakes peticion="cupcakes" title/>}></Route>
      <Route path="/nosotros" element={<AboutUs />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
)


export default App;
