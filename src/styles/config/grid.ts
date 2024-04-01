import styled from 'styled-components'

interface GridProps {
  $minWidth?: string,
  $maxWidth?: string,
  $columnGap?: string,
  $rowGap?: string,
  $template?: string,
  $alignItems?: string,
  $customMedia?: string,
}

export const Grid = styled.div<GridProps>`
  display: grid;
  row-gap: ${({ $rowGap }) => $rowGap || '16px'};
  column-gap: ${({ $columnGap }) => $columnGap || '16px'};
  grid-template-columns: ${({ $template, $minWidth, $maxWidth }) =>
    $template
      ? $template
      : `repeat(auto-fill, minmax(${$minWidth || '200px'}, ${$maxWidth || '1fr'}))`};

  @media(max-width: ${({ $customMedia }) => $customMedia || '720px'}) {
    grid-template-columns: ${({ $template }) => $template && '1fr'};
  }
  align-items: ${({ $alignItems }) => $alignItems && $alignItems};
`;
