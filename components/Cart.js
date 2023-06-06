import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { reset, deleteProduct } from '../redux/cartSlice';
import axios from 'axios';
import CashDetails from './CashDetails';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);
      res.status === 201 && router.push('/orders/' + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  const amount = cart.total;
  const currency = 'EUR';
  const style = { layout: 'vertical' };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency
        }
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount
                    }
                  }
                ]
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shi = details.purchase_units[0].shipping;
              createOrder({
                customer: shi.name.full_name,
                address: shi.address.address_line_1,
                total: cart.total,
                method: 1
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr_title}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          {cart.products &&
            cart.products.map((product, index) => (
              <tbody key={index}>
                <tr className={styles.tr}>
                  <td>
                    <div className={styles.img_container}>
                      <Image src={product.img} fill sizes='(min-width: 480px) 50vw, (min-width: 728px) 33vw, (min-width: 976px) 25vw, 100vw' alt='pizza' />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{product.title}</span>
                  </td>
                  <td>
                    <span className={styles.ingredients}>
                      {product.extraOptions.map((extra) => (
                        <span key={extra._id}>{extra.text}, </span>
                      ))}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>Eur {product.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.sum}>Eur {product.price * product.quantity}</span>
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        dispatch(deleteProduct([product._id, product.price, product.quantity]));
                      }}
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>CART TOTAL</h3>
          <div className={styles.total}>
            <b className={styles.text}>Subtotal:</b>Eur {cart.total}
          </div>
          <div className={styles.total}>
            <b className={styles.text}>Discount:</b>Eur 0.00
          </div>
          <div className={styles.total}>
            <b className={styles.text}>Total:</b>Eur {cart.total}
          </div>
          {open ? (
            <div className={styles.payment}>
              <button onClick={() => setCash(true)} className={styles.cash}>
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  'client-id': 'AWj2Ev_1xfxei5geVAeqyYQEPRx_U6KrhF0x4kdd4Ax34H2OR4ggS5lVglBviLRE1dQ8jJHYJcH8p_4_',
                  components: 'buttons',
                  currency: 'USD',
                  'disable-funding': 'card'
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW
            </button>
          )}
        </div>
        <div>
          <Link href='/products'>Back to Bay</Link>
        </div>
      </div>
      {cash && <CashDetails setCash={setCash} total={cart.total} createOrder={createOrder} />}
    </div>
  );
}
