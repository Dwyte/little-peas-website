import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div id="home" className="container">
      <Header />
      <CallToAction />
      <Pricing />
      <Footer />
    </div >
  );
}

export default App;
