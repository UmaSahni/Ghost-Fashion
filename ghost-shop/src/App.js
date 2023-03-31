import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
// import Mens from './neha/Mens';
import {WomensProduct} from "./neha/WomensProduct";

function App() {  
  return (
    <div className="App">
    <AllRoutes/>
    <WomensProduct/>
    {/* <Mens/> */}
    <Footer/>
    </div>
  );
}

export default App;
