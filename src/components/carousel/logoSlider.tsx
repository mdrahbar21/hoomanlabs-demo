import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const logos = [
    { name: 'Shopify', image: '/shopify.png', link: '/', width: 200, height: 100 },
    { name: 'Giva', image: '/giva.png', link: 'https://www.giva.co/', width: 150, height: 55 },
    { 
      name: 'ElevenLabs', 
      image: 'https://storage.googleapis.com/eleven-public-cdn/images/elevenlabs-grants-logo.png',
      link: 'https://elevenlabs.io/text-to-speech',
      width: 300, 
      height: 150
    },
];

const LogoSlider: React.FC = () => {
  // Select only the first 3 logos
  const displayedLogos = logos.slice(0, 3);

  return (
    <div className="text-white py-8">
      <h2 className="text-center text-xl mb-6">Trusted by</h2>
      <div className="flex justify-center h-12 items-center">
        {displayedLogos.map((logo) => (
          <div key={logo.name} className="mx-4 px-2 rounded-lg flex items-center justify-center">
            <Link href={logo.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.image}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                objectFit="contain"
                style={{ filter: 'invert(75%) saturate(0%) brightness(200%)' }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
