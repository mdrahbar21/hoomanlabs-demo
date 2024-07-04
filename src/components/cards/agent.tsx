"use client"
import React, { useState } from 'react';
import Card from './card'; // Adjust the path as necessary

const agents = [
  {
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#FF6B6B', // Replace with actual color
  },
  {
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#FFD93D', // Replace with actual color
  },
  {
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#6BFF6B', // Replace with actual color
  },
  {
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#6B6BFF', // Replace with actual color
  },
];

const AgentCards = () => {
  const [extendedCard, setExtendedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExtendedCard(index === extendedCard ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-11 flex-1 bg-popover p-8 rounded-3xl shadow-lg md:-mt-52 xl:-mt-96  border-2 border-back-second border-double">
      <div className="flex flex-col justify-center pt-20 pl-28 pb-20 pr-28">
        <h3 className="text-center pb-8 -mt-12">Talk to your personalised hoomans</h3>
        <div className="flex flex-col md:w-[550px] gap-9 items-center shrink-0">
          <div className="relative flex gap-4">
            {agents.map((agent, index) => {
              let positionStyle = {};
              if (extendedCard !== null) {
                if (index < extendedCard) {
                  positionStyle = {
                    transform: `translateX(-${(extendedCard - index) * 5}px)`,
                    zIndex: 10 - (extendedCard - index),
                  };
                } else if (index > extendedCard) {
                  positionStyle = {
                    transform: `translateX(${(index - extendedCard) * 5}px)`,
                    zIndex: 10 - (index - extendedCard),
                  };
                }
              }

              return (
                <div
                  key={index}
                  className={`transition-transform duration-1000 ease-out ${extendedCard === index ? 'z-50' : ``}`}
                  style={{
                    position: extendedCard !== null && extendedCard !== index ? 'sticky' : 'relative',
                    ...positionStyle,
                  }}
                >
                  <Card
                    name={agent.name}
                    role={agent.role}
                    imageSrc={agent.imageSrc}
                    backgroundColor={agent.backgroundColor}
                    isExtended={extendedCard === index}
                    onClick={() => handleCardClick(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCards;
