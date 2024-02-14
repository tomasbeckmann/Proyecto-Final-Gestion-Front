import React from 'react';
import { Usersidebar } from './user-sidebar'
import { Outlet } from 'react-router-dom';

export const LayoutUser = () => {

    return (
     <div className='d-flex'>
        <Usersidebar/>
        <Outlet/>
     </div>
    );
};


