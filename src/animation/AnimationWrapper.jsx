import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const AnimationWrapper = ({
	children,
	initial = { opacity: 0, y: 10 },
	whileInView = { opacity: 1, y: 1 },
	viewport = { once: true },
	transition = { duration: 0.6 },
	className,
}) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={initial}
				// animate={animate}
				whileInView={whileInView}
				transition={transition}
				viewport={viewport}
				className={className}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimationWrapper;
