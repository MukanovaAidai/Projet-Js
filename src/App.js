
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/main/section-2/Section-Two';
import FreshCoffee from './components/main/section-1/1.1/FreshCoffee';

function App() {
  return (
    <div className="App">
      <Header/>
      <FreshCoffee/>
      <Catalog/>
    </div>
  );
}

export default App;
