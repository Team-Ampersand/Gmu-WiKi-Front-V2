import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  width: 25.4rem;
  background-color: none;
  margin-bottom: 8px;
  padding: 3px 10px;
  position: relative;

  div {
    display: inline-block;
    width: 100%;
    
    svg {
      margin-left: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.275);
      }
    }

    span {
      display: none;
      position: absolute;
      bottom: 140%;
      max-width: 200px;
      padding: 5px 10px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 3px;
      background: #808080;
      color: #fff;
      font-size: 0.8rem;
      z-index: 99;
      text-align: center;

      &::after {
        position: absolute;
        top: 99%;
        left: 50%;
        margin-left: -5px;
        border: solid transparent;
        border-color: rgba(51, 51, 51, 0);
        border-bottom-color: #808080;
        border-width: 5px;
        pointer-events: none;
        transform: rotate(180deg);
        content: " ";
      }
    }
    
    &:hover {
      span {
        display: block;
      }
    }

      .imgTooltip {
        width: 200px;
        left: 63%;
        
      }

      .codeTooltip {
        width: 70px;
        left: 86.7%;
      }
  }

  .unFunctionIcon {
    svg {
      margin-left: 12px;
      cursor: default;
      width: 5px;

      &:hover {
        transform: scale(1);
      }
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    display: none;
  }
`;
