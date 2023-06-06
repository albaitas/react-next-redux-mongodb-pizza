import React from 'react';
import Image from 'next/image';
import styles from '../styles/Slider.module.css';

const Slider = () => {
  return (
    <div className={styles.hero}>
      <Image src='/images/pizza4.png' alt='pizza' width={1174} height={772} className={styles.img} priority />
    </div>
  );
};

export default Slider;
