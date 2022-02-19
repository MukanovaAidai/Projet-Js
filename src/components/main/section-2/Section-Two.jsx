import Grid from '@mui/material/Grid';
import CatalogPosition from './CatalogPosition';


export default function Catalog () {

    const positions = [{
        id : 1,
        name: 'Свежеобжаренный Кофе',
        img: '/img/coffee-stain.png'
        },
        {
            id : 2,
            name: 'Чай и кофейные напитки',
            img: '/img/tea.png'
        },
        {
            id : 3,
            name: 'Продукция для вендинга',
            img: '/img/coffee-machine.png'
        },
        {
            id : 4,
            name: 'Здоровое питание',
            img: '/img/kasha.png'
        }
    ]

    return (
        <div className="container">
            <h2>Каталоги нашей продукции</h2>
            <Grid container spacing={3}
            // justifyContent="center"
            // alignItems="center"
            >
            {positions.map((position) =>(
                <Grid key={position.id} item xs={3} >
                     <CatalogPosition position={position} />
                </Grid>
            ))}
            </Grid>
        </div>
    );
}