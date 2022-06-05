import { useState } from "react";

type TableManager = {
  selectRow: {
    mode: string;
    clickToSelect: boolean;
    onSelect: (row: { id: number }) => void;
  };
  sortByDefault: { dataField: string; order: string }[];
  selectedUserId: number;
};

export const useUserTable = (): TableManager => {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const sortByDefault = [
    {
      dataField: "lastName",
      order: "asc",
    },
    {
      dataField: "firstName",
      order: "asc",
    },
  ];

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSelect: (row: { id: any }) => setSelectedUserId(row.id),
  };
  return { sortByDefault, selectedUserId, selectRow };
};
