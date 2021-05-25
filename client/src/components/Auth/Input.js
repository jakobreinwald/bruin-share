import React from 'react'
import { Text, Grid, InputAdornment, IconButton, TextField } from "@material-ui/core";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword, half }) => (
        <Grid xs={6} sm={half ? 6 : 12}>
            <TextField 
                name={name}  
                onChange={handleChange} 
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name == 'password' && {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onclick={handleShowPassword}>
                                {type == "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
);

export default Input
