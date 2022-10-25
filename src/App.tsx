import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './layout/Layout';
import Contact from './routes/Contact';
import Home from './routes/Home';

function App() {
    const location = useLocation();

    return (
        <AnimatePresence initial={false}>
            <Layout>
                <Routes>
                    <Route path='/' index element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Layout>
        </AnimatePresence>
    );
}

export default App;
