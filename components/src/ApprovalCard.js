import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        {props.children}
        <div className="ui Two Buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
