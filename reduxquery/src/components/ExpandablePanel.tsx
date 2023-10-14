import React, { ReactNode, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

type ExpandablePanelProps = {
  children: ReactNode;
  header: ReactNode;
};

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  children,
  header,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
