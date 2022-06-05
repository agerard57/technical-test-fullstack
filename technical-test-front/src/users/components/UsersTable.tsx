/** @jsxImportSource @emotion/react */
import { useUsersTable } from "../hooks";
import { css } from "@emotion/react";
import { FC } from "react";
import {
  Search, // eslint-disable-next-line import/no-internal-modules
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";

type Props = {
  searchProps: JSX.IntrinsicAttributes;
  baseProps: JSX.IntrinsicAttributes;
};

export const UsersTable: FC<Props> = ({ searchProps, baseProps }) => {
  const { SearchBar } = Search;
  const { selectRow, sortByDefault, selectedUserId } = useUsersTable();
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
      />
    </>
  );
};
