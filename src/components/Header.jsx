import React from 'react';

const Header = ({ title }) => {
	return (
		<header className="flex items-center justify-between mt-10">
			<h1 className="text-6xl font-oswald font-light">{title}</h1>
		</header>
	);
};

export default Header;
