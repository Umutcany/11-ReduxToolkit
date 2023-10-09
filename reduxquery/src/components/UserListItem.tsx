import React from "react";

type Props = {
  user: {
    name: string;
    id: number | string;
  };
};

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.id}</div>
    </div>
  );
};

export default UserListItem;
