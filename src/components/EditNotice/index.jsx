import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useEdit } from "../../Hooks";

const EditNotice = ({ title, content, id }) => {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editTitle, setEditTitle] = useState("");

  let save = [];

  const [numArr, setNumArr] = useState([1]);
  const textareaRef = useRef(null);

  useEffect(() => {
    setEditContent(content);
    setEditTitle(title);

    for (let i = 1; i <= content.split("\n").length; i++) {
      save.push(i);
    }
    setNumArr(save);
  }, [content, title]);

  useEffect(() => {
    function handleUnLoad(e) {
      e.returnValue = "";
      e.preventDefault();
    }
    window.addEventListener("beforeunload", handleUnLoad);

    return () => {
      window.removeEventListener("beforeunload", handleUnLoad);
    };
  }, []);

  const onChange = e => {
    setEditTitle(e.target.value);
  };

  const onChangeTextArea = e => {
    setEditContent(e.target.value);
    const textarea = textareaRef.current;

    for (let i = 1; i <= textarea.value.split("\n").length; i++) {
      save.push(i);
    }
    setNumArr(save);
  };

  const handleEdit = () => {
    setEdit(true);
    setPreview(false);
  };

  const handlePreview = () => {
    setEdit(false);
    setPreview(true);
  };

  const { editNoticeUpload } = useEdit({
    props: { id, editContent, editTitle }
  });

  const editPost = () => {
    const shouldPost = window.confirm("이 공지를 편집하시겠습니까?");
    if (shouldPost) {
      editNoticeUpload();
    }
  };

  return (
    <>
      <S.WriteOptions>
        <S.ChangeButtonContainer>
          <S.EditButton checked={edit} onClick={handleEdit}>
            편집
          </S.EditButton>
          <S.PreviewButton checked={preview} onClick={handlePreview}>
            미리보기
          </S.PreviewButton>
        </S.ChangeButtonContainer>
        {edit && (
          <C.WriteOption
            content={editContent}
            setContent={setEditContent}
            textareaRef={textareaRef}
            numArr={numArr}
            setNumArr={setNumArr}
          />
        )}
      </S.WriteOptions>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox
            title={editTitle}
            content={editContent}
            textareaRef={textareaRef}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
          />
        </S.WriteBox>
      )}
      {preview && (
        <S.WriteBox>
          <C.PreviewWriteBox content={editContent} />
        </S.WriteBox>
      )}
      <S.RegisterButton onClick={editPost}>편집하기</S.RegisterButton>
    </>
  );
};

export default React.memo(EditNotice);
