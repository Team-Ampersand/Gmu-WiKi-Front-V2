import { useCallback, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(async props => {
    setIsLoading(true);

    try {
      await API.post("/admin/board", props);
      setIsLoading(false);

      toast.success("글  성공");
    } catch (e) {
      toast.error("글 등록 실패");
      setIsLoading(false);
    }
  }, []);

  return { post, isLoading };
};

export default useFile;
