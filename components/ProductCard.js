import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

const ProductCard = ({ pizzas }) => {
  return (
    <div className={styles.card}>
      <Image src={pizzas.img} alt='pizza' width='200' height='200' priority />
      <p className={styles.card_title}>{pizzas.title}</p>
      <div className={styles.card_price}>{pizzas.prices[0]} Eur</div>
      <span className={styles.card_footer}>more...</span>
    </div>
  );
};

export default ProductCard;
