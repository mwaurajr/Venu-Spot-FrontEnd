import React from "react";
import CustomTable from "./common/customTable";
import { defaultUsersColumns, defaultUsersData } from "./../data/tablesData";

const AllUsers = () => {
  return (
    <React.Fragment>
      <div className="m-3">
        <h1 class="mt-4">All Users</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">/all-users</li>
        </ol>
      </div>
      <div class="card m-3">
        <div class="card-header">
          <i class="fas fa-user-friends mr-1"></i>
          All Users
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <CustomTable
              columns={defaultUsersColumns}
              data={defaultUsersData}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllUsers;
