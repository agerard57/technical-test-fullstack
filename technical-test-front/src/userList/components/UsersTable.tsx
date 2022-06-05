/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
// eslint-disable-next-line import/no-internal-modules
import {
  Search, // eslint-disable-next-line import/no-internal-modules
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";

import { useUserTable } from "../hooks";

type Props = {
  searchProps: JSX.IntrinsicAttributes;
  baseProps: JSX.IntrinsicAttributes;
};

export const UsersTable: FC<Props> = ({ searchProps, baseProps }) => {
  const { SearchBar } = Search;
  const { selectRow, sortByDefault, selectedUserId } = useUserTable();
  return (
    <>
      <div
        css={css`
          padding: 3% 0;

          span {
            // Remove the "Search" label
            display: none;
          }
          button {
            // Button that wraps the <Link>
            margin: 0 14px;
          }
          a {
            // Affects the <Link>
            padding: 10% 0;
            text-decoration: none;
            color: white;
          }
        `}
      >
        <SearchBar
          {...searchProps}
          style={{ width: "400px", height: "40px" }}
        />
        <button className="btn btn-dark" disabled={!selectedUserId}>
          <Link to={`/user/${selectedUserId}`}>See profile</Link>
        </button>
      </div>
      <BootstrapTable
        {...baseProps}
        noDataIndication="There is no user"
        striped
        hover
        condensed
        selectRow={selectRow}
        defaultSorted={sortByDefault}
        pagination={paginationFactory()}
      />
    </>
  );
};
