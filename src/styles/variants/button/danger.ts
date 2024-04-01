import { css } from "styled-components";

export default () => css`
  background-color: ${({ theme }) => theme.colors.danger.deep};
  background-image: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger.deep};
  }
`;
