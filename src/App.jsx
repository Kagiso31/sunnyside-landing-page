import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header className="bg-[url('./assets/mobile/image-header.jpg')] sm:bg-[url('./assets/desktop/image-header.jpg')] bg-no-repeat bg-cover bg-center h-[80vh]">
        <Navbar />
        <Hero />
      </header>
      <Content />
    </div>
  );
};

export default App;
