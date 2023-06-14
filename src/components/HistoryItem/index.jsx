import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
const HistoryItem = ({ dummyData }) => {
    
  return (
    <>
      {dummyData.map((item) => (
        <S.Container key={item.id}>
          <Link to={`history/${item.id}`}><S.SubTitle>{item.subTitle}</S.SubTitle></Link>
          <S.Editor>수정자: {item.editor}</S.Editor>
        </S.Container>
      ))}
    </>
  );
};

export default HistoryItem;
