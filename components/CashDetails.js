import React from 'react';
import styles from '../styles/Cash.module.css';
import { useState } from 'react';

const CashDetails = ({ setCash, total, createOrder }) => {
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({ customer, phone, address, total, method: 0 });
  };

  const cancelClick = () => {
    setCash(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>You will pay Eur 12 after delivery.</h3>
        <div className={styles.item}>
          <label htmlFor='name' className={styles.label}>
            Name Surname
          </label>
          <input placeholder='John Doe' type='text' className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label htmlFor='phone' className={styles.label}>
            Phone
          </label>
          <input placeholder='+370 655 55555' type='text' className={styles.input} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label htmlFor='address' className={styles.label}>
            Address
          </label>
          <input placeholder='Lithuania' type='text' className={styles.input} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button onClick={handleClick} className={styles.button}>
          Order
        </button>
        <button onClick={cancelClick} className={styles.button}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CashDetails;
