import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageTitle from './components/PageTitle.jsx';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import AntiqueProducts from './pages/AntiqueProducts.jsx';
import Recipe from './pages/Recipe.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
    return (
        <>
            <ScrollToTop />
            <PageTitle />

            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spekulaasplanken" element={<Products />} />
                <Route path="/antieke-spekulaasplanken" element={<AntiqueProducts />} />
                <Route path="/recept" element={<Recipe />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}
