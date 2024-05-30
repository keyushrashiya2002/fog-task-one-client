import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import arrow from "../../assets/images/back.svg";

const BreadCrumb = ({ title, pageTitle }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            {pageTitle && (
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item text-light fs-6 fw-semibold active opacity-50">
                    <Link to="#">
                      <img src={arrow} />
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-light fs-6 fw-semibold active">
                    {title} <span className="ms-1">/</span>
                  </li>
                </ol>
              </div>
            )}
          </div>
          <h1>
            <Link to="#" className="text-light fw-semibold active">
              {pageTitle}
            </Link>
          </h1>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
