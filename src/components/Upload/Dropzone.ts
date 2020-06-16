import styled from 'styled-components';
import Flexer from '../Positioning/Flexer';

export const Dropzone = styled(Flexer)`
  border-radius: 3px;
  border-color: rgb(207, 212, 219);
  border-style: dashed;
  border-width: 2px;
  margin-top: 8px;

  font-size: 90%;
  padding: 10px;
  position: relative;
  margin-bottom: 2px;
  height: 200px;

  .input-wrapper {
    border-radius: 5px;
    height: 100%;
    padding: 0 10px 5px 0;
    position: absolute;
    width: 100%;
    z-index: 0;

    div {
      height: 100%;
      input {
        cursor: pointer;
        height: 100%;
        opacity: 0;
        width: 100%;
        margin: 0;
      }
    }
  }
`;

export const DropzoneWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.palette.neutral.shade3};
  box-shadow: ${props => props.theme.form.boxShadow.main};
  display: flex;
  flex-direction: row;
  margin: 10px 0 5px;
  p {
    color: ${props => props.theme.palette.neutral.shade8};
  }
`;
