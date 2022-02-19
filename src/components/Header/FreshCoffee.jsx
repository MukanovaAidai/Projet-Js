import CatalogButton from './Button';

export default function FreshCoffee(){




    return(
        <div style={{marginTop:'100px' , marginLeft:'84px'}}>
         <div className="info-coffee">
             <b style={{fontWeight:'900',fontSize:'56px'}}>Свежеобжаренный кофе</b> 
             <div style={{fontSize:'25px'}}>
             <p >Кофе Калининградской обжарки из разных стран<br/> произрастания с доставкой на дом. <br/><br/>
                    Мы обжариваем кофе <span><b>каждые выходные.</b></span> </p>
             </div>
             <div style={{marginTop:'112px'}}>  
                 <CatalogButton />
             </div>
         </div>

     </div>
    )
}