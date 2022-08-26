import { TAGCOLORS } from "../../constant";
import styles from "../../style";
import Tag from "../Tag/Tag";

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
];

const Card = () => {
  return (
    <article className="relative ss:py-12 py-6 ss:px-14 px-7 flex flex-col bg-white max-w-[825px] my-7 shadow-cardShadow">
      <div className="flex xs:flex-row flex-col">
        <div className="xs:w-[120px] w-full h-[120px] relative">
          <img
            src="https://images.unsplash.com/photo-1565889673146-8e4d54300269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="card_img"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 m-1 border-[1px] border-white" />
        </div>

        <div className="flex-1 flex flex-col xs:ml-5 ml-0 xs:mt-0 mt-5">
          <h1 className="font-josefinSans font-bold sm:text-[38px] text-[28px] leading-[1.2] mb-2 text-titlesColor cursor-pointer">
            <span className="card-title">
              Far far away, behind the word mountains
            </span>
          </h1>

          <time className="font-serifPro font-normal text-[15px] text-textColor">
            August 25, 2022
          </time>
        </div>
      </div>

      <div className="flex mt-8 mb-16">
        <p className="font-serifPro font-normal text-[17px] text-textColor leading-7">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden…
        </p>
      </div>

      <div className="flex flex-wrap ss:mb-2 mb-5">
        {articleTags.map((tag) => (
          <Tag
            key={tag.name}
            tagName={tag.name}
            hashTagColor={tag.color}
            restStyles="mr-[10px]"
          />
        ))}
      </div>

      <div
        className={`${styles.flexCenter} absolute left-1/2 right-1/2 bottom-[-20px]`}
      >
        <button
          type="button"
          className="font-josefinSans min-w-[180px] py-[8px] text-white bg-blackColor text-[15px] tracking-[.5px] leading-[1.8]"
        >
          Continue Reading
        </button>
      </div>
    </article>
  );
};

export default Card;
