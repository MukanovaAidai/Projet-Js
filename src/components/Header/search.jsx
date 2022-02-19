
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './search.css'


export default function Search({value}){



    return (
        <TextField className='SearchInput' id="standard-basic" label="Поиск" id="fullWidth"  sx={{display:value,width:950,marginTop:'10px',borderRadius:'15px' }} />
    )
}