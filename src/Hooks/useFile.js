import { useCallback, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upload = useCallback(async file => {
    const formData = new FormData();
    setIsLoading(true);

    file.forEach(f => {
      formData.append("file", f);
    });

    try {
      const { data } = await API.post("/file", formData, {
        header: { "Content-Type": "multipart/form-data" }
      });

      setIsLoading(false);

      return data.awsUrl;
    } catch (e) {
      if (e.response && e.response.status >= 500) {
        toast.error("서버에 문제가 생겼습니다.");
      } else if (e.response && e.response.status >= 400) {
        toast.error("허용되지 않는 파일 형식입니다.");
      } else {
        toast.error("이미지 업로드에 실패했습니다.");
      }
      setIsLoading(false);
    }
  }, []);

  return { upload, isLoading };
};

export default useFile;
