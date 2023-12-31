import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useFetch } from "../../Hooks";
import { useNavigate, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { toast } from "react-toastify";

const InquiryDetail = () => {
  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    name: "",
    inquiryType: ""
  });

  let { id } = useParams();

  const { fetch } = useFetch({
    url: `/inquiry/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  const navigate = useNavigate();
  const role = GetRole();

  useEffect(() => {
    if (role !== "관리자") {
      toast.error("권한이 없습니다.");
      navigate("/");
    }
  }, [role, navigate]);

  const formattedCreatedDate = new Date(state.createdDate).toLocaleString();

  return (
    <C.PageContainer title={state.title} sort={`문의-${state.inquiryType}`}>
      <C.Explanation>
        <C.InquiryDetailItem
          id={state.id}
          title={state.title}
          name={state.name}
          content={state.content}
          createdDate={formattedCreatedDate}
        />
      </C.Explanation>
    </C.PageContainer>
  );
};

export default InquiryDetail;
