import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import Logo from "../../images/logo.png";
import CV from '../../images/CV_WayanDevaAdhisthanaya.pdf';

const NavbarLink = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Projects", link: "/project" },
    { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll to toggle background color
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when clicking outside
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav
                className={`py-4 fixed w-full z-50 ${
                    isScrolled ? "bg-white shadow" : "md:bg-transparent"
                } transition-all duration-300`}
            >
                <div className="container">
                    <div className="flex justify-between items-center">
                        <img src={Logo} width="80" />
                        <div>
                            <ul className="md:flex hidden gap-6 items-center">
                                {NavbarLink.map((item) => (
                                    <li
                                        key={item.id}
                                        className="font-medium hover:text-primary hover:border-b-2 border-primary transition-all duration-100 cursor-pointer"
                                    >
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))}
                                <a
                                    href={CV}
                                    download="CV_WayanDevaAdhisthanaya.pdf"
                                    className="relative px-4 py-2 font-normal rounded-md bg-white hover:text-white duration-500 cursor-pointer isolation-auto z-50 border-2 border-primary before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary before:-z-50  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                                >
                                    Download CV
                                </a>
                            </ul>
                        </div>
                        <div
                            className="md:hidden cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <i className="bx bx-menu text-3xl hover:text-primary"></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar untuk tampilan mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-64 z-20 bg-white transition-transform duration-300 ${
                    isSidebarOpen
                        ? "transform translate-x-0"
                        : "transform -translate-x-full"
                }`}
            >
                <div className="px-5 w-[80%] h-full">
                    <ul className="pt-20">
                        {NavbarLink.map((item) => (
                            <li
                                key={item.id}
                                className="font-medium py-2 text-xl hover:text-primary transition-all duration-500 cursor-pointer"
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                        <div className="mt-2">
                            <button
                                className="relative px-4 py-2 font-normal rounded-md bg-white hover:text-white duration-500 cursor-pointer isolation-auto z-50 border-2 border-primary
                  before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary before:-z-50  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                            >
                                Download CV
                            </button>
                        </div>
                    </ul>
                </div>
            </div>

            {/* Overlay untuk menutup sidebar saat mengklik di luar */}
            {isSidebarOpen && (
                <div
                    className="fixed bg-white z-20"
                    onClick={closeSidebar}
                ></div>
            )}
        </>
    );
};

export default Navbar;
