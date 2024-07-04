"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './card2'; // Adjust the path as necessary

const agents = [
  {
    id: 1,
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#FF6B6B', // Replace with actual color
    subtitle: 'Subtitle 1',
    title: 'Title 1',
  },
  {
    id: 2,
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#FFD93D', // Replace with actual color
    subtitle: 'Subtitle 2',
    title: 'Title 2',
  },
  {
    id: 3,
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#6BFF6B', // Replace with actual color
    subtitle: 'Subtitle 3',
    title: 'Title 3',
  },
  {
    id: 4,
    name: 'Maria Joyce',
    role: 'Shopify Agent',
    imageSrc: '/particle.png', // Replace with actual image path
    backgroundColor: '#6B6BFF', // Replace with actual color
    subtitle: 'Subtitle 4',
    title: 'Title 4',
  },
];

const AgentCards2 = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-11 flex-1 bg-popover p-8 rounded-3xl shadow-lg md:-mt-20 lg:-mt-20 xl:-mt-48  2xl:-mt-48 border-2 border-back-second border-double">
      <div className="flex flex-col justify-center pt-20 pl-28 pb-20 pr-28">
        <h3 className="text-center pb-8 -mt-12">Talk to your personalised hoomans</h3>
        <div className="flex flex-col md:w-[550px] gap-9 items-center shrink-0">
          <div className="relative flex gap-4">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                layoutId={agent.id.toString()}
                onClick={() => setSelectedId(agent.id)}
                className="transition-transform duration-500 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  name={agent.name}
                  role={agent.role}
                  imageSrc={agent.imageSrc}
                  backgroundColor={agent.backgroundColor}
                />
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId.toString()}
                  className="fixed inset-48 mt-32 w-1/2 ml-48 flex items-center justify-center bg-background"
                >
                  {agents.map((agent) => (
                    agent.id === selectedId && (
                      <div key={agent.id} className="text-center">
                        <motion.h5>{agent.subtitle}</motion.h5>
                        <motion.h2>{agent.title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} className="mt-4 bg-red-500 text-white py-1 px-4 rounded-full">
                          Close
                        </motion.button>
                      </div>
                    )
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCards2;
