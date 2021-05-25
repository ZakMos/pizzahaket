import Header from './components/Header';
import Main from './views/Main';
import Products from './views/Products';
import Contact from './views/Contact';
import Footer from './components/Footer';
import Menu from './views/Menu';

function App() {
  return (
    <>
      <header className="mb-auto">
        <Header />
      </header>
      <main className="main">
        <Main />
        <Products />
        <Menu />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
