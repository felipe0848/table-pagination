import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px;
  cursor: default;
  height: 17px;
  white-space: nowrap;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};

  &:hover {
    svg {
      display: block;
    }
  }

  svg {
    display: none;
    fill: ${({ theme }) => theme.colors.primary.main};
    width: 12px;
    height: 12px;
    cursor: pointer;
  }

  p {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 11px;
    cursor: pointer;
  }
`;
