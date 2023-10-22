import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AllRouter from './routes/AllRouter'
function App() {
  return (
    <div className="App">
      <Header />
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
