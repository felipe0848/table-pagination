import { css } from 'styled-components';

export default () => css`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 400;
  padding: 0 8px;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
  }
`
