import styled from "styled-components";

export const GraphCenter = styled.div`
  width: 44vw;
  display: flex;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const TitleGraph = styled.div`
  width: 24%;
  border: 1px solid #c0c0c0;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-weight: bold;
  font-size: 0.98rem;
  word-break: break-all;
  font-size: 0.9rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.2rem;
    height: 100%;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.1rem;
    width: 35%;
  }
`;

export const ContentGraph = styled.div`
  width: 100%;
  border: 1px solid #dddddd;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => (props.contentColor ? "0.98rem" : "0.85rem")};
  color: ${props => (props.color ? "white" : "black")};
  font-weight: ${props => (props.contentColor ? "700" : true)};
  background-color: ${props => (props.contentColor ? "#007EFF" : "white")};

  @media screen and (max-width: 1300px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.2rem;
    height: 100%;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.1rem;
  }
`;
