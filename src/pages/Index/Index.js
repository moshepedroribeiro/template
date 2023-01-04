import React from 'react';
import backgroundImage from '../../assets/index_back.jpg';
import {Container, Content, LinksContainer} from './styles';
import { TextField, FormControl, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />

                    <Button className="btn-login" variant="contained" color="success">Login</Button>
                
                    <LinksContainer>
                        <NavLink className="link-item" to="/forgot_password">Recuperar senha</NavLink>
                        <NavLink className="link-item" to="/registration">Registrar-se</NavLink>
                    </LinksContainer>
                </FormControl>
            </Content>
        </Container>
    )
}

export default Index;