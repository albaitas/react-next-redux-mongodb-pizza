import Head from 'next/head';
import ProductsList from '../../components/ProductsList';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';
import axios from 'axios';

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/pizzas`);
  return {
    props: {
      pizzas: res.data
    }
  };
};

const Products = ({ pizzas }) => {
  return (
    <div>
      <Head>
        <title>Pizza</title>
        <meta name='title' content='Pizza list' />
      </Head>

      <section className={styles.section}>
        <div className={styles.cont}>
          <div className={styles.card_cont}>
            {pizzas?.map((pizza) => (
              <div className='wrap' key={pizza._id.toString()}>
                <Link href={`/products/${pizza._id.toString()}`}>
                  <ProductsList pizzas={pizza} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
