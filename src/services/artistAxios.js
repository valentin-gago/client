import InitAxios from "./initAxios";

class ArtistAxios extends InitAxios {
  constructor() {
    super("/artist");
  }

  getAllArtist() {
    return this.axios.get("/").then((response) => response.data);
  }

    getOneArtistById(id) {
        const token = localStorage.getItem("tokenAuth");
        return this.axios
          .get(`/${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => response.data);
    }

  getOneArtist(body) {
    return this.axios.get("/", body).then((response) => response.data);
  }

  createArtist(body) {
    return this.axios.post("/create", body).then((response) => response.data);
  }

  updateArtist(id, body) {
    return this.axios.put(`/${id}`, body).then((response) => response.data);
  }

  deleteArtist(id) {
    return this.axios.delete(`/${id}/delete`).then((response) => response.data);
  }
}


export default ArtistAxios;