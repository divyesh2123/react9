import React from 'react'
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';

interface IRegistration {
    firstName: string;
    lastName: string;
    email: string;
}

export default function FormikWithMUI() {


    const d = Yup.object().shape({
        email: Yup.string().email("email is invalid").required("email is required"),
        firstName: Yup.string().required("firstName is required"),
        lastName: Yup.string().required("lastName is required")

    })


    let data: IRegistration = {
        email: "",
        firstName: "",
        lastName: ""

    };

    const formik = useFormik({
        initialValues: data,
        validationSchema:d,
        onSubmit: values => {
            
            console.log(values);
        },
    });

    return (
        <div>

            <form autoComplete="off" onSubmit={formik.handleSubmit}>

                <TextField
                    label="first Name"
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="firstName"
                    placeholder="John Doe"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />


                <TextField
                    label="Last Name"
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="lastName"
                    placeholder="John Doe"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />


                <TextField
                    label="email"
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="email"
                    placeholder="John Doe"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <Button variant="contained" 
                color="primary" type="submit" 
                fullWidth size="medium" >
                    Register
                </Button>

            </form>
        </div>
    )
}
