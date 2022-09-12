import styles from "../style";
import { MainCard } from "../components";

const Home = () => {
  return (
    <section className={`flex-2 ${styles.flexCenter} flex-col`}>
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
    </section>
  );
};

export default Home;
