
import './App.css';
import Header from './components/Header/Header';
import FreshCoffee from './components/main/section-1/FreshCoffee';
import CatalogPosition from './components/main/section-2/CatalogPosition';

function App() {
  return (
    <div className="App">
      <Header/>
      <FreshCoffee/>
      <CatalogPosition/>
    </div>
  );
}

export default App;
