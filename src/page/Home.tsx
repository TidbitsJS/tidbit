import React from "react";
import { Card, Header } from "../components";
import styles from "../style";

const Home = () => {
  return (
    <>
      <Header />

      <section className={`${styles.flexCenter} ${styles.padding} mt-10`}>
        <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
