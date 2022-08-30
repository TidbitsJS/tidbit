import styles from "../style";
import { MainCard, Header, PostCard } from "../components";

const Home = () => {
  return (
    <>
      <Header />

      <section className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} flex md:flex-row flex-col`}>
          <div className={`flex-2 ${styles.flexCenter} flex-col`}>
            <MainCard />
            <MainCard />
          </div>

          <div className="flex flex-[.95] flex-col md:ml-16 ml-0 md:mt-0 mt-12 sticky top-0 h-fit min-w-[270px]">
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
