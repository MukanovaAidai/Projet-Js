import Grid from '@mui/material/Grid';
import CatalogPosition from './CatalogPosition';


export default function Catalog () {

    const position = {
        id: 123,
        name: 'Продукция для вендинга',
        img: 'coffee-machine.png'
    } 


    return (
        <div className="container">
            <h2>Каталоги нашей продукции</h2>
            <Grid
            container direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <CatalogPosition position={position} />
            </Grid>
        </div>
    );
}