import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Acc, Hedge } from './components';
 import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">

      {AOS.init()}

      <Routes>
        <Route path="/" element={ <Acc/> } />
        <Route path="hedge" element={ <Hedge/> } />
      </Routes>
    </div>
  );
}

export default App;
