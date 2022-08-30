import styles from "../style";
import { MainCard, Header, PostCard, SectionTitle, Tag } from "../components";
import { TAGCOLORS } from "../constant";

const articleTags = [
  {
    name: "Productivity",
    color: TAGCOLORS.productivity,
  },
  {
    name: "Coding",
    color: TAGCOLORS.other,
  },
  {
    name: "JavaScript",
    color: TAGCOLORS.language,
  },
  {
    name: "Technology",
    color: TAGCOLORS.other,
  },
  {
    name: "Design",
    color: TAGCOLORS.design,
  },
  {
    name: "Programming",
    color: TAGCOLORS.programming,
  },
];

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

          <div className="flex flex-[.95] md:flex-col flex-wrap md:ml-16 ml-0 md:mt-0 mt-12 sticky top-0 h-fit min-w-[270px]">
            <div className="my-6 flex flex-col flex-1 mr-10 min-w-[270px]">
              <SectionTitle title="Recent Posts" />

              <div className="mt-8">
                <PostCard />
                <PostCard />
                <PostCard />
              </div>
            </div>

            <div className="my-6 flex flex-col flex-1 min-w-[270px]">
              <SectionTitle title="Tag Cloud" />

              <div className="mt-6 flex flex-wrap">
                {articleTags.map((tag, index) => (
                  <div key={`tag-cloud-${index + 1}`} className="w-fit m-2">
                    <Tag tagName={tag.name} hashTagColor={tag.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
