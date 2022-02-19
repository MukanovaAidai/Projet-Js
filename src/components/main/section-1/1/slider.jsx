import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FreshCoffee from './../1.1/FreshCoffee';
import TeaAndCoffee from './../1.2/tea and coffee';

export default function Slider (){
    return(
  <AwesomeSlider bullets = {false}>
      <div style={{background:'white',display:'block'}}><FreshCoffee/></div>
      <div style={{background:'white',display:'block'}}><TeaAndCoffee/></div>
  </AwesomeSlider>
    )
}