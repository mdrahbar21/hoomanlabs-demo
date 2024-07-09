// components/cards/ParentCard.tsx
import React from 'react';

interface ParentCardProps {
  children: React.ReactNode;
}

const ParentCard: React.FC<ParentCardProps> = ({ children }) => {
  return (
    <div className="bg py-8 rounded-3xl">
      {children}
    </div>
  );
};

export default ParentCard;
