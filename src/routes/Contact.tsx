import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

import { container, item } from '../animation';

const Contact = () => {
    return (
        <m.main
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className='text-gray-900 bg-red-400 absolute inset-0 w-full h-full px-6 md:px-12 lg:px-16 xl:px-48'
        >
            <div className='my-60 overflow-hidden'>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: '100%' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    exit={{ opacity: 1 }}
                    className='text-6xl font-bold text-center lg:text-right lg:text-9xl'
                >
                    Let's talk
                </m.h1>
            </div>
            <div className='flex gap-20'>
                <m.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.75, ease: 'easeIn' }}
                    className='lg:text-2xl text-base'
                >
                    Find us:{' '}
                </m.h4>
                <m.ul
                    variants={container}
                    initial='hidden'
                    animate='show'
                    className='flex flex-col items-start text-2xl underline lg:text-6xl gap-2'
                >
                    <Link to='/' className='overflow-hidden'>
                        <m.li variants={item}>Twitter</m.li>
                    </Link>
                    <Link to='/' className='overflow-hidden'>
                        <m.li variants={item}>Instagram</m.li>
                    </Link>
                    <Link to='/' className='overflow-hidden'>
                        <m.li variants={item}>Github</m.li>
                    </Link>
                    <Link to='/' className='overflow-hidden'>
                        <m.li variants={item}>LinkedIn</m.li>
                    </Link>
                </m.ul>
            </div>
        </m.main>
    );
};

export default Contact;
