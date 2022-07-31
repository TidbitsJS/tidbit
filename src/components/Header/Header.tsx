import { useState } from "react";

import styles from "../../style";
import { chevronDown } from "../../assets";

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
    sublinks: [
      {
        id: "link-2-1",
        name: "Productivity",
        hashTagColor: "text-[#49dfd4]",
      },
      {
        id: "link-2-2",
        name: "Programming",
        hashTagColor: "text-[#ff486a]",
      },
      {
        id: "link-2-3",
        name: "Design",
        hashTagColor: "text-[#7171e2]",
      },
      {
        id: "link-2-4",
        name: "Other",
        hashTagColor: "text-[#ffc947]",
      },
    ],
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
    id: "link-8",
    name: "Copyright",
    url: "/copyright",
  },
  {
    id: "link-9",
    name: "Technology",
    url: "/technology",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${styles.flexCenter} w-full ${styles.paddingY} flex-col`}
    >
      <div className="flex justify-center items-center">
        <p className="font-josefinSans font-bold text-[60px] text-titlesColor">
          <span className="text-primary">T</span>idbiT
        </p>
      </div>

      <div className={`${styles.flexCenter} mt-4`}>
        <ul
          className={`${styles.flexBetween} list-none flex-row p-3 black-shadow bg-white`}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className={`${styles.flexCenter} relative mx-4 header-link`}
              onMouseEnter={() => {
                if (link.sublinks) {
                  setIsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (link.sublinks) {
                  setIsOpen(false);
                }
              }}
            >
              <li className="text-blackColor hover:text-primary font-serifPro text-[15px] font-semibold tracking-[.3px] cursor-pointer">
                {link.name}
              </li>
              {link.sublinks && (
                <img
                  src={chevronDown}
                  alt="chevronDown"
                  className="w-3 h-3 object-contain ml-2"
                />
              )}
              {link.sublinks && isOpen && (
                <ul className="absolute list-none px-8 py-4 bg-white top-9 left-0 min-w-[250px] black-shadow z-[2]">
                  {link.sublinks.map((sublink) => (
                    <li
                      id={sublink.id}
                      className={`text-blackColor hover:text-primary font-serifPro text-[14px] font-normal tracking-[.3px] cursor-pointer my-4`}
                    >
                      <span className={`${sublink.hashTagColor}`}># </span>
                      {sublink.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
