import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyle = 'inline-block font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100';
  
  const variantStyles = {
    primary: 'bg-brand-accent text-white shadow-lg hover:bg-orange-600',
    secondary: 'bg-brand-secondary text-brand-primary shadow-lg hover:bg-yellow-400',
    outline: 'border-2 border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent hover:text-white',
  };

  return (
    <a className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
};
export default Button;