import React from 'react';

import backgroundImage from '../../assets/recovery_pwd.jpg'; 
import {Container, Content, LinksContainer} from './styles';
import { TextField, FormControl, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <Container source={backgroundImage}>
            <Content>
                <div className="title-login">
                    <h3>Informe seu e-mail abaixo para recuperar a senha.</h3>
                </div>

                <FormControl className="form-control-login">
                    <TextField 
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="Nome" 
                        variant="standard" 
                    />

                    <TextField 
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="E-mail"
                        type="email"
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

                    <TextField
                        className="mui-template-input"
                        id="standard-password-input"
                        label="Confirme a senha"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />

                    <Button className="btn-login" variant="contained" color="success">Recuperar senha</Button>

                    <LinksContainer>
                        <NavLink className="link-item" to="/">Voltar</NavLink>
                    </LinksContainer>
                </FormControl>
            </Content>
        </Container>
    );
}

export default ForgotPassword;