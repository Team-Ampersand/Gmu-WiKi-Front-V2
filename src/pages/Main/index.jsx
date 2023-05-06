import React from "react";
import Header from "../../components/Header";
import WhiteContiner from "../../components/WhiteContainer";
import * as S from "../../components/PageContainer/style";

function Main() {
  return (
    <>
      <Header />
      <S.PageCenter>
        <S.PageContainer>
          <WhiteContiner title="대문" sort="G무위키" />
          <S.DetailContent>
            <S.DetailCenter>
              <S.Explanation></S.Explanation>
              {/*padding-top: auto; 설정하여 height에 맞게 증가*/}
            </S.DetailCenter>
          </S.DetailContent>
        </S.PageContainer>
      </S.PageCenter>
    </>
  );
}

export default Main;
