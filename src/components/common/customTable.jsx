import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { defaultColumns, defaultData } from "./../../data/tablesData";
import { PropTypes } from "prop-types";

const CustomTable = ({ columns, data, pagination }) => {
  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={data ? data : defaultData}
      columns={columns ? columns : defaultColumns}
      pagination={pagination ? paginationFactory() : null}
    />
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.bool,
};

export default CustomTable;
