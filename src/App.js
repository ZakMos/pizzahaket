import './App.css';
import Main from './views/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
