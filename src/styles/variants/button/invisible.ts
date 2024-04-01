import { css } from 'styled-components'

export default (custom?: string) => css`
  background: transparent;
  border: none;
  border-radius: 8px;
  padding: 0 4px;
  color: ${({ theme }) => custom === 'danger' ?
    theme.colors.danger.deep :
    theme.colors.primary.main} !important;

  &:hover {
    background-color: transparent;
  }

`
