import { Route, Routes } from "react-router-dom";
import GaleryArtist from "../pages/GaleryArtist";
import IsPrivate from "./IsPrivate"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import CreateArtist from "../pages/CreateArtist"
import UpdatePage from "../pages/UpdatePage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />

      <Route path="/galery" element={<IsPrivate />}>
        <Route path="" element={<GaleryArtist />} />
      </Route>

      <Route path="/login" element={<LoginPage  />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create" element={<CreateArtist />} />
      <Route path="/artist/update/:id" element={<UpdatePage />} />
    </Routes>
  );
}

export default AppRoutes