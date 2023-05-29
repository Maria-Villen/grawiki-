import { redirect, useParams } from "react-router-dom";
import { ChangePassForm } from "../../components";
import { auth } from "../../services/useMockServices";
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

const ChangePass = () => {
  const { loggedUser } = useAppSelector((state) => state.auth);
  const { tokenPassVerify } = auth;

  // User is Logged in ? It is a user changing their password in their profile.
  const [isTokenOk, setIsTokenOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // User not logged in ?  It is a forgotten password
  const params = useParams();

  if (loggedUser) {
    setIsTokenOk(true);
  } else if (params.token) {
    try {
      setIsLoading(true);
      const result = tokenPassVerify(params.token);
      setIsLoading(true);
      if (result) {
        setIsTokenOk(true);
      } else {
        alert("Invalid or expired link");
      }
    } catch (err) {
      alert("An error ocurred, try again");
    }
  } else {
    redirect("/password");
  }

  return (
    <>
      {isLoading ? (
        <p>Verifying link</p>
      ) : (
        <div className="centeredPages">{isTokenOk && <ChangePassForm />}</div>
      )}
    </>
  );
};

export default ChangePass;
