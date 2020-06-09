import styled from 'styled-components';
import { Flexer } from '../Positioning';

export const SearchWrapper = styled(Flexer)`
  height: ${props => props.theme.header.height};
  padding: 10px;
  background-color: ${props => props.theme.palette.neutral.shade0};
  flex-shrink: 0;
  border-bottom: solid 2px ${props => props.theme.palette.neutral.shade2};
  color: ${props => props.theme.palette.neutral.shade3};
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
    color: ${props => props.theme.palette.neutral.shade8};

    &::placeholder {
      color: ${props => props.theme.form.color.input.placeholder};
    }
  }

  svg {
    transition: all 0.2s linear;
    margin-right: 10px;
    cursor: pointer;
    fill: ${props => props.theme.palette.neutral.shade4};
    width: 21px;
    height: 21px;
  }
`;

export const CountWrapper = styled.span`
    position: fixed;
    top: ${props => props.theme.header.height};
    padding: 0px 8px;
    border-radius: ${props => props.theme.sidebar.border.radiusCount};
    margin-left: 7px;
    font-size: ${props => props.theme.sidebar.countComponent.fontSize};
    color: ${props => props.theme.sidebar.countComponent.color};
    background: ${props => props.theme.sidebar.countComponent.background};
    z-index: 2;
  }
`;
