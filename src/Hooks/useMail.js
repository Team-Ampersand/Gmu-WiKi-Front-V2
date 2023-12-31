import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useMail = ({ props }) => {
  const navigate = useNavigate();

  const postApproveMail = useCallback(async () => {
    try {
      await API.post(`/inquiry/approve/${props.id}`);
      toast.success("승인 메일 발송 성공");

      navigate("/inquiry");
    } catch (e) {
      toast.error("메일 발송 실패");
    }
  }, [props.id, navigate]);

  const postRefusalMail = useCallback(async () => {
    try {
      await API.post(`/inquiry/refusal/${props.id}`, {
        comment: props.refusalReason
      });
      toast.success("거부 메일 발송 성공");
      navigate("/inquiry");
    } catch (e) {
      toast.error("메일 발송 실패");
    }
  }, [props, navigate]);

  return { postApproveMail, postRefusalMail };
};

export default useMail;
