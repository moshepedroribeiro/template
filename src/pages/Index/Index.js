import React from 'react';
import backgroundImage from '../../assets/index_back.jpg';
import {Container, Content} from './styles';
import { TextField, FormControl, Button } from '@mui/material';

const Index = () => {
    return(
        <Container source={backgroundImage}>
            <Content>
                <div className="title-login">
                    <h3>Acesse sua conta e converse com seus amigos!</h3>
                </div>

                <FormControl className="form-control-login">
                    <TextField 
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="E-mail" 
                        variant="standard" 
                    />
                    
                    <TextField
                        className="mui-template-input"
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />

                    <Button className="btn-login" variant="contained" color="success">Login</Button>
                </FormControl>
            </Content>
        </Container>
    )
}

export default Index;