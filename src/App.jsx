import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Foods from './components/Foods';
import Category from './components/Category';
import Connect from './components/Connect';
// import Slider from './components/Slider';
// import Logo from './midea/Logo.jpg';

// const username = "John Doe";
// const day = new Date().toLocaleDateString();

function App() {

  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto bg-black/10'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
      <Connect />
      {/* <Slider /> */}
    </div>
  )
}

export default App;
