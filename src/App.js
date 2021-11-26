import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Herosection/Hero';
import OurServices from './components/OurServicesSection/OurServices';
import Footer from './components/footer/Footer';
// import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OurServices />
      <Footer />
    </div>
  );
}

export default App;
