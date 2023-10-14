import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from "../store/apis/usersApi";
import { CircularProgress } from "@mui/material";

type Props = {
  user: {
    name: string;
    id: number | string;
  };
};

const UserListItem: React.FC<Props> = ({ user }) => {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <>
      <button
        onClick={handleClick}
        style={{ marginRight: "30px", border: "none", cursor: "pointer" }}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash />
        )}
      </button>
      {user.name}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
};

export default UserListItem;
