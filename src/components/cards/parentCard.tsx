// components/cards/ParentCard.tsx
import React from 'react';

interface ParentCardProps {
  children: React.ReactNode;
}

const ParentCard: React.FC<ParentCardProps> = ({ children }) => {
  return (
    <div className="bg z-0 p-8 rounded-3xl shadow-lg  ">
      {children}
    </div>
  );
};

export default ParentCard;
