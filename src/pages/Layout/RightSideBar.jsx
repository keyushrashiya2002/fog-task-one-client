import React from "react";
import icon1 from "../../assets/images/squad.svg";
import plus from "../../assets/images/plus.png";
import online from "../../assets/images/online.svg";
import offline from "../../assets/images/offline.svg";
import user1 from "../../assets/images/sidebar1.png";
import user2 from "../../assets/images/sidebar2.png";

const RightSideBar = () => {
  return (
    <>
      <div className="right-sidebar">
        <ul className="list-none p-0 mb-0 ">
          <li className=" mb-3">
            <div className="usertype py-2">
              <img src={icon1} />
              <p className="d-inline-block text-light fs-7 ms-1 mb-0 fw-semibold">
                SQUAD
              </p>
            </div>
            <ul className="list-none p-0 mb-0 userlist">
              <li className="mb-2 active">
                <div className="d-flex   ps-1 ">
                  <img className="rightImg object-fit-cover" src={plus} />
                  <div className="ps-2 userdetails w-100 d-flex flex-column justify-content-center">
                    <p className="mb-0 fs-8 text-light fw-semibold">
                      Squad join
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="active mb-3">
            <div className="usertype py-2">
              <img src={online} />
              <p className="d-inline-block text-light fs-7 ms-1 mb-0 fw-semibold">
                ONLINE
              </p>
            </div>
            <ul className="list-none p-0 mb-0 userlist">
              <li className="mb-2 active">
                <div className="d-flex  rightuserblock ps-1 ">
                  <img className="rightImg object-fit-cover" src={user1} />
                  <div className="ps-2 userdetails w-100 d-flex flex-column justify-content-center">
                    <p className="mb-0 fs-8 text-light fw-semibold">MaryJone</p>
                    <p className="mb-0 fs-8 text-gray">Online</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="mb-3">
            <div className="usertype py-2">
              <img src={offline} />
              <p className="d-inline-block text-light fs-7 ms-1 mb-0 fw-semibold">
                OFFLINE
              </p>
            </div>
            <ul className="list-none p-0 mb-0 userlist">
              <li className="mb-2">
                <div className="d-flex  rightuserblock ps-1 ">
                  <img className="rightImg object-fit-cover" src={user2} />
                  <div className="ps-2 userdetails w-100 d-flex flex-column justify-content-center">
                    <p className="mb-0 fs-8 text-light fw-semibold">420</p>
                    <p className="mb-0 fs-8 text-gray">Offline</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightSideBar;
