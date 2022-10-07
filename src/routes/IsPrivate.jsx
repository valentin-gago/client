import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

const isPrivate = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading, isLoggedIn, user } = useContext(AuthContext);

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) {
    return <Navigate to={"/login"} />;
  }
  
  return <Outlet/>
  
};

export default isPrivate;
