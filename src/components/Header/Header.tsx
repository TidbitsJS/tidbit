import { useState } from "react";

import styles from "../../style";
import { close, menu } from "../../assets";

type Link = {
  id: string;
  name: string;
  url: string;
};

type Links = {
  navLinks: Link[];
  restStyles: string;
};

const links = [
  {
    id: "link-1",
    name: "Home",
    url: "/",
  },
  {
    id: "link-2",
    name: "#Tag",
    url: "/tags",
  },
  {
    id: "link-3",
    name: "Author",
    url: "/author",
  },
  {
    id: "link-4",
    name: "Contact",
    url: "/contact",
  },
  {
    id: "link-5",
    name: "About",
    url: "/about",
  },
  {
    id: "link-9",
    name: "Technology",
    url: "/technology",
  },
];

const NavLinks = ({ navLinks, restStyles }: Links) => (
  <div className={`flex-1 md:flex hidden ${restStyles}`}>
    <ul className={`${styles.flexBetween} list-none flex-row gap-12`}>
      {navLinks.map((item) => (
        <li
          key={item.id}
          className="text-blackColor hover:text-primary font-serifPro text-[18px] font-semibold tracking-[.3px] cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header
      className={`${styles.flexCenter} w-full ${styles.padding} flex-row`}
    >
      <div
        className={`${styles.boxWidth} flex flex-row md:justify-center justify-between`}
      >
        <NavLinks
          navLinks={links.slice(0, 3)}
          restStyles="justify-start items-center"
        />

        <div className={`md:flex hidden ${styles.flexCenter}`}>
          <p className="font-josefinSans font-bold text-[40px] leading-[0px] text-titlesColor">
            <span className="text-primary">T</span>idbiT
          </p>
        </div>

        <NavLinks
          navLinks={links.slice(3)}
          restStyles="justify-end items-center"
        />

        {/* Mobile sidebar */}
        <div className="md:hidden flex-1 flex justify-start items-center">
          <p className="font-josefinSans font-bold text-[30px] text-titlesColor normal-lh">
            <span className="text-primary">T</span>idbiT
          </p>
        </div>

        <div
          className="md:hidden flex"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <img
            src={!openSidebar ? menu : close}
            alt="menu_icon"
            className="w-8 h-8 object-contain cursor-pointer rotate-180"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
