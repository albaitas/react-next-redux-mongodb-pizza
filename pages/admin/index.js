import React from 'react';
import Admin from '../../components/Admin';
import axios from 'axios';

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || '';
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    };
  }
  const resPizzas = await axios.get(`${process.env.API_URL}/pizzas`);
  const resOrders = await axios.get(`${process.env.API_URL}/orders`);
  return {
    props: {
      pizzas: resPizzas.data,
      orders: resOrders.data
    }
  };
};

const AdminPage = ({ pizzas, orders }) => {
  return <Admin pizzas={pizzas} orders={orders} />;
};

export default AdminPage;
