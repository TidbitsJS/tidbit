type TagType = {
  tagName: string;
  hashTagColor: string;
  restStyles?: string;
};

const Tag = ({ tagName, hashTagColor, restStyles }: TagType) => {
  return (
    <p
      className={`font-josefinSans font-medium text-[14px] text-blackColor hover:text-[${hashTagColor}] py-[6px] px-[8px] shadow-tagShadow cursor-pointer ${restStyles} tag`}
    >
      <span className={`text-[${hashTagColor}]`}>#</span> {tagName}
    </p>
  );
};

export default Tag;
