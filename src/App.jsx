import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AdminLeads from './pages/AdminLeads';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const location = useLocation();

  return (
    <>
      <SmoothScroll>
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/our-gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
          </Routes>
        </AnimatePresence>
        <BackToTop />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;