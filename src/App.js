import Header from './components/Header';
import Main from './views/Main';
import Products from './views/Products';
import AboutUs from './views/AboutUs';
import Footer from './components/Footer';
import Menu from './views/Menu';
import AOS from 'aos';


function App() {
AOS.init()

  return (
    <>
      <header className="mb-auto">
        <Header />
      </header>
      <main className="main">
        <Main />
        <Products />
        <Menu />
        <AboutUs/>
      </main>
      <Footer />
    </>
  );
}

export default App;
