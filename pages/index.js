import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Hut - Tasty Food</title>
        <meta name="description" content="Food Ordering App tasty Food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    This is Home Page 
    </div>
  )
}
