import React from 'react';
import { Sidebar } from '../../components/application/sidebar'
import { Outlet } from 'react-router-dom';

export const Layout = () => {

    return (
     <div className='d-flex'>
        <Sidebar/>
        <div className='d-flex w-100 justify-content-center'>
        <Outlet/>
        </div>
     </div>
    );
};


