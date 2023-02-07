import React, {useState} from 'react';

import backgroundImage from '../../assets/recovery_pwd.jpg'; 
import {Container, Content, LinksContainer} from './styles';
import { TextField, FormControl, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash.debounce';

const ForgotPassword = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);

    function handleRegistration() {

        let obj = {
            name,
            email,
            password,
            passwordConfirm
        }
        
        console.log(obj);
    }
    
    return (
        <Container source={backgroundImage}>
            <Content>
                <div className="title-login">
                    <h3>Cadastre-se, é rápido e fácil!</h3>
                </div>

                <FormControl className="form-control-login">
                    <TextField
                        error={nameError}
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="Nome" 
                        variant="standard"
                        onChange={(event) => setName(event.target.value)}
                        onBlur={() => {
                            if(name) {
                                setNameError(false);
                            } else {
                                setNameError(true);
                            }
                        }}
                        helperText="Nome não pode ser vazio."
                    />

                    <TextField
                        error={emailError}
                        className="mui-template-input" 
                        id="standard-basic" 
                        label="E-mail"
                        type="email"
                        variant="standard" 
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={() => {
                            if(email) {
                                setEmailError(false);
                            } else {
                                setEmailError(true);
                            }
                        }}
                        helperText="E-mail precisa ser válido"
                    />

                    <TextField
                        error={passwordError}
                        className="mui-template-input"
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(event) => setPassword(event.target.value)}
                        onBlur={() => {
                            if(passwordError) {
                                setPasswordError(false);
                            } else {
                                setPasswordError(true);
                            }
                        }}
                        helperText="Senha precisa ter no mínimo 6 caracteres."
                    />

                    <TextField
                        error={passwordConfirmError}
                        className="mui-template-input"
                        id="standard-password-input1"
                        label="Confirme a senha"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(event) => setPasswordConfirm(event.target.value)}
                        onBlur={() => {
                            if(passwordConfirmError) {
                                setPasswordConfirmError(false);
                            } else {
                                setPasswordConfirmError(true);
                            }
                        }}
                    />

                    <Button className="btn-login" variant="contained" color="success" onClick={debounce(handleRegistration, 400)}>Cadastrar</Button>

                    <LinksContainer>
                        <NavLink className="link-item" to="/">Voltar</NavLink>
                    </LinksContainer>
                </FormControl>
            </Content>
        </Container>
    );
}

export default ForgotPassword;