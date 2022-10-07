import { useEffect, useState } from "react";
import ArtistAxios from "../services/artistAxios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  Button,
  Col,
  Container,
  Modal,
  Pagination,
  Row,
} from "react-bootstrap";
import Artist from "../components/Artist/Artist";

const GaleryArtist = () => {
  const artistAxios = new ArtistAxios();
  const [artists, setArtists] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    maxPage: 0,
  });

  const paginationArtist = (page) => {
    artistAxios.getAllArtist({ page }).then((artists) => {
      setArtists(artists);
      // setPagination({ page: artists.page, maxPage: artists.maxpage });
    });
  };

  // // // const deleteArtist = (id) => {
  // // //   console.log(id);
  // // //   artistAxios.deleteArtist(id).then(() => {
  // // //     paginationArtist(pagination.page);
  // // //   });
  // // };
  useEffect(() => {
    paginationArtist(0);
  }, []);

  return (
    <div className="galery">
      <Container>
        <Row xs={1} md={3} className="g-4">
          {artists.map((artist) => (
            <Col key={artist._id}>
              <Artist artist={artist} paginationArtist={paginationArtist} pagination={pagination} />
            </Col>
          ))}
        </Row>
      </Container>
      <Pagination>
        <Pagination.First onClick={() => paginationArtist(0)} />
        <Pagination.Prev
          onClick={() => paginationArtist(pagination.page - 1)}
        />
        <Pagination.Next
          onClick={() => paginationArtist(pagination.page + 1)}
        />
        <Pagination.Last onClick={() => paginationArtist(pagination.maxPage)} />
      </Pagination>
    </div>
  );
};

export default GaleryArtist;
