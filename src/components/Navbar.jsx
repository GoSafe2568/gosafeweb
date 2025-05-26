import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/img/Newlogo.png";
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsOpen(false);
  };

  // ฟังก์ชันเลื่อน scroll ไปยัง section ที่ต้องการ
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // ถ้าไม่ใช่หน้า Home ให้ไปหน้า Home ก่อน
      navigate('/');

      // รอหน้า Home โหลดเสร็จค่อยเลื่อน (รอ 300ms ปรับตามความเหมาะสม)
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 300);
    } else {
      // ถ้าอยู่หน้า Home อยู่แล้ว เลื่อนทันที
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  return (
  <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-10 mx-auto relative">
      <div className="flex justify-between items-center">
        {/* โลโก้ */}
        <div className="flex items-center">
          <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 mr-0"
                src={logo}
                alt="Logo"
          />
          <span className="text-2xl tracking-tight">GoSafe Website</span>
        </div>

        {/* ปุ่ม Hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-black dark:text-white focus:outline-none">
            {isOpen ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
          </button>
        </div>

        {/* เมนูปกติ (จอใหญ่) */}
        <ul className="hidden lg:flex ml-14 space-x-10">
          <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
          <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition bg-transparent border-0 p-0">About Me</button></li>
          <li><button onClick={() => scrollToSection('ehs')} className="hover:text-blue-500 transition bg-transparent border-0 p-0">EHS</button></li>
          <li><button onClick={() => scrollToSection('information')} className="hover:text-blue-500 transition bg-transparent border-0 p-0">Information</button></li>
          <li><Link to="/feedback" className="hover:text-blue-500 transition">Feedback</Link></li>
          <li><Link to="/contacts" className="hover:text-blue-500 transition">Contacts</Link></li>
        </ul>

        {/* ปุ่ม Mailbox (จอใหญ่) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/mailbox" className="py-2 px-4 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
            Mailbox
          </Link>
        </div>
      </div>
    </div>

    {/* ✅ เมนูมือถืออยู่นอก container แล้ว */}
    {isOpen && (
  <div className="lg:hidden w-full bg-white px-6 py-6 space-y-4 text-center shadow-md z-50">
    <Link
      to="/"
      onClick={handleCloseMobileMenu}
      className="block text-black hover:text-blue-400 transition"
    >
      Home
    </Link>
    <button
      onClick={() => { scrollToSection('about'); handleCloseMobileMenu(); }}
      className="block text-black hover:text-blue-400 transition bg-transparent border-0 p-0 mx-auto"
      style={{ width: 'fit-content' }}
    >
      About Me
    </button>
    <button
      onClick={() => { scrollToSection('ehs'); handleCloseMobileMenu(); }}
      className="block text-black hover:text-blue-400 transition bg-transparent border-0 p-0 mx-auto"
      style={{ width: 'fit-content' }}
    >
      EHS
    </button>
    <button
      onClick={() => { scrollToSection('information'); handleCloseMobileMenu(); }}
      className="block text-black hover:text-blue-400 transition bg-transparent border-0 p-0 mx-auto"
      style={{ width: 'fit-content' }}
    >
      Information
    </button>
    <Link
      to="/feedback"
      onClick={handleCloseMobileMenu}
      className="block text-black hover:text-blue-400 transition"
    >
      Feedback
    </Link>
    <Link
      to="/contacts"
      onClick={handleCloseMobileMenu}
      className="block text-black hover:text-blue-400 transition"
    >
      Contacts
    </Link>
    <div className="flex justify-center mt-4">
      <Link
        to="/mailbox"
        onClick={handleCloseMobileMenu}
        className="py-2 px-4 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Mailbox
      </Link>
    </div>
  </div>
)}
  </nav>
);


};

export default Navbar;
