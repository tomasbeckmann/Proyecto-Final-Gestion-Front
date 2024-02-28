import React from 'react';
import { Sidebar } from '../../components/application/sidebar'
import { Outlet } from 'react-router-dom';
import { Navbaradmin } from './navbaradmin'

export const Layout = () => {

    return (
        <>
            <Navbaradmin />
            <div className='d-flex'>
                <Sidebar />
                <div className='d-flex w-100 justify-content-center'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};


