import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Artist from "../components/Artist/Artist";
import { useNavigate } from "react-router-dom";
import ArtistAxios from "../services/artistAxios";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState();
  const Navigate = useNavigate();
  const artistAxios = new ArtistAxios();
  useEffect(() => {
    artistAxios.getOneArtistById(id).then((artist) => {
      setArtist(artist);
    });
  }, []);

  console.log(artist);
  if (!artist) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
};

export default ArtistPage;
