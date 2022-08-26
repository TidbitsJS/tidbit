type Tag = {
  tagName: string;
  hashTagColor: string;
  restStyles?: string;
};

const Tag = ({ tagName, hashTagColor, restStyles }: Tag) => {
  return (
    <p
      className={`font-josefinSans font-medium text-[14px] text-blackColor py-[6px] px-[8px] shadow-tagShadow cursor-pointer ${restStyles}`}
    >
      <span className={`text-[${hashTagColor}]`}>#</span> {tagName}
    </p>
  );
};

export default Tag;
