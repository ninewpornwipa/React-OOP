import logo from './logo.svg';
import { NavBar } from './NavBar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BisectionN from './Root_of_Equation/Bisection';
import False from './Root_of_Equation/False';
import Secant from './Root_of_Equation/Secant';
import Newton from './Root_of_Equation/Newton';
import Onepoint from './Root_of_Equation/Onepoint';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/Bisection' element={<BisectionN/>} />
              <Route path='/False' element={<False/>} />
              <Route path='/Newton' element={<Newton/>} />
              <Route path='/Onepoint' element={<Onepoint/>} />
              <Route path='/Secant' element={<Secant/>} />
            </Routes>
            {/* <Bisection/> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
