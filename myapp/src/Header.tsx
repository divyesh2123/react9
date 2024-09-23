import React, { useContext } from 'react'
import { ILanguageContext, TodoContext } from './language/Language';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Header() {

    const p = useContext<ILanguageContext|null>(TodoContext);

    const handleChange = (e:any)=>{
    
        p?.setlan({...p.lan,lan:e.target.value});
    }
  return (
    <div>

<FormControl fullWidth variant="outlined">
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={p?.lan.lan}
        onChange={handleChange}
        label="Language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>

    </div>
  )
}
