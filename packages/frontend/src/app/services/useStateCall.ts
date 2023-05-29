import { useState, useEffect } from "react";

function useStateCall() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState("");

  useEffect(() => {
    if (state === "loading") {
      console.log("loading");
      setLoading(true);
      setError(false);
      setSuccess(false);
    } else if (state === "success") {
      console.log("success");
      setLoading(false);
      setError(false);
      setSuccess(true);
    } else if (state === "error") {
      setLoading(false);
      setError(true);
      setSuccess(false);
      console.log("error");
    } else {
      setLoading(false);
      setError(false);
      setSuccess(false);
    }
    console.log("state: " + state);
  }, [state]);

  return { setState, loading, success, error };
}

export default useStateCall;
