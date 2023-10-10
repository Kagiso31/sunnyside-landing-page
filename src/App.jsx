import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="bg-[url('./assets/mobile/image-header.jpg')] sm:bg-[url('./assets/desktop/image-header.jpg')] bg-no-repeat bg-cover bg-center h-[80vh]">
        <Navbar />
        <Hero />
      </header>
      <Content />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
