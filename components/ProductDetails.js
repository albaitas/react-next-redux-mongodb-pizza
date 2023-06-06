import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Details.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './../redux/cartSlice';

const ProductDetails = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0] || null);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.img_container}>
          <Image
            src={pizza.img}
            alt={pizza.title}
            fill
            sizes='(min-width: 480px) 50vw, (min-width: 728px) 33vw, (min-width: 976px) 25vw, 100vw'
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{pizza.title}</h2>
        <div className={styles.price}>{price} Eur</div>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size:</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src='/images/size.png' alt='sizes' width={30} height={30} />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src='/images/size.png' alt='sizes' width={40} height={40} />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src='/images/size.png' alt='sizes' width={50} height={50} />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients:</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input type='checkbox' id={option.text} name={option.text} className={styles.checkbox} onChange={(e) => handleChange(e, option)} />
              <label htmlFor='double'>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity} onChange={(e) => setQuantity(e.target.value)} />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
        <div>
          <Link href='/products'>Back to Bay</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
