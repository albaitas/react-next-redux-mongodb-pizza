import React from 'react';
import styles from '../styles/ProductsList.module.css';
import ProductCard from './ProductCard';

const ProductsList = ({ pizzas }) => {
  return (
    <div className={styles.products_wrapper}>
      <ProductCard pizzas={pizzas} />
    </div>
  );
};
export default ProductsList;
