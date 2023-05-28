import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

interface ICheckUserLoggedProps {
  children: ReactNode;
}

const CheckUserLogged = ({ children }: ICheckUserLoggedProps) => {
  const navigate = useNavigate();
  const userLogged = useAppSelector((state) => state.auth.loggedUser);

  useEffect(() => {
    if (userLogged) {
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default CheckUserLogged;
