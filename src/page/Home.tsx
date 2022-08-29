import styles from "../style";
import { Card, Header } from "../components";

const Home = () => {
  return (
    <>
      <Header />

      <section className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} flex flex-row`}>
          <div className={`flex-2 ${styles.flexCenter} flex-col`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
                <article className="flex flex-row my-2 cursor-pointer">
                  <div className="relative w-[60px] h-[64px] shadow-postCardShadow">
                    <img
                      src="https://images.unsplash.com/photo-1565889673146-8e4d54300269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="card_img"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 m-1 border-[1px] border-white" />
                  </div>
                  <div className="flex flex-col ml-4 flex-1">
                    <h4 className="font-josefinSans font-bold text-titlesColor text-[15px] tracking-[.25px] leading-[1.45]">
                      Far far away, behind the word mountains
                    </h4>
                    <time className="font-serifPro font-normal text-textColor text-[12px] mt-1">
                      August 15, 2022
                    </time>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
