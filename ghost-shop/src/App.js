import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
