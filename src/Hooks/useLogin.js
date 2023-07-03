import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const gauthCode = searchParams.get("code");

  const { fetch } = useFetch({
    url: "/auth",
    method: "post",
    successMessage: "로그인 성공",
    skipLogin: true,
    onSuccess: data => {
      if (typeof window !== "undefined") {
        const tokenManager = new TokenManager();
        tokenManager.setTokens(data);
      }
      navigate("/");
    },
    onFailure: () => {
      navigate("/");
    },
  });

  useEffect(() => {
    const checkLoggedIn = () => {
      const tokenManager = new TokenManager();
      return tokenManager.initToken();
    };

    if (checkLoggedIn()) {
      navigate("/");
      return;
    }

    if (!gauthCode) return;
    fetch({ code: gauthCode });
  }, [gauthCode]);
};

export default useLogin;
