import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ArtistAxios from "../services/artistAxios";
import { useNavigate } from "react-router-dom";


const CreateArtist = () => {
    const navigate = useNavigate();
    const artistAxios = new ArtistAxios();
    const [newArtist, setNewArtist] = useState({});

    const updateNewArtist = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewArtist({ ...newArtist, [name]: value });
    };

    const createNewArtist = (eventHTML) => {
        eventHTML.preventDefault();
        artistAxios.createArtist(newArtist).then(() =>
            navigate("/galery"),
        )
    };
   


    return (
      <>
        <Form className="registro" onSubmit={createNewArtist}>
          <h1>Create Artist</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Text" name="name" onChange={updateNewArtist} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Song</Form.Label>
            <Form.Control type="Text" name="song" onChange={updateNewArtist} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" onChange={updateNewArtist} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type="number"
              name="start_year"
              onChange={updateNewArtist}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </>
    );
    
};


export default CreateArtist;