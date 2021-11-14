import Hero from './components/hero-component/hero';
import ShowCaseOne from './components/showcase-one-component/showcase-one';
import Rental from './components/rental-components/rental';
import Service from './components/service-component/service';
import Background from './components/background-component/background';
import OtherServices from './components/other-services-component/otherServices';
import History from './components/history-component/history'
import ShowcaseTwo from './components/showcase-two-component/showcaseTwo';
import ContactForm from './components/form-component/contactForm';
import Footer from './components/footer-component/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ShowCaseOne />
      <Rental />
      <Service />
      <Background />
      <OtherServices />
      <History />
      <ShowcaseTwo />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
