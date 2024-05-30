import React, { useState, ReactNode } from "react";
import { Tooltip } from "reactstrap";

const MyToolTip = ({
  id,
  text,
  placement = "right",
  children,
  innerClassName = "",
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  return (
    <div id={`tooltip-${id}`} className={`${innerClassName} `}>
      {children}
      {text && (
        <Tooltip
          placement={placement}
          target={`tooltip-${id}`}
          isOpen={tooltipOpen}
          toggle={toggleTooltip}
        >
          {text}
        </Tooltip>
      )}
    </div>
  );
};

export default MyToolTip;
