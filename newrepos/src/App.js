import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/*" element={<Home />}/>
      </Routes>
    </div>

  );
}

export default App;
