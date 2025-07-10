import React from 'react';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'green' | 'gradient';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  className = '',
  size = 'md',
  variant = 'primary'
}) => {
  const whatsappUrl = 'https://wa.me/919423281767';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-lg',
    green: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Phone className="h-4 w-4" />
      <span>{text}</span>
    </a>
  );
};