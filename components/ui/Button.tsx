import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nebula-dark focus:ring-nebula-glow disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-nebula-core to-nebula-glow text-nebula-light hover:from-nebula-glow hover:to-nebula-core hover:shadow-lg hover:shadow-nebula-glow/30',
    secondary: 'bg-gradient-to-r from-accent to-accent-light text-white hover:from-accent-light hover:to-accent hover:shadow-lg hover:shadow-accent/30',
    outline: 'border-2 border-nebula-glow/50 text-nebula-glow hover:bg-nebula-glow/10 hover:border-nebula-glow',
    ghost: 'text-nebula-dust hover:text-nebula-light hover:bg-nebula-glow/5',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const variantClass = variants[variant];
  const sizeClass = sizes[size];
  
  const buttonClasses = `${baseStyles} ${variantClass} ${sizeClass} ${widthClass} ${className}`;
  
  const buttonContent = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {isLoading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-nebula-light/30 border-t-nebula-light rounded-full animate-spin mr-2" />
          加载中...
        </div>
      ) : (
        children
      )}
      {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
    </>
  );
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {buttonContent}
    </button>
  );
}