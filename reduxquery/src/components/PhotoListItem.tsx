import React from "react";

type Photo = {
  photo: string;
  id: string;
};

const PhotoListItem: React.FC<Photo> = ({ photo }) => {
  return <div>PhotoListItem</div>;
};

export default PhotoListItem;
