type SectionTitleType = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <div className="flex flex-row items-center">
      <h4 className="font-josefinSans font-bold text-titlesColor text-[24px] tracking-[.25px]">
        {title}
      </h4>
      <div className="h-[2px] bg-primary flex-1 ml-2" />
    </div>
  );
};

export default SectionTitle;
