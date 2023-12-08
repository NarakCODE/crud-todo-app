import { Bell } from 'lucide-react';
import React from 'react';

const Navbar = () => {
	return (
		<div className="sticky top-0 bg-white/80 backdrop-blur-md z-50 flex flex-col rounded-b-3xl shadow">
			<div className="w-[7rem] h-8 rounded-full mx-auto bg-black mt-3" />
			<nav className="">
				<div className="max-w-xl mx-auto px-10 pt-10 py-4 border-black flex item-center justify-between">
					<h2 className="text-md text-gray-600">
						Todo App by <span className="text-black">@NarakCODE</span>
					</h2>

					<div>
						<button>
							<Bell size={26} />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
