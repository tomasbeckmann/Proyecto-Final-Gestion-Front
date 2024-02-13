import React from 'react';
import { Sidebar } from '../../components/application/sidebar'

export const LayoutUser = ({children}) => {

    return (
     <div className='d-flex'>
        <Sidebar/>
        {children}
     </div>
    );
};


