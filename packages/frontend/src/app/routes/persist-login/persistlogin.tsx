import { useState, useEffect } from "react";
import { getNewToken } from "../../redux/slices/auth/authActions";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { loggedUser, persist } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (loggedUser) {
      console.log("usuario logueado");
      isMounted && setIsLoading(false);
    } else if (!loggedUser && persist) {
      try {
        dispatch(getNewToken());
      } catch (err) {
        console.log(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    } else {
      console.log("Persitence off");
      setIsLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
