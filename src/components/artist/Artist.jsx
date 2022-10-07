import { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ArtistAxios from "../../services/artistAxios";

const Artist = ({ paginationArtist, artist, pagination }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const artistAxios = new ArtistAxios();

  const deleteArtist = (id) => {
    artistAxios.deleteArtist(id).then(() => {
      paginationArtist(pagination.page);
    });
  };

  return (
    <div>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={artist.album} />
        <Card.Body className="card-body-custom nameArtist">
          <Card.Text className="name">{artist.name}</Card.Text>
          <Card.Text>{artist.name}</Card.Text>
          <Card.Text>{artist.song}</Card.Text>
          <Card.Text> {artist.age}</Card.Text>
          <Card.Text>{artist.start_year}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="button" onClick={handleShow}>
            Update
          </Button>
        </Card.Footer>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Dialog>{artist.name}</Modal.Dialog>
        </Modal.Header>
        <Modal.Body>
          <p> {artist.name}</p>
          <ListGroup>
            <ListGroupItem>
              <p>Name: {artist.name}</p>
              <p>Song: {artist.song}</p>
              <p>Age: {artist.age}</p>
              <p>Start Year {artist.start_year}</p>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button as="span" variant="secondary">
            <Link className="link-react" to={`/artist/update/${artist._id}`}>
              Update
            </Link>
          </Button>
          <Button variant="secondary" onClick={() => deleteArtist(artist._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Artist;
