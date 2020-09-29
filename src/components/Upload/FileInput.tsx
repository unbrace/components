import * as React from 'react';
import { Input } from '../';

export type ConvertedFile = {
  base64: string;
  file: File | null;
  name: string;
};

type Props = {
  acceptedFileTypes?: string[];
  onChange?: (file: File) => void;
};

const FileInput: React.FunctionComponent<Props> = ({ acceptedFileTypes, onChange, ...props }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files && files.length > 0) {
      onChange?.(files[0]);
    }
  };

  return (
    <div className="input-wrapper">
      <Input
        {...props}
        name="input"
        placeholder=""
        type="file"
        noLabel
        onChange={handleFileChange}
        value={''}
        accept={acceptedFileTypes && acceptedFileTypes.join(', ')}
      />
    </div>
  );
};

export default FileInput;
