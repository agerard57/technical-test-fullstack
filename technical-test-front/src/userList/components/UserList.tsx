import { FC } from "react";
// eslint-disable-next-line import/no-internal-modules
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { LoadingScreen } from "../../loadingScreen";
import { useUserList } from "../hooks";
import { UsersTable } from "./UsersTable";

export const UserList: FC = () => {
  const { users, columns, loading } = useUserList();
  if (loading) return <LoadingScreen />;
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
              <UsersTable
                searchProps={props.searchProps}
                baseProps={props.baseProps}
              />
            )}
          </ToolkitProvider>
        </div>
      </BlueBorderBackground>
    </>
  );
};
