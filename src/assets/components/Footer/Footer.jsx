import React from "react";

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6153Cd"
          fill-opacity="1"
          d="M0,192L34.3,208C68.6,224,137,256,206,266.7C274.3,277,343,267,411,250.7C480,235,549,213,617,202.7C685.7,192,754,192,823,202.7C891.4,213,960,235,1029,245.3C1097.1,256,1166,256,1234,256C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <footer className="bg-primary text-white py-8 -mt-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Wayan Deva</h3>
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
