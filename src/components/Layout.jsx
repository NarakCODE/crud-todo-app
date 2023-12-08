import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
	return (
		<div className="w-full h-[90vh] max-w-md mx-auto my-10 border-4 border-black rounded-[3rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-[#eee] overflow-y-scroll scrollbar-hide ">
			<Navbar />
			<main className="px-4">{children}</main>
		</div>
	);
};

export default Layout;
