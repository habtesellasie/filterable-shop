import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

const Products = ({ result }) => {
  return (
    <AnimatePresence>
      <motion.section layout className='card-container'>
        {result}
      </motion.section>
    </AnimatePresence>
  );
};

export default Products;
