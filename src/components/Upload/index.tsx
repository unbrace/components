import * as React from 'react';
import { Dropzone } from './Dropzone';
import FileUploadContent from './FileUploadContent';
import FileInput from './FileInput';
import { ErrorText } from '../Form/ErrorText';
import { Text } from '..';

type Props = {
  fileName: string | null;
  noFileSelectedText: string;
  acceptedFileTypes?: string[];
  onChange?: (file: File) => void;
  error?: string;
  color?: 'primary' | 'secondary' | 'warning' | 'tertiary' | 'danger';
  acceptedFilesText?: string;
};

const Upload: React.FC<Props> = ({
  fileName,
  noFileSelectedText,
  acceptedFileTypes,
  onChange,
  error,
  color,
  acceptedFilesText,
}: Props) => {
  return (
    <React.Fragment>
      <Dropzone direction="column" justify="center" align="center" flex={1}>
        <FileUploadContent fileName={fileName} noFileSelectedText={noFileSelectedText} color={color} />
        <FileInput acceptedFileTypes={acceptedFileTypes} onChange={onChange} />
      </Dropzone>
      {error && <ErrorText left>{error}</ErrorText>}
      {acceptedFileTypes && (
        <Text style={{ textAlign: 'right' }} size="xxs" colorLevel="medium">
          {`${acceptedFilesText ? acceptedFilesText : 'Accepts the following file types'}: ${acceptedFileTypes.join(
            ', ',
          )}`}
        </Text>
      )}
    </React.Fragment>
  );
};

export default Upload;
