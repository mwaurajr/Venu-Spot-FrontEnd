import React from "react";
import CustomTable from "./common/customTable";
const Tables = () => {
  return (
    <div className="m-3">
      <h1 className="mt-4">Tables examples</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">/tables</li>
      </ol>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          DataTable Example
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <CustomTable pagination={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
