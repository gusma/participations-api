import styled from 'styled-components';

export const FlexContainer = styled.div.attrs(() => ({
  className: 'flex-1',
}))``;

export const NoParticipationsContainer = styled.div.attrs(() => ({
  className: 'mt-5 text-center',
}))``;

export const NoParticipationsTitle = styled.h1.attrs(() => ({
  className: 'text-xxl',
}))``;

export const TableContainer = styled.table.attrs(() => ({
  className: 'table-auto text-left sm:text-center min-w-full sm:mb-0',
}))``;

export const THeadContainer = styled.thead.attrs(() => ({
  className: 'border-b md:py-5',
}))``;
