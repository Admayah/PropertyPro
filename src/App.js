import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Herosection/Hero';
import OurServices from './components/OurServicesSection/OurServices';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OurServices />
      <Footer />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
