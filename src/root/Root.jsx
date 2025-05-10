import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import GlobalLoader from '../pages/Loader/GlobalLoader';
import Footer from '../components/Footer/Footer';

const Root = () => {
    
    const navigate = useNavigation();
    const isNavigating = Boolean(navigate.location);
    return (
        <div className='scroll-smooth'>

            <header className=' sticky top-0 z-50'>
                <Header></Header>
            </header>
            <main className='max-w-7xl mx-2 md:mx-auto'>
              {isNavigating && <GlobalLoader></GlobalLoader>}
            <Outlet></Outlet>

            </main>

            <footer>
                <Footer></Footer>

            </footer>

            
        </div>
    );
};

export default Root;