import Head from 'next/head';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='Best pizza shop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
    </>
  );
}
