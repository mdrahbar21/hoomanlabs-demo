import React from 'react';

type CardProps = {
  name?: string;
  role?: string;
  imageSrc?: string;
  backgroundColor?: string;
  isExtended?: boolean;
  onClick?: () => void;
};

const Card = ({ name, role, imageSrc, backgroundColor, isExtended, onClick }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-1 pr-1 pb-1.5 pl-2 border rounded-lg bg-clip-border transition-all duration-300 ${
        isExtended ? 'w-96 h-72 p-6' : 'w-40 h-72'
      }`}
      style={{
        borderImage:
          'linear-gradient(to bottom left, border-1, border-2 13%, border-3 32%, border-4 50%, border-5 69%, border-1 100%) 1',
        // backgroundColor,
      }}
    >
      <img src={imageSrc} alt={`${name} photo`} className="rounded-full w-24 h-24 mb-4" />
      <p className="bg-gradient-to-r from-text-secondary via-foreground to-text-secondary bg-clip-text text-transparent text-center px-1">
        {name}
      </p>
      <p className="text-xs bg-gradient-to-r from-text-secondary via-foreground to-text-secondary bg-clip-text text-transparent">
        {role}
      </p>
      <button
        className="mt-4 bg-card text-xs text-white py-1 px-4 rounded-full hover:bg-gray-800"
        onClick={onClick}
      >
        Let’s Talk &gt;&gt;
      </button>
      {isExtended && (
        <div className="mt-4">
          <p className="text-center">On call with {name}</p>
          <p className="text-center">00:00</p>
          <button className="bg-red-500 text-white py-1 px-4 rounded-full mt-2">Ringing...</button>
        </div>
      )}
    </div>
  );
};

export default Card;
