import React from 'react';
import Navbar from '../components/Navbar';

const Layout = (props: React.PropsWithChildren) => {
    return (
        <div className='relative min-h-screen px-6 md:px-12 lg:px-16 xl:px-48'>
            <Navbar />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
