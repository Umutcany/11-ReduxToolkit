import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { Button, Skeleton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import AlbumListItem from "./AlbumListItem";

type Props = {
  user: {
    name: string;
    id: number | string;
  };
};

type AnotherProps = {
  album: string;
  id: string;
  userId: string;
  title: string;
};

const AlbumList: React.FC<Props> = ({ user }) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = <div style={{ color: "red" }}>Hata var</div>;
  } else {
    content = data.map((album: AnotherProps) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Albümü</h3>
          <Button onClick={handleAlbumAdd} variant="outlined">
            {results.isLoading ? (
              <CircularProgress />
            ) : (
              <span> Albumu Ekle+</span>
            )}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
};

export default AlbumList;
