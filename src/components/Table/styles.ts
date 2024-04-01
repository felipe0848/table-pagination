import { Button } from "../Button";
import { css, styled } from "styled-components";

interface TableProps {
  alignHeader?: string;
  $disabledRow?: boolean;
  align?: string;
  $isDivider?: boolean;
}

export const Th = styled.th`
  width: 100%;
  &:last-child {
    padding-right: 26px;
  }

  padding: 24px 24px 12px;
  text-align: ${({ align }) => (align ? align : "left")};
  font-weight: 500;
  white-space: nowrap;
`;

export const RowButton = styled(Button)`
  position: absolute;
  right: 10px !important;
  min-width: 130px;
  padding: 12px 16px;
  display: none;
  top: 50%;
  transform: translate(-16px, -50%);
  white-space: nowrap;
`;
export const DeleteButton = styled.button`
  position: absolute;
  right: -6px !important;
  padding: 12px;
  display: none;
  top: 50%;
  transform: translate(-16px, -50%);
  white-space: nowrap;
  background: transparent;
  border: none;
  border-radius: 8px;
`;

export const Container = styled.div<TableProps>`
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 16px !important;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.01);
  width: 100%;

  tbody tr {
    background: ${({ theme }) => theme.colors.background.main};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.lighter};
    transition: background 0.2s ease-in;
    position: relative;
  }

  td {
    /* width: 100%; */
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
  }

  .selected-column {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
  }

  tbody tr:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary.lighter};

    ${RowButton} {
      display: flex;
    }
    :last-child > ${DeleteButton} {
      display: flex;
    }

    // estiliza os valores da coluna status
    .Status {
      color: ${({ theme }) => theme.colors.success.main};
      .container-status {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: ${({ theme }) => theme.colors.success.light};
        .circle {
          display: block;
        }
      }
    }
  }

  .infiniteScroll {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TextValue = styled.div`
  border-radius: 8px;
`;

export const PaginationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;

  .custom-pagination {
    display: flex;
    gap: 8px;
    .item {
      border-radius: 8px;
      cursor: pointer;
      padding: 4px 8px;
      font-size: 14px;
      font-weight: 700;
    }
    .active.item {
      color: ${({ theme }) => theme.colors.background.main};
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Tr = styled.tr<TableProps>`
  ${({ $disabledRow, theme }) =>
    $disabledRow &&
    css`
      & > * {
        background-color: ${theme.colors.background.light};
        cursor: default;
      }
    `}
`;

export const Td = styled.td<TableProps>`
  text-align: ${({ align }) => (align ? align : "left")};
  padding: 24px;
  ${({ $isDivider, theme }) =>
    $isDivider &&
    css`
      background-color: ${theme.colors.gray[30]};
      color: ${theme.colors.gray[400]};
      padding: 4px;
      height: 22px;
      font-size: 11px;
    `}
`;

export const TableGrid = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;

  @media screen and (max-width: 1140px) {
    ${TextValue} {
      display: flex;
      justify-content: flex-end;
      padding: 0;
    }
    ${RowButton} {
      /* margin-top: -50px; */ // TODO: ajustar no mobile
      display: none !important;
    }
    ${DeleteButton} {
      /* margin-top: -50px; */ // TODO: ajustar no mobile
      display: none !important;
    }
    thead tr {
      display: none;
    }
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]} !important;
      display: block;
      margin-bottom: 0.25em;
    }
    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 30px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
      /* display: block; */
      font-size: 16px;
      text-align: right;
      width: 100%;
      padding: 10px 16px;
    }
    td::before {
      content: attr(accessKey) !important;
      float: left;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .tr {
    display: flex;
    align-items: center;
  }
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const SpinnerContainer = styled.div<{ $padding?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $padding }) => ($padding ? $padding : "120px 24px")};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -32px;
  padding: 4px 0px;

  & > button {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
