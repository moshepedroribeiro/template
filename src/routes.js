import { AppRegistration } from '@mui/icons-material';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Registration from './pages/Registration/Registration';
import Index from './pages/Index/Index';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Index />}/>
                <Route path='/forgot_password' element={<ForgotPassword />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}
