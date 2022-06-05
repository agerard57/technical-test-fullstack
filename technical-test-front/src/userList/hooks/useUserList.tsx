import { useEffect, useState } from "react";

import { getDataForAllUsers } from "../../services";
import { UserListData } from "../interfaces";

type UserPageManager = {
  users: UserListData[];
  columns: {
    dataField: string;
    text: string;
    sort?: boolean;
  }[];
  loading: boolean;
};

export const useUserList = (): UserPageManager => {
  const [users, setUsers] = useState<UserListData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //  Gets all users
  useEffect(() => {
    setLoading(true);
    getDataForAllUsers()
      .then((users) => {
        setUsers(users.data);
      })
      .finally(() => setLoading(false));
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
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
  ];
  return { users, columns, loading };
};
