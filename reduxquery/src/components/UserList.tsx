import React from "react";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UserListItem from "./UserListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const UserList = () => {
  const { isError, isFetching, data } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();
  debugger;

  const handleUserAdd = () => {
    addUser();
  };

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
  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "20px" }}>Kişiler </h1>
        <Button onClick={handleUserAdd} variant="outlined">
          {results.isLoading ? <CircularProgress /> : <span> Kişi Ekle+</span>}
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
