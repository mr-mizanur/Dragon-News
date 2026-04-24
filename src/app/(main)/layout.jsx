import BreakingNews from '@/Components/shyerd/BreakingNews';
import Header from '@/Components/shyerd/Header';
import Nevbar from '@/Components/shyerd/Nevbar';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Nevbar></Nevbar> 
        {children}
        </>
    );
};

export default Mainlayout;