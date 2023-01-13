// import Header1 from './homeWork/header';
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
// import { Routing } from "./Components/Routes";
import {Routes,Route} from "react-router-dom";
// import {Home} from "./Components/Home/idnex";
// import {About} from "./Components/About";
// import {Contact} from "./Components/Contact";

// import { List } from "./Components/Lists";


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <About/> */}
       
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
