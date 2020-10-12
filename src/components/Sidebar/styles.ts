import styled from 'styled-components';
import { Flexer } from '../Positioning';

export const SearchWrapper = styled(Flexer)`
  height: ${props => props.theme.header.height};
  padding: 10px;
  background-color: ${props => props.theme.sidebar.background.main};
  flex-shrink: 0;
  border-bottom: ${props => props.theme.sidebar.border.bottomSearch};
  color: ${props => props.theme.sidebar.color.searchWrap};
  position: sticky;
  top: 0;

  input {
    height: 2.1rem;
    background: transparent;
    font-size: ${props => props.theme.typography.fontSize.small_5};
    border: none;
    transition: width 0.3s ease-out;
    width: 200px;
    box-sizing: border-box;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${props => props.theme.sidebar.color.searchInput};
    font-family: inherit;

    &::placeholder {
      color: ${props => props.theme.form.color.input.placeholder};
    }
  }

  svg {
    transition: all 0.2s linear;
    margin-right: 10px;
    cursor: pointer;
    fill: ${props => props.theme.sidebar.fill.search};
    width: 21px;
    height: 21px;
  }
`;

export const CountWrapper = styled.span`
    position: fixed;
    top: calc(${props => props.theme.header.height} - ${props => props.theme.sidebar.countComponent.fontSize} + 1px);
    padding: 0px 8px;
    border-radius: ${props => props.theme.sidebar.border.radiusCount};
    margin-left: 7px;
    font-size: ${props => props.theme.sidebar.countComponent.fontSize};
    color: ${props => props.theme.sidebar.countComponent.color};
    background: ${props => props.theme.sidebar.countComponent.background};
    z-index: 2;
  }
`;
