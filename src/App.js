
import './App.css';
import Header from './components/Header/Header';
import FreshCoffee from './components/main/section-1/FreshCoffee';
import Catalog from './components/main/section-2/Section-Two';

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
