import React from 'react';
import NavBar from './components/NabBar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
