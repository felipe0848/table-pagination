/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

import isPropValid from "@emotion/is-prop-valid";
import { Pagination } from "semantic-ui-react";
import { StyleSheetManager } from "styled-components";
import  TrashIcon  from "../../assets/svg/trash";

import {
  Container,
  TextValue,
  PaginationCont,
  Th,
  TableGrid,
  RowButton,
  Td,
  Tr,
  Empty,
  SpinnerContainer,
  DeleteButton,
  Footer,
} from "./styles";

import Spinner from "../Spinner";

interface PaginationType {
  skip: number;
  limit: number;
  total: number;
}

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  header?: boolean;
  pagination?: boolean;
  onOpenRow?: (value: any) => void;
  rowButton?: string;
  clickRowButton?: (data?: any) => void;
  isLoading?: boolean;
  infiniteScroll?: boolean;
  dataPagination?: PaginationType;
  setPagination?: (value: PaginationType) => void;
  onClickHeader?: (data?: any) => void;
  deleteButton?: (data?: any) => void;
  buttonFooter?: string;
  onClickFooter?: (data?: any) => void;
}

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    alignText?: "right" | "center" | "left";
    alignHeader?: "right" | "center" | "left";
    width?: string;
  }
}
// TODO: ajustar paginação
export const Table = <T extends object>({
  data,
  columns,
  header = true,
  pagination = true,
  onOpenRow,
  rowButton,
  clickRowButton,
  isLoading,
  dataPagination,
  setPagination,
  onClickHeader,
  deleteButton,
  buttonFooter,
  onClickFooter,
}: ReactTableProps<T | any>) => {
  const [maxRows, setMaxRows] = useState(5);

  const getPageIndex = () => {
    if (dataPagination)
      return Math.floor(dataPagination.skip / dataPagination.limit) + 1;
    return 0;
  };
  const getPageCount = () => {
    if (dataPagination)
      return Math.ceil(dataPagination.total / dataPagination.limit);
    return 1;
  };
  const setIndexPage = (page: number) => {
    table.setPageIndex(page);
    if (setPagination && dataPagination)
      setPagination({ ...dataPagination, skip: page * dataPagination?.limit });
  };

  const table = useReactTable({
    manualPagination: !pagination,
    data,
    columns,
    initialState: { pagination: { pageSize: 10, pageIndex: 0 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Container>
        <TableGrid>
          {header && (
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="tr-header">
                  {headerGroup.headers.map((header) => {
                    const w = header.column.columnDef.meta?.width;
                    const size = header.getSize();
                    return (
                      <Th
                        align={header.column.columnDef.meta?.alignHeader}
                        key={header.id}
                        className="px-6 py-4 text-sm font-medium text-gray-900"
                        style={{ width: w ? w : "100%", minWidth: size }}
                        onClick={() => onClickHeader && onClickHeader(header)}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    );
                  })}
                </tr>
              ))}
            </thead>
          )}
          <tbody>
            {data &&
              !isLoading &&
              table.getRowModel().rows.map((row) => {
                return (
                  (pagination || (!pagination && row.index < maxRows + 1)) && (
                    <Tr key={row.id} $disabledRow={row.original?.disabled}>
                      {row.getVisibleCells().map((cell) => {
                        const isDivider = cell.row.original.id === "divider";
                        return (
                          <Td
                            accessKey={`${cell.column.columnDef.header}`}
                            onClick={() =>
                              onOpenRow && onOpenRow(cell.row.original)
                            }
                            key={cell.id}
                            align={cell.column.columnDef.meta?.alignHeader}
                            $isDivider={isDivider}
                          >
                            <TextValue className="container-status">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TextValue>
                            {rowButton && (
                              <RowButton
                                onClick={(e: any) => {
                                  e.stopPropagation();
                                  clickRowButton &&
                                    clickRowButton(cell.row.original);
                                }}
                              >
                                {rowButton}
                              </RowButton>
                            )}
                            {deleteButton && !isDivider && (
                              <DeleteButton
                                onClick={(e: any) => {
                                  e.stopPropagation();
                                  deleteButton(cell.row.original);
                                }}
                              >
                                <TrashIcon />
                              </DeleteButton>
                            )}
                          </Td>
                        );
                      })}
                    </Tr>
                  )
                );
              })}
          </tbody>
        </TableGrid>

        {!isLoading && (data?.length === 0 || !data) && (
          <Empty>Nenhum dado encontrado</Empty>
        )}
        {isLoading && (
          <SpinnerContainer>
            <Spinner size={50} />
          </SpinnerContainer>
        )}

        {pagination && data?.length > 0 && (
          <PaginationCont>
            {getPageCount() != 1 && (
              <Pagination
                className="custom-pagination"
                totalPages={getPageCount()}
                onPageChange={(_, data) =>
                  setIndexPage(Number(data?.activePage) - 1)
                }
                activePage={getPageIndex()}
                boundaryRange={1}
                firstItem={false}
                lastItem={false}
                nextItem={false}
                prevItem={false}
              />
            )}
          </PaginationCont>
        )}
        {buttonFooter && (
          <Footer>
            <button onClick={onClickFooter}>{buttonFooter}</button>
          </Footer>
        )}
      </Container>
    </StyleSheetManager>
  );
};
