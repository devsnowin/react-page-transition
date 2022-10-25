import { motion as m } from 'framer-motion';

import { container, homeItem } from '../animation';

const Home = () => {
    return (
        <m.main
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className='text-gray-900 bg-orange-100 absolute inset-0 w-full h-full px-6 md:px-12 lg:px-16 xl:px-48'
        >
            <div className='w-full my-80 lg:my-60 overflow-hidden flex justify-end text-right'>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: '100%' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    exit={{ opacity: 1 }}
                    className='text-6xl font-bold md:max-w-[50%] lg:text-9xl lg:max-w-[75%]'
                >
                    Build for innovators
                </m.h1>
            </div>
            <div className='flex justify-between text-sm font-medium lg:text-base'>
                <m.ul variants={container} initial='hidden' animate='show'>
                    <li className='overflow-hidden'>
                        <m.h2 variants={homeItem}>Design</m.h2>
                    </li>
                    <li className='overflow-hidden'>
                        <m.h2 variants={homeItem}>Company</m.h2>
                    </li>
                    <li className='overflow-hidden'>
                        <m.h2 variants={homeItem}>2022</m.h2>
                    </li>
                </m.ul>
                <m.ul variants={container} initial='hidden' animate='show'>
                    <li className='overflow-hidden'>
                        <m.h3 variants={homeItem}>Learn about present.</m.h3>
                    </li>
                    <li className='overflow-hidden'>
                        <m.h3 variants={homeItem}>
                            Thoughts on web3 & Edge functions.
                        </m.h3>
                    </li>
                    <li className='overflow-hidden'>
                        <m.h3 variants={homeItem}>
                            Click contact for cool transition.
                        </m.h3>
                    </li>
                </m.ul>
            </div>
        </m.main>
    );
};

export default Home;
