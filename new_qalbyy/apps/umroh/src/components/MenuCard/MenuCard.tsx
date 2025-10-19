import React from 'react';
import Link from 'next/link';
import type { MenuItem } from '#/constants/menu';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const IconComponent = item.icon;
  
  const cardContent = (
    <div 
      className={`
        relative overflow-hidden rounded-xl transition-all duration-300 transform
        ${item.isEnabled 
          ? 'bg-gradient-to-br from-white to-green-50 border border-green-200 hover:border-green-300 hover:shadow-lg hover:scale-105 cursor-pointer group' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 cursor-not-allowed opacity-60'
        }
      `}
    >
      {/* Background Pattern */}
      {item.isEnabled && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-100/20" />
      )}
      
      <div className="relative p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon Container */}
          <div className={`
            w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
            ${item.isEnabled ? item.iconBg + ' group-hover:scale-110' : 'bg-gray-100 text-gray-400'}
          `}>
            <IconComponent className="w-8 h-8" />
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <h3 className={`text-lg font-bold ${item.isEnabled ? 'text-gray-900' : 'text-gray-500'}`}>
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed ${item.isEnabled ? 'text-gray-600' : 'text-gray-400'}`}>
              {item.description}
            </p>
          </div>
          
          {/* Status Badge */}
          {!item.isEnabled && (
            <span className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-500 text-xs font-medium rounded-full">
              Segera Hadir
            </span>
          )}
          
          {/* Active Indicator */}
          {item.isEnabled && (
            <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </div>
      </div>
    </div>
  );

  if (item.isEnabled) {
    return (
      <Link href={item.href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default MenuCard;
