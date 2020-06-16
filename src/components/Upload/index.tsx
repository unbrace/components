import * as React from 'react';
import { Dropzone } from './Dropzone';
import FileUploadContent from './FileUploadContent';
import FileInput from './FileInput';
import { ErrorText } from '../Form/ErrorText';

type Props = {
  fileName: string | null;
  noFileSelectedText: string;
  acceptedFileTypes?: string[];
  onChange?: (file: File) => void;
  error?: string;
};

const Upload: React.FC<Props> = ({ fileName, noFileSelectedText, acceptedFileTypes, onChange, error }: Props) => {
  return (
    <React.Fragment>
      <Dropzone direction="column" justify="center" align="center" flex={1}>
        <FileUploadContent fileName={fileName} noFileSelectedText={noFileSelectedText} />
        <FileInput acceptedFileTypes={acceptedFileTypes} onChange={onChange} />
      </Dropzone>
      {error && <ErrorText left>{error}</ErrorText>}
    </React.Fragment>
  );
};

export default Upload;
