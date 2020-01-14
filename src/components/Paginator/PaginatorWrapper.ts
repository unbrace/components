import styled from 'styled-components';
import { media } from '../../theme';

export const PaginatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .pageNumber {
    white-space: nowrap;
    margin-right: 10px;

    ${() => media.mobile`
        display: none;
    `};
  }
`;
