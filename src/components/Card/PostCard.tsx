const PostCard = () => {
  return (
    <article className="flex flex-row mb-6 cursor-pointer">
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
          <span className="title-effect post-card-title">
            Far far away, behind the word mountains
          </span>
        </h4>
        <time className="font-serifPro font-normal text-textColor text-[12px] mt-1">
          August 15, 2022
        </time>
      </div>
    </article>
  );
};

export default PostCard;
