import React, { useState } from "react";
import img1 from "../../assets/images/sidebar3.png";
import img2 from "../../assets/images/sidebar5.png";
import img3 from "../../assets/images/sidebar4.png";
import img4 from "../../assets/images/sidebar6.png";
import img5 from "../../assets/images/sidebar7.png";
import playIcon from "../../assets/images/play.png";
import moreIcon from "../../assets/images/threeline.png";
import MyToolTip from "../../Component/Common/MyToolTip";

const menuObj = [
  {
    title: "Battlefield V",
    icon: img1,
    url: "#",
  },
  {
    title: "Battlefield 1",
    icon: img2,
    url: "#",
  },
  {
    title: "Battlefield 4",
    icon: img3,
    url: "#",
  },
  {
    title: "Battlefield Hardline",
    icon: img4,
    url: "#",
  },
  {
    title: "CAREER",
    icon: img5,
    url: "#",
  },
  {
    title: "WATCH",
    icon: playIcon,
    url: "#",
  },
  {
    title: "NEWS",
    icon: moreIcon,
    url: "#",
  },
];

const LeftSideBar = () => {
  const [active, setActive] = useState(2);

  return (
    <>
      <div className="left-sidebar">
        <div className="leftmenu">
          <ul className="list-none p-0 mb-0">
            {menuObj.map((item, key) => {
              return (
                <li key={key} className="py-2">
                  <MyToolTip
                    id={`menuTooltip${key}`}
                    innerClassName="d-inline-block lh-normal"
                    text={item.title}
                  >
                    <a
                      href={item.url}
                      onClick={() => {
                        setActive(key);
                      }}
                      className={`opacity-hover opacity-50 px-4 position-relative  d-inline-block ${
                        active === key ? "active" : ""
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt="..."
                        className="object-fit-contain sidebarImg"
                      />
                    </a>
                  </MyToolTip>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-3">
          <MyToolTip id={`menuTooltipHelp`} text={"Help"}>
            <a
              href="#"
              className="opacity-hover opacity-50 text-white w-100 d-inline-block text-center fs-5 py-3"
            >
              <i className="ri-question-fill"></i>
            </a>
          </MyToolTip>
          <MyToolTip id={`menuTooltipQuit`} text={"Quit"}>
            <a
              href="#"
              className="opacity-hover opacity-50 text-white w-100 d-inline-block text-center fs-5 py-3"
            >
              <i className="ri-logout-circle-line"></i>
            </a>
          </MyToolTip>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
