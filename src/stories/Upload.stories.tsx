import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from '../components/Upload';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 0px;
  margin-bottom: 16px;
  padding: 10px;
`;

storiesOf('Upload', module).add(
  'default',
  () => {
    const [fileName, setFileName] = React.useState('');

    const onChange = (file: File) => {
      setFileName(file.name);
    };

    return (
      <React.Fragment>
        <Wrapper>
          <Upload
            fileName={fileName}
            noFileSelectedText="Drop your file here or click to browse"
            acceptedFileTypes={['.pdf']}
            onChange={onChange}
            color="primary"
          />
        </Wrapper>
        <Wrapper>
          <Upload
            fileName={fileName}
            noFileSelectedText="Drop your file here or click to browse"
            acceptedFileTypes={['.csv', '.pptx']}
            onChange={onChange}
            color="warning"
          />
        </Wrapper>
        <Wrapper>
          <Upload
            fileName={fileName}
            noFileSelectedText="Drop your file here or click to browse"
            acceptedFileTypes={['.csv', '.pptx']}
            onChange={onChange}
            color="danger"
          />
        </Wrapper>
        <Wrapper>
          <Upload
            fileName={fileName}
            noFileSelectedText="Drop your file here or click to browse"
            acceptedFileTypes={['.csv', '.pptx']}
            onChange={onChange}
            color="secondary"
          />
        </Wrapper>
        <Wrapper>
          <Upload
            fileName={fileName}
            noFileSelectedText="Drop your file here or click to browse"
            acceptedFileTypes={['.csv', '.pptx']}
            onChange={onChange}
            color="tertiary"
          />
        </Wrapper>
      </React.Fragment>
    );
  },
  {
    props: {
      propTables: [Upload],
      propTablesExclude: [Wrapper],
    },
  },
);
