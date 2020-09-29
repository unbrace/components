import * as React from 'react';
import styled from 'styled-components';
import FileUploadIcon from './FileUploadIcon';
import { Flexer } from '../Positioning';

type Props = {
  fileName: string | null;
  noFileSelectedText: string;
  color?: 'primary' | 'secondary' | 'warning' | 'tertiary' | 'danger';
};

const FileUploadContent: React.FC<Props> = ({ fileName, noFileSelectedText, color }: Props) => {
  return (
    <FileUploadContentWrapper>
      <FileUploadIcon color={color} />
      <Flexer flex={1} direction="column" justify="center" align="center">
        <p>{fileName || noFileSelectedText}</p>
      </Flexer>
    </FileUploadContentWrapper>
  );
};

const FileUploadContentWrapper = styled(Flexer)`
  width: 100%;
  padding: ${props => props.theme.upload.fileUpload.padding};

  svg {
    width: 100px;
    height: 100px;
    margin-right: ${props => props.theme.upload.fileUpload.svgMarginRight};
  }

  > div {
    > p {
      text-align: center;
    }

    button {
      margin-top: ${props => props.theme.upload.fileUpload.buttonMarginTop};
    }
  }
`;

export default FileUploadContent;
