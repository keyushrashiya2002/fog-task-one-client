import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Collapse, Row } from "reactstrap";
import { getMultiplayer } from "../../store/actions";
import NoData from "../../Component/Common/NoData";
import ImgTag from "../../Component/Common/ImgTag";

const MultiplayerList = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [openBlock, setOpenBlock] = useState(null);

  // Retrieve data from Redux store
  const { data, loading, limit } = useSelector((state) => ({
    data: state.Multiplayer.data,
    loading: state.Multiplayer.loading,
    limit: state.Multiplayer?.pagination?.limit,
  }));

  // Fetch categories on component mount
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getMultiplayer({}));
    }
  }, [data.length, dispatch]);

  // Render placeholder rows when loading
  const renderPlaceholderRows = () => {
    return Array((data.length > 0 ? data.length : limit) || 10)
      .fill(1)
      .map((_, key) => (
        <Col key={key} lg={3} md={4} sm={6} className="mb-3 placeholder-glow">
          <div className="border rounded p-2 h-100">
            <ImgTag className="object-fit-contain w-100 posterImg placeholder" />
            <h3 className="placeholder"></h3>
            <p className="placeholder"></p>
          </div>
        </Col>
      ));
  };

  // Render table content
  const renderContent = () => {
    return (
      <>
        <Col lg={3}>
          <ul className="ps-0 mb-0 list-none multiplaylist">
            {data.map((item, key) => (
              <li
                key={key}
                lg={3}
                md={4}
                sm={6}
                className="transition text-light"
                onClick={() => {
                  setOpenBlock((preValue) => (preValue === key ? null : key));
                }}
                onMouseEnter={() => {
                  setDetails(item);
                }}
                onMouseLeave={() => {
                  setDetails({});
                }}
              >
                <div className="border-top-muted p-3 titleBlock">
                  <h4 className="text-uppercase mb-0 fs-6 fw-semibold d-flex align-items-center justify-content-between">
                    {item.title}
                    <span className="d-lg-none">
                      <i
                        className={`ri-arrow-${
                          openBlock === key ? "down" : "right"
                        }-s-line`}
                      ></i>
                    </span>
                  </h4>
                </div>
                <Collapse isOpen={openBlock === key}>
                  <div className="innerConent d-lg-none mb-3">
                    <ImgTag
                      src={item.img}
                      className="w-100 object-fit-contain  h-300p mb-3 pe-2"
                    />
                    <h2 className="mb-1 text-light fw-semibold">
                      {item.title}
                    </h2>
                    <p className="mb-0 fw-semibold text-light">
                      {item.description}
                    </p>
                    {item?.points?.map((item, key) => {
                      return (
                        <p key={key} className="text-light mb-0 fw-semibold">
                          - {item}
                        </p>
                      );
                    })}
                  </div>
                </Collapse>
              </li>
            ))}
          </ul>
        </Col>
        {JSON.stringify(details) !== "{}" && (
          <Col lg={9} className="d-lg-block d-none">
            <ImgTag
              src={details.img}
              className="w-auto object-fit-contain  h-300p mb-3"
            />
            <h2 className="mb-1 text-light fw-semibold">{details.title}</h2>
            <p className="mb-0 fw-semibold text-light">{details.description}</p>
            {details?.points?.map((item, key) => {
              return (
                <p key={key} className="text-light mb-0 fw-semibold">
                  - {item}
                </p>
              );
            })}
          </Col>
        )}
      </>
    );
  };

  // Render No data
  const renderNoData = () => {
    return (
      <Col>
        <td colSpan={4} className="p-0 rounded rounded-3">
          <span className="py-5 w-100 d-flex align-items-center justify-content-center">
            <NoData />
          </span>
        </td>
      </Col>
    );
  };

  return (
    <Row className="mt-5">
      {loading
        ? renderPlaceholderRows()
        : data.length !== 0
        ? renderContent()
        : renderNoData()}
    </Row>
  );
};

export default MultiplayerList;
