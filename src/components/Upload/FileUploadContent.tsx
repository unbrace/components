import * as React from 'react';
import styled from 'styled-components';
import FileUploadIcon from './FileUploadIcon';

type Props = {
  fileName: string | null;
  noFileSelectedText: string;
};

const FileUploadContent: React.FC<Props> = ({ fileName, noFileSelectedText }: Props) => {
  return (
    <FileUploadContentWrapper>
      <FileUploadIcon />
      <div>
        <p>{fileName || noFileSelectedText}</p>
      </div>
    </FileUploadContentWrapper>
  );
};

const FileUploadContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 50px;

  svg {
    width: 100px;
    height: 100px;
    margin-right: 32px;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      text-align: center;
    }

    button {
      margin-top: 16px;
    }
  }
`;

export default FileUploadContent;
