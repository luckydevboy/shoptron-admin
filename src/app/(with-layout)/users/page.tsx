"use client";

import { useGetUsers } from "@/services/users/hooks";
import Table from "@/components/ui/table";

const Users = () => {
  const { error, isLoading, data } = useGetUsers();

  const headers = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "_id", title: "ID" },
  ];

  return (
    <Table
      headers={headers}
      data={data?.data}
      error={error?.message}
      isLoading={isLoading}
    />
  );
};

export default Users;
