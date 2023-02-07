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
                    <h3>Cadastre-se e veja como fazer a gestão da sua igreja de forma simples e objetiva!</h3>
                </div>

                <FormControl className="form-control-login">
                    <TextField 
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="E-mail" 
                        variant="standard" 
                    />
                    
                    <Button className="btn-login" variant="contained" color="success">Cadastrar</Button>
                    
                    <LinksContainer>
                        <NavLink className="link-item" to="/">Voltar</NavLink>
                    </LinksContainer>
                </FormControl>
            </Content>
        </Container>
    );
}

export default ForgotPassword;