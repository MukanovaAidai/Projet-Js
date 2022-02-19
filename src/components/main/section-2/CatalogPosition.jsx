import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import coffeeMachine from '../../img/coffee-machine.png'

export default function CatalogPosition ({position}) {
    console.log(position)
    return (
        <Grid key={123123} item>
            <img src='../../img/coffee-machine.png' alt="Кофе-машинка" />
            <Typography>{'фывфывфыв'}</Typography>
        </Grid>
    )
}