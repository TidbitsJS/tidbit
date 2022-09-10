type Media = {
  icon: string;
  url: string;
  iconBg: string;
};

const SocialMediaCard = ({ icon, url, iconBg }: Media) => {
  return (
    <div
      className={`relative ss:w-[78px] w-[58px] ss:h-[72px] h-[52px] flex justify-center items-center cursor-pointer ${iconBg}`}
      onClick={() => window.open(url, "_blank")}
    >
      <img
        src={icon}
        alt="twitter_icon"
        className="w-1/2 h-1/2 object-contain"
      />
      <div className="absolute inset-0 m-1 border-[1px] border-white" />
    </div>
  );
};

export default SocialMediaCard;
