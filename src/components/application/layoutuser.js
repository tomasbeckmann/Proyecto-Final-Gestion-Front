import React from 'react';
import { Usersidebar } from './user-sidebar'
import { Navbaruser } from './navbar'
import { Outlet } from 'react-router-dom';

export const LayoutUser = () => {

    return (
        <>
            <Navbaruser />
            <div className='d-flex'>
                <Usersidebar />
                <Outlet />
            </div>
        </>
    );
};


