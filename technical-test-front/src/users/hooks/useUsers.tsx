import { getAllUsers } from "../../services";
import { useEffect, useState } from "react";

type UserPageManager = {
  users: unknown[];
  columns: { dataField: string; text: string; sort?: boolean }[];
};

export const useUsers = (): UserPageManager => {
  const [users, setUsers] = useState(Array);

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
      sort: true,
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
  return { users, columns };
};
