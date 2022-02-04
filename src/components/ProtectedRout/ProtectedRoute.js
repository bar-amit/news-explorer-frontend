import { useContext } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ element }) {
  const location = useLocation();
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return element;
  }
}

export default ProtectedRoute;
