import { FC, useEffect, useState } from "react";
import ToolkitProvider, {
  Search, // eslint-disable-next-line import/no-internal-modules
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { getAllUsers } from "../../services";

export const Users: FC = () => {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const { SearchBar } = Search;

  //  Gets all users
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users.data);
    });
  }, []);

  const columns = [
    {
      dataField: "lastName",
      text: "Last name",
      sort: true,
    },
    {
      dataField: "firstName",
      text: "First name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
  ];

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSelect: (row: { id: any }) => setSelectedId(row.id),
  };
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title="User list" />
        <div className="container">
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={users}
            columns={columns}
            search
          >
            {(props: {
              searchProps: JSX.IntrinsicAttributes;
              baseProps: JSX.IntrinsicAttributes;
            }) => (
              <div>
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "400px", height: "40px" }}
                />
                <Link to={`/user/${selectedId}`}>See profile</Link>{" "}
                <BootstrapTable
                  {...props.baseProps}
                  noDataIndication="There is no user"
                  striped
                  hover
                  condensed
                  selectRow={selectRow}
                  defaultSorted={[
                    {
                      dataField: "lastName",
                      order: "asc",
                    },
                  ]}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </BlueBorderBackground>
    </>
  );
};
