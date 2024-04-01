/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

interface IButtonContainer {
  $isFullWidth: boolean;
  $isDisabled: boolean;
  $variant?:
    | "outlined"
    | "mini"
    | "link"
    | "danger"
    | "invisible"
    | "invisible_danger";
}

export type VariantsType = {
  [key: string]: () => any;
};

export const Container = styled.button<IButtonContainer>`
  width: ${(props) => props.$isFullWidth && "100%"};
  font-size: 1.25rem;
  height: 60px;
  padding: 0px 22px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center !important;

  background-image: var(
    --degrad-roxo-01,
    linear-gradient(90deg, #5b36ba 0%, #7e5ed2 100%)
  );

  color: #fff;
  font-weight: 700;

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  #spinner {
    margin: 0 auto;
    color: #fff;
  }

  ${(props) =>
    props.$isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `};
`;
