import React from "react";
import { Card, Header } from "../components";
import styles from "../style";

const Home = () => {
  return (
    <>
      <Header />

      <section className={`${styles.flexCenter} ${styles.padding}`}>
        <div className={`${styles.boxWidth} ${styles.flexCenter} flex-col`}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
