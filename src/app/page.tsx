import React from 'react';
import Background from '@/components/Background';

import dynamic from 'next/dynamic';

const Wave = dynamic(() => import('@/components/wave'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div>
      {/* <Background />     */}
      <Wave />
      {/* <About /> */}
    </div>
  );
};

export default HomePage;
