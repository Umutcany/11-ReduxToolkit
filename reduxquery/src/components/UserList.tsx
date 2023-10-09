import React from "react";
import { useFetchUsersQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UserListItem from "./UserListItem";

const UserList = () => {
  const { isError, isFetching, data } = useFetchUsersQuery();

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div style={{ color: "red" }}>Hata var</div>;
  } else {
    content = data.map((user: string, index: number) => {
      return <UserListItem key={index} user={user} />;
    });
  }
  return <div>{content}</div>;
};

export default UserList;
