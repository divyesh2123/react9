import React, { FormEvent, useContext, useState } from 'react';
import { FormControl, Grid, Input, InputLabel, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ILanguageContext, TodoContext } from './language/Language';

interface Translations<T> {
    [key: string]: T;
}

export interface LanguageTranslations<T> {
    en: Translations<T>;
    fr: Translations<T>;
}


export default function Login() {

    const p = useContext<ILanguageContext|null>(TodoContext);

    alert(p?.lan.lan);

    const obj  : LanguageTranslations<any> = {

            "en" : {
                "Email": "Email",
                "Password": "Password"

            },
            "fr" : {
                "Email": "E-mail",
                "Password": "Mot de passe"

            }
    }

   const nav = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        axios.post("http://localhost:4000/accounts/authenticate",data)
        .then(y=>{

            localStorage.setItem("token",y.data.jwtToken);
          
        }).then(y=>{
            nav("/Account");

        }).catch(y=>{

         console.log("error")
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="email">{obj[p?.lan.lan == "en"? "en": "fr"].Email}</InputLabel>
                        <Input
                            name='email'
                            type='email'
                            onChange={handleInput}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={8}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="password">{obj[p?.lan.lan == "en"? "en": "fr"].Password} </InputLabel>
                        <Input
                            name='password'
                            type='password'
                            onChange={handleInput}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={8}>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
