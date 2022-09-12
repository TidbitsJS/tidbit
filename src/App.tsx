import styles from "./style";
import { Home } from "./page";
import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="bg-bgColor">
      <Header />

      <section className={`${styles.flexCenter} ${styles.paddingX} pb-6`}>
        <div className={`${styles.boxWidth} flex md:flex-row flex-col`}>
          <Home />
          <Sidebar />
        </div>
      </section>
    </div>
  );
}

export default App;
