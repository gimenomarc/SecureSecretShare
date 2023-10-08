import React from 'react';

function Layout({ children }) {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 font-roboto">Create a Secret</h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;