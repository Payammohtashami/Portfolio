// components
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import About from './components/about/About';
import Course from './components/course/Course';
import Comment from './components/comment/Comment';
import WhyUs from './components/whyUs/WhyUs';
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
    <Navbar />
      <Header />
      <Course />
      <About />
      <WhyUs />
      <Comment />
      <Contact />
    <Footer/>
    </>
  );
};

export default App;