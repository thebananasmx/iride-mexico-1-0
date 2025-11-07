import React from 'react';
import { handleNavigate } from '../utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, href, onClick, ...props }) => {
  const baseStyle = 'inline-block font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100';
  
  const variantStyles = {
    primary: 'bg-brand-accent text-white shadow-lg hover:bg-brand-dark',
    secondary: 'bg-brand-secondary text-brand-primary shadow-lg hover:bg-yellow-400',
    outline: 'border-2 border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent hover:text-white',
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
        onClick(e);
    }
    if (href) {
        handleNavigate(e, href);
    }
  };

  return (
    <a 
        className={`${baseStyle} ${variantStyles[variant]} ${className}`} 
        href={href}
        onClick={handleClick}
        {...props}>
      {children}
    </a>
  );
};
export default Button;
