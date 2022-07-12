import type { NextPage } from 'next';
import Head from 'next/head';
import Animation from '../components/home/animation';
import Hero from '../components/home/hero';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col md:flex-row'>
        <Hero />
        <Animation />
      </div>
    </Layout>
  );
};

export default Home;
