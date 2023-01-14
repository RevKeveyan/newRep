import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
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
