import { motion } from 'framer-motion';
// import { useRef } from 'react';

const array = ['', '', '', '', '', ''];

export default function CategoriesCarousel() {
  // const carousel = useRef();


  return (
    <div style={{ }}>
      <motion.div
        style={{ }}
        whileTap={{ cursor: 'grabbing' }}
        // ref={carousel}
      >
        <motion.div
          style={{ display:'flex', overflow:'hidden'}}
          drag='x'
        >
          {
            array.map((_arr) => (
              <motion.div
                style={{ minWidth:'60px', height:'60px', border:'1px solid black' }}
              ></motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  )
}
