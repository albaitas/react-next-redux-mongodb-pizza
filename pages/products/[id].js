import Head from 'next/head';
import ProductDetails from '../../components/ProductDetails';
import axios from 'axios';

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${process.env.API_URL}/pizzas/${params.id}`);
  return {
    props: {
      pizza: res.data
    }
  };
};

const Details = ({ pizza }) => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name='title' content='Product Details' />
      </Head>
      <ProductDetails pizza={pizza} />
    </>
  );
};

export default Details;
