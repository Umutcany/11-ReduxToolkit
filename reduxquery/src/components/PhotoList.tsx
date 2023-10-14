import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotoListItem from "./PhotoListItem";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

type Props = {
  album: {
    name: string;
    title: string;
    id: string | number;
  };
};

type Photo = {
  photo: string;
  id: string;
};

const AlbumList: React.FC<Props> = ({ album }) => {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = <div style={{ color: "red" }}>Hata var</div>;
  } else {
    content = data.map((photo: Photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h3>{album.title} Fotoğrafları</h3>
        <Button onClick={handlePhotoAdd} variant="outlined">
          {results.isLoading ? (
            <CircularProgress />
          ) : (
            <span> Fotoğraf Ekle+</span>
          )}
        </Button>
      </div>
      <div className="photoImage">{content}</div>
    </div>
  );
};

export default AlbumList;
