import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from './pages/Index/Index';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />}/>
            </Routes>
        </BrowserRouter>
    );
}
