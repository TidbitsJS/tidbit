import styles from "../style";
import { MainCard, Header, PostCard } from "../components";

const Home = () => {
  return (
    <>
      <Header />

      <section className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} flex flex-row`}>
          <div className={`flex-2 ${styles.flexCenter} pb-6 flex-col`}>
            <MainCard />
            <MainCard />
          </div>

          <div className="flex flex-[.95] flex-col ml-16 sticky top-0 h-fit">
            <div className="my-6 flex flex-col">
              <div className="flex flex-row items-center">
                <h4 className="font-josefinSans font-bold text-titlesColor text-[24px] tracking-[.25px]">
                  Recent Posts
                </h4>
                <div className="h-[2px] bg-primary flex-1 ml-2" />
              </div>

              <div className="mt-8">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
