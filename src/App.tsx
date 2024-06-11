import Nav from './components/Nav';
import CoverPage from './components/CoverPage';
import About from './components/About';
import Make from './components/cars/Make';
import Fueltype from './components/cars/Fueltype';
import Transmission from './components/cars/Transmission';
import All from './components/cars/All';



function App() {
  return (
  <>
   <Nav />
   <CoverPage />
   <About />
   <Make />
   <Fueltype />
   <Transmission />
   <All />
  </>
  );
}

export default App;
