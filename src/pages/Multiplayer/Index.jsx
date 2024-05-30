import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";

import MultiplayerList from "./DataList";
import { useDispatch, useSelector } from "react-redux";
import { getMultiplayer } from "../../store/actions";
import bgImage from "../../assets/images/menu__background.png";
import { setMultiplayerFilter } from "../../store/multiplayer/slice";
import BreadCrumb from "../../Component/Common/BreadCrumb";

const Multiplayer = () => {
  document.title = "Multiplayer";

  const dispatch = useDispatch();

  const [filterChanged, setFilterChanged] = useState(false);
  const filter = useSelector((state) => state.Multiplayer.filter);

  const handleFilter = (input) => {
    const { name, value } = input.target;
    dispatch(setMultiplayerFilter({ [name]: value }));
    setFilterChanged(true);
  };

  useEffect(() => {
    let delayDebounceFn;
    if (filterChanged) {
      delayDebounceFn = setTimeout(() => {
        dispatch(getMultiplayer({ page: 1 }));
      }, 500);
    }

    return () => clearTimeout(delayDebounceFn);
  }, [filter, filterChanged]);

  return (
    <div
      className="page-content"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <BreadCrumb title="MULTIPLAYER" pageTitle="QUICKMATCH" />

      <MultiplayerList />
    </div>
  );
};

export default Multiplayer;
