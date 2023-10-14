import React from "react";
import { useRemovePhotoMutation } from "../store";
import { CircularProgress } from "@mui/material";
import { GoTrash } from "react-icons/go";

type Photo = {
  photo: {
    url: string;
  };
  id: string;
};

const PhotoListItem: React.FC<Photo> = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handlePhotoDelete = () => {
    removePhoto(photo);
  };

  return (
    <div
      className="photoContainer"
      style={{ cursor: "pointer" }}
      onClick={handlePhotoDelete}
    >
      <img src={photo.url} alt="" />
      <div className="trashCan">
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash />
        )}
      </div>
    </div>
  );
};

export default PhotoListItem;
