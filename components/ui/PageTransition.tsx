// components/PageTransition.tsx
'use client';

import { motion } from 'framer-motion';

export default function ElementTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>

  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>

  );
}

