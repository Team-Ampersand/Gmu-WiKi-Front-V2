import React from "react";
import * as S from "./style.js";

function WhiteContainer({ title, sort }) {
  return (
    <S.WhiteContainer>
      <S.WhiteContainerContent>
        <S.ContainerCenter>
          <S.Title>
            <span>G무위키:{title}</span>
          </S.Title>
          <S.ClassIfication>
            <div classification>
              분류 : <span>{sort}</span>
            </div>
          </S.ClassIfication>
        </S.ContainerCenter>
      </S.WhiteContainerContent>
    </S.WhiteContainer>
  );
}

export default WhiteContainer;