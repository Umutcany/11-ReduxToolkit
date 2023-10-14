import { CircularProgress } from "@mui/material";
import React from "react";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import PhotoList from "./PhotoList";
import { useRemoveAlbumMutation } from "../store";

type AnotherProps = {
  album: {
    userId: string;
    id: string;
    title: string;
  };
};

const AlbumListItem: React.FC<AnotherProps> = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleAlbumAdd = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <button
        style={{ marginRight: "30px", border: "none", cursor: "pointer" }}
        onClick={handleAlbumAdd}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash />
        )}
      </button>
      {album.title}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
};

export default AlbumListItem;
