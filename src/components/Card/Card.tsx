const Card = () => {
  return (
    <article className="relative ss:py-12 py-6 ss:px-14 px-7 flex flex-col bg-white max-w-[825px] my-5 shadow-cardShadow">
      <div className="flex flex-row">
        <div className="w-[120px] h-[120px] ss:block hidden">
          <img
            src="https://images.unsplash.com/photo-1565889673146-8e4d54300269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="card_img"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col ss:ml-5 ml-0">
          <h1 className="font-josefinSans font-bold text-[38px] leading-[1.2] mb-2 text-titlesColor">
            Far far away, behind the word mountains
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
        {["Productivity", "Coding", "JavaScript"].map((tag) => (
          <p
            key={tag}
            className="font-josefinSans font-medium text-[14px] text-blackColor py-[6px] px-[8px] shadow-tagShadow mr-[10px] cursor-pointer"
          >
            # {tag}
          </p>
        ))}
      </div>

      <div className="absolute bottom-[-20px] ss:left-[40%] left-[30%]">
        <button
          type="button"
          className="font-josefinSans py-[8px] px-[25px] text-white bg-blackColor text-[15px] tracking-[.5px] leading-[1.8]"
        >
          Continue Reading
        </button>
      </div>
    </article>
  );
};

export default Card;
