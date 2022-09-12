import React from "react";

import SectionTitle from "../SectionTitle";
import PostCard from "../Card/PostCard";
import SocialMediaCard from "../Card/SocialMediaCard";
import { twitter, instagram, linkedin, github } from "../../assets";
import { TAGCOLORS } from "../../constant";
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
  {
    name: "Technology",
    color: TAGCOLORS.other,
  },
  {
    name: "Design",
    color: TAGCOLORS.design,
  },
  {
    name: "Programming",
    color: TAGCOLORS.programming,
  },
];

const media = [
  {
    icon: twitter,
    url: "https://twitter.com/TidbitsJS",
    iconBg: "bg-[#63cdf1]",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/tidbits.js",
    iconBg: "bg-[#e62ba9]",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/sujata-gunale-15964b166/",
    iconBg: "bg-[#0288D1]",
  },
  {
    icon: github,
    url: "https://github.com/TidbitsJS",
    iconBg: "bg-[#000]",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-[.95] md:flex-col flex-wrap md:ml-16 ml-0 md:mt-6 mt-12 sticky top-0 h-fit min-w-[270px] gap-8">
      <div className="flex flex-col flex-1 min-w-[270px]">
        <SectionTitle title="Recent Posts" />

        <div className="mt-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-[270px]">
        <SectionTitle title="Tag Cloud" />

        <div className="my-6 flex flex-wrap">
          {articleTags.map((tag, index) => (
            <div key={`tag-cloud-${index + 1}`} className="w-fit m-2">
              <Tag tagName={tag.name} hashTagColor={tag.color} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-[270px]">
        <SectionTitle title="Social" />

        <div className="mt-6 flex flex-wrap gap-4">
          {media.map((item, index) => (
            <SocialMediaCard
              key={`media-${index}`}
              icon={item.icon}
              url={item.url}
              iconBg={item.iconBg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
