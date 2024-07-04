import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar/navbar';
import AgentCards from '@/components/cards/agent';
import AgentCards2 from '@/components/cards/new2';
import Ultra from '@/components/cards/new';

const Wave = dynamic(() => import('@/components/wave'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div className='relative bg-background min-h-screen'>
      {/* <Background />     */}
      <div className='absolute inset-0 bottom-0 w-full h-1/4 z-0'>
        <Wave className='w-full h-full' />
      </div>
      <div className='relative flex flex-col items-center min-h-screen'>
        <div className='mt-7 mb-7'>
          <Navbar />        
        </div>
      <div className={`relative text-primary border bg-primary-dark/10 rounded-3xl border-primary px-4 py-2 mt-20`}>
        Built for modern retail
      </div>
        <h1 className='text-center pb-2 mt-9'>
          Customer calls re-imagined <br/>
        with AI agents that feel human</h1>
      </div>
      <div className='relative flex flex-col items-center'>
        {/* < Ultra/> */}
        < AgentCards2/>
      </div>
    </div>
  );
};

export default HomePage;
