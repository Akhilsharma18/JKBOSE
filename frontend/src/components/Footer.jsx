import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-10 border-t-4 border-yellow-500">
      <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2">JKBOSE Head Office</h3>
          <p>Rehari Colony, Jammu - 180005</p>
          <p>Bemina, Srinagar - 190018</p>
          <p className="mt-2">Phone: 0191-2580123</p>
          <p>Email: info@jkbose.nic.in</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Right to Information</a></li>
            <li><a href="#" className="hover:underline">Tenders</a></li>
            <li><a href="#" className="hover:underline">Photo Gallery</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2">About Portal</h3>
          <p className="text-gray-300 text-xs text-justify">
            This is the official website of J&K Board of School Education. Note: This website is a CLONE for educational purposes only. Content managed by AKHIL SHARMA.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-2 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} JKBOSE Clone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
