import React, { useState } from "react";
import * as A from "../../assets";
import * as S from "./style";

export default function Detail({ title, hasNumber, children, number }) {
  const [detailActive, setDetailActice] = useState(false);
  return (
    <S.DetailContainer detailActive={detailActive}>
      <S.DetailTitleContainer>
        <div onClick={() => setDetailActice(prev => !prev)}>
          <A.Arrow />
        </div>
        {hasNumber && (
          <S.DetailNumber detailActive={detailActive}>{number}.</S.DetailNumber>
        )}
        <S.DetailTitle>{title}</S.DetailTitle>
      </S.DetailTitleContainer>
      <S.DetailBorder />
      {detailActive && <S.DetailContent>{children}</S.DetailContent>}
    </S.DetailContainer>
  );
}