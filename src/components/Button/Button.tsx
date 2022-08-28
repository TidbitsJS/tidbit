type ButtonType = {
  name: string;
  bgColor?: string;
  textColor?: string;
  restStyles?: string;
};

const Button = ({ name, bgColor, textColor, restStyles }: ButtonType) => {
  return (
    <button
      type="button"
      className={`font-josefinSans min-w-[180px] py-[8px] ${
        textColor ? textColor : "text-white"
      } ${
        bgColor ? bgColor : "bg-blackColor"
      } text-[15px] tracking-[.5px] leading-[1.8] ${restStyles}`}
    >
      {name}
    </button>
  );
};

export default Button;
