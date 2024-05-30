import About from "./components/about/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Supplier from "./components/suplier/Suplier";
import Video from "./components/vidoe/Video";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Video />
      <Supplier />
      <Works />
      <Footer />
    </>
  );
}

export default App;
