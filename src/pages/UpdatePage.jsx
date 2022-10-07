import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ArtistAxios from "../services/artistAxios";
import { useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artistAxios = new ArtistAxios();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    artistAxios
      .getOneArtistById(id)
      .then((artist) => {
      setArtist(artist);
    });
  }, []);

  const updateNewArtist = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setArtist({ ...artist, [name]: value });
  };

  const updateArtist = (eventHTML) => {
    eventHTML.preventDefault();
    artistAxios
      .updateArtist(id, artist)
      .then(() => {
      navigate("/");
    });
      
  };

  return (
    <Form className="registro" onSubmit={updateArtist}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          onChange={updateNewArtist}
          type="text"
          placeholder="name"
          value={artist.name || ""}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 songArtist"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Song</Form.Label>
        <Form.Control
          type="Text"
          placeholder="song"
          onChange={updateNewArtist}
          name="song"
          value={artist.song || ""}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 ageArtist"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="Number"
          placeholder="age"
          onChange={updateNewArtist}
          name="age"
          value={artist.age || ""}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 startArtist"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Start Year</Form.Label>
        <Form.Control
          type="number"
          placeholder="start_year"
          onChange={updateNewArtist}
          name="start_year"
          value={artist.start_year || ""}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdatePage;
