import React, { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./Nav'));
const Landing = lazy(() => import('./Landing'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./services/Services'));
const Technologies = lazy(() => import('./Technologies'));
const Projects = lazy(() => import('./projects/Projects'));
const Products = lazy(() => import('./products/Products'));
const Clients = lazy(() => import('./clients/Clients'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Contact = lazy(() => import('./contact/Contact'));
const Footer = lazy(() => import('./Footer'));

const Home=()=>{
    return(
        <Suspense fallback={<h1 style={{textAlign:'center'}}>Loading…</h1>}>
            <Navbar />
            <Landing />
            <About />
            <Services />
            <Technologies />
            <Projects />
            <Products />
            <Clients />
            <Reviews />
            <Contact />
            <Footer />
        </Suspense>  
    )
}
export default Home;