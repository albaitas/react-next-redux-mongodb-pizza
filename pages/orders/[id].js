import Head from 'next/head';
import OrderDetails from '../../components/OrderDetails';
import axios from 'axios';

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${process.env.API_URL}/orders/${params.id}`);
  return {
    props: {
      order: res.data
    }
  };
};

const Order = ({ order }) => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name='title' content='Order Details' />
      </Head>
      <OrderDetails order={order} />
    </>
  );
};

export default Order;
