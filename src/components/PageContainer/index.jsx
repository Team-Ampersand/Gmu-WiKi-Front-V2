import React from "react";
import * as S from "./style";
import WhiteContainer from "../WhiteContainer";

function PageContainer({ children }) {
  return (
    <S.PageCenter>
      <S.PageContainer>
        <WhiteContainer title="대문" sort="G무위키" />
        <S.DetailContent>
          <S.DetailCenter>
            <S.Explanation>{children}</S.Explanation>
            {/*padding-top: auto; 설정하여 height에 맞게 증가*/}
          </S.DetailCenter>
        </S.DetailContent>
      </S.PageContainer>
    </S.PageCenter>
  );
}

export default PageContainer;
