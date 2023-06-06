import React from 'react';
import Image from 'next/image';
import styles from '../styles/Order.module.css';

const OrderDetails = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.progress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr_title}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.phone}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.sum}>Eur {order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/images/paid.png' width={30} height={30} alt='status' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/images/checked.png' width={20} height={20} alt='checked' />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src='/images/bake.png' width={30} height={30} alt='status' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/images/checked.png' width={20} height={20} alt='checked' />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src='/images/bike.png' width={30} height={30} alt='status' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/images/checked.png' width={20} height={20} alt='checked' />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src='/images/delivered.png' width={30} height={30} alt='status' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src='/images/checked.png' width={20} height={20} alt='checked' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>CART TOTAL</h3>
          <div>
            <b className={styles.text}>Subtotal:</b>
            Eur {order.total}
          </div>
          <div>
            <b className={styles.text}>Discount:</b>Eur 0.00
          </div>
          <div>
            <b className={styles.text}>Total:</b>
            Eur {order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
