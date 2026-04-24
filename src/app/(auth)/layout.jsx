import Nevbar from '@/Components/shyerd/Nevbar';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <>
             <Nevbar></Nevbar> 
              {children}
        </>
    );
};

export default Authlayout;