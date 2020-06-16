import styled from 'styled-components';
import Flexer from '../Positioning/Flexer';

export const Dropzone = styled(Flexer)`
  border-radius: ${props => props.theme.upload.dropzone.border.radius};
  border-color: ${props => props.theme.upload.dropzone.border.color};
  border-style: dashed;
  border-width: ${props => props.theme.upload.dropzone.border.width};

  margin-top: ${props => props.theme.upload.dropzone.margin.top};
  margin-bottom: ${props => props.theme.upload.dropzone.margin.bottom};

  font-size: 90%;
  padding: 10px;
  position: relative;
  min-height: 200px;

  .input-wrapper {
    border-radius: ${props => props.theme.upload.dropzone.inputWrapper.borderRadius};
    height: 100%;
    padding: ${props => props.theme.upload.dropzone.inputWrapper.padding};
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
  border-radius: ${props => props.theme.upload.dropzoneWrapper.borderRadius};
  border: ${props => props.theme.upload.dropzoneWrapper.border};
  box-shadow: ${props => props.theme.upload.dropzoneWrapper.boxShadow};
  display: flex;
  flex-direction: row;
  margin: ${props => props.theme.upload.dropzoneWrapper.margin};
  p {
    color: ${props => props.theme.upload.dropzoneWrapper.text.color};
  }
`;
