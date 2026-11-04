import React from 'react';
import cn from './cn';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};

const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

const Button = ({ variant = 'primary', size = 'md', children }: ButtonProps) => {
    return (
        <button
            className={cn(
                'rounded-lg font-medium transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2',
                variants[variant],
                sizes[size],
            )}
        >
            {children}
        </button>
    );
};

export default Button;
