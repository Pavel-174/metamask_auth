import './App.css';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
