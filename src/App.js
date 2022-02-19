
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/main/section-2/Section-Two';
// import Search from './components/main/search';
import FreshCoffee from './components/main/section-1/1.1/FreshCoffee';
import SalesGoods from './components/main/section-2/SalesGoods';
import TeaAndCoffee from './components/main/section-1/1.2/tea and coffee';
import Slider from './components/main/section-1/1/slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <FreshCoffee/>
      <Catalog/>
      <Slider/>
    </div>
  );
}

export default App;
