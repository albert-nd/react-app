import AppHolder from './components/AppHolder';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Foods from './components/Foods';
import Category from './components/Category';
// import Logo from './midea/Logo.jpg';

// const username = "John Doe";
// const day = new Date().toLocaleDateString();

function App() {

  return (
    <div>
      {/* <AppHolder /> */}
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
    </div>
  )
}

export default App;
