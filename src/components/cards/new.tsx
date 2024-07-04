"use client"
import { useState } from 'react';
import Card from './card';
import { motion, AnimatePresence } from 'framer-motion';

const agents = [
  {
    id: 1,
    name: 'Agent 1',
    subtitle: 'Subtitle 1',
    title: 'Title 1'
  },
  {
    id: 2,
    name: 'Agent 2',
    subtitle: 'Subtitle 2',
    title: 'Title 2'
  },
  {
    id: 3,
    name: 'Agent 3',
    subtitle: 'Subtitle 3',
    title: 'Title 3'
  },
  {
    id: 4,
    name: 'Agent 4',
    subtitle: 'Subtitle 4',
    title: 'Title 4'
  },
];

const Ultra = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className='flex flex-col-4 items-center gap-11'>
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          layoutId={agent.id.toString()}
          onClick={() => setSelectedId(agent.id)}
          className="cursor-pointer"
        >
          <Card name={agent.name} />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId.toString()} className="fixed inset-0 flex items-center justify-center bg-background">
            <motion.h5>{agents.find(agent => agent.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{agents.find(agent => agent.id === selectedId)?.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Ultra;
