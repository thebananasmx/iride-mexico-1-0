import React from 'react';
import { handleNavigate } from '../utils';

// Make props more generic to support both <a> and <button>
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  [key: string]: any; // Allow other props like 'disabled'
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, href, onClick, ...props }) => {
  const baseStyle = 'inline-block font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100';
  
  const variantStyles = {
    primary: 'bg-brand-accent text-white shadow-lg hover:bg-brand-dark',
    secondary: 'bg-brand-primary text-white shadow-lg hover:bg-gray-600',
    outline: 'border-2 border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent hover:text-white',
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className || ''}`;

  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e as any);
      }
      handleNavigate(e, href);
    };

    return (
      <a 
        className={combinedClassName} 
        href={href}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;