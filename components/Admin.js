import React from 'react';
import styles from '../styles/Admin.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import AddNewPizza from './AddNewPizza';

const Admin = ({ pizzas, orders }) => {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const [orderList, setOrderList] = useState(orders);
  const [show, setShow] = useState(false);
  const status = ['preparing', 'on the way', 'delivered'];

  const toggleModal = () => {
    setShow((prev) => !prev);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3000/api/pizzas/' + id);
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1
      });
      setOrderList([res.data, ...orderList.filter((order) => order._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.item}>
        <h3 className={styles.title}>Products</h3>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr_title}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {pizzaList &&
            pizzaList.map((pizza) => (
              <tbody key={pizza._id}>
                <tr className={styles.tr}>
                  <td>
                    <Image src={pizza.img} alt='pizza' width={50} height={50} style={{ objectFit: 'cover' }} />
                  </td>
                  <td>{pizza._id.slice(0, 5)}...</td>
                  <td>{pizza.title}</td>

                  <td>Eur {pizza.prices[0]}</td>
                  <td>
                    <button onClick={() => handleDelete(pizza._id)} className={styles.buttonD}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
        <button onClick={toggleModal} className={styles.buttonAdd}>
          Add New Pizza
        </button>
        {show && <AddNewPizza toggleModal={toggleModal} />}
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>Orders</h3>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr_title}>
              <th>Id</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList &&
            orderList.map((order) => (
              <tbody key={order._id}>
                <tr className={styles.tr}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>{order.phone}</td>
                  <td>Eur {order.total}</td>
                  <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button onClick={() => handleStatus(order._id)} className={styles.buttonN}>
                      Next State
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};
export default Admin;
