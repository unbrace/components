import styled, { css } from 'styled-components';

const Header = styled.header`
  ${({ theme: { appHeader } }) => css`
    background-color: ${appHeader.background};
    border-bottom: ${appHeader.borderBottom};
    height: ${appHeader.height};
    max-height: ${appHeader.height};
    padding: ${appHeader.padding};
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 99;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 0 0 auto;
    align-items: center;
  `}
`;

const LeftContent = styled.div`
  display: flex;
  justify-self: flex-start;
`;

const RightContent = styled.div`
  display: flex;
  justify-self: flex-end;
`;

export { Header, LeftContent, RightContent };
