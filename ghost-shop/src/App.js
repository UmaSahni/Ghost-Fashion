import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
import { MensProduct } from './neha/MensProduct';
// import {WomensProduct} from "./neha/WomensProduct";

function App() {  
  return (
    <div className="App">
    <AllRoutes/>
    {/* <WomensProduct/> */}
    <MensProduct/>
    <Footer/>
    </div>
  );
}

export default App;
