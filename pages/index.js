import Head from 'next/head';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';
import React from "react";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza José in Nancy</title>
        <meta name="description" content="Les Meilleurs Pizza DE Nancy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  )
}
