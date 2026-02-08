import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-footer text-white/90 pt-16 pb-8 font-sans">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">
                        SVE <span className="text-gold">Interior</span>
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                        Your destination for premium home furnishings in Jaipur. We create spaces that reflect your unique style.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/sve.interior?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors"><Instagram size={24} /></a>
                        <a href="https://www.facebook.com/sveinteriors" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors"><Facebook size={24} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-serif font-bold mb-6 text-gold">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link to="/about-us" className="text-white/80 hover:text-cta transition-colors">About Us</Link></li>
                        <li><Link to="/our-products" className="text-white/80 hover:text-cta transition-colors">Our Products</Link></li>
                        <li><Link to="/our-gallery" className="text-white/80 hover:text-cta transition-colors">Gallery</Link></li>
                        <li><Link to="/blog" className="text-white/80 hover:text-cta transition-colors">Blog</Link></li>
                        <li><Link to="/contact-us" className="text-white/80 hover:text-cta transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-xl font-serif font-bold mb-6 text-gold">Products</h4>
                    <ul className="space-y-3 text-white/80">
                        <li><Link to="/product/stretch-ceiling" className="hover:text-cta">Stretch Ceilings</Link></li>
                        <li><Link to="/product/wallpapers" className="hover:text-cta">Wallpapers</Link></li>
                        <li><Link to="/product/wooden-flooring" className="hover:text-cta">Wooden Flooring</Link></li>
                        <li><Link to="/product/blinds" className="hover:text-cta">Blinds</Link></li>
                        <li><Link to="/product/acoustic-panels" className="hover:text-cta">Acoustic Panels</Link></li>
                        <li><Link to="/product/curtains" className="hover:text-cta">Curtains</Link></li>
                        <li><Link to="/product/upholstery-sofa-fabrics" className="hover:text-cta">Sofa Fabrics</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-serif font-bold mb-6 text-gold">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-white/80">
                            <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                            <p>264, Gurunanakpura, Nr. Pranami Mandir, Raja Park, Jaipur - (302004)</p>
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <Phone className="text-gold flex-shrink-0" size={20} />
                            <p>+91-9414718318, +91-9829068401</p>
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <Mail className="text-gold flex-shrink-0" size={20} />
                            <p>sveinterior@yahoo.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
                <p>&copy; {new Date().getFullYear()} SVE Interior. All rights reserved.</p>
            </div>
        </footer>
    );
}
