import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
    children: React.ReactNode;
    icon?: React.ReactNode; // New prop for custom icon
    bgColorClass?: string; // Tailwind class for background color, e.g., 'bg-black'
    borderColorClass?: string; // Tailwind class for border color, e.g., 'border-transparent'
    textColorClass?: string; // Tailwind class for text color, e.g., 'text-white'
    hoverBgColor?: string; // Specific hex/rgb color for hover background, e.g., '#8B5CF6'
    hoverTextColor?: string; // Specific hex/rgb color for hover text
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    icon,
    bgColorClass = 'bg-black',
    borderColorClass = 'border-transparent',
    textColorClass = 'text-white',
    hoverBgColor,
    hoverTextColor,
    ...props
}) => {
    const baseClasses = `relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 h-12 cursor-pointer`;

    const defaultHoverTextColor = 'hover:text-white';

    const finalHoverTextColorClass = hoverTextColor || defaultHoverTextColor;

    return (
        <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className={`${baseClasses} ${bgColorClass} ${borderColorClass} ${textColorClass} ${hoverBgColor} ${finalHoverTextColorClass}`}
            variants={{
                hover: {
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                    scale: 1.05,
                }
            }}
            {...props}
        >
            {/* Top text animates up on hover */}
            <motion.span
                className="absolute left-0 right-0 flex items-center justify-center w-full"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                variants={{
                    hover: { y: -56, opacity: 0, transition: { duration: 0.25 } }
                }}
                transition={{ type: "tween", duration: 0.25 }}
            >
                {children}
                {icon}
            </motion.span>
            {/* Bottom text animates up into view on hover */}
            <motion.span
                className="absolute left-0 right-0 flex items-center justify-center w-full"
                initial={{ y: 56, opacity: 0 }}
                animate={{ y: 56, opacity: 0 }}
                variants={{
                    hover: { y: 0, opacity: 1, transition: { duration: 0.25, delay: 0.05 } }
                }}
                transition={{ type: "tween", duration: 0.25, delay: 0.05 }}
            >
                {children}
                {icon}
            </motion.span>
            {/* Invisible placeholder for button height */}
            <span className="opacity-0 pointer-events-none select-none">
                {children}
                {icon}
            </span>
        </motion.button>
    );
};

export default AnimatedButton;