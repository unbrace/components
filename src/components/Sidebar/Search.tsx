import * as React from 'react';
import { SearchWrapper } from './styles';
import { Search as SearchIcon } from '../icons';
import { HTMLProps } from 'react';

type Props = HTMLProps<HTMLInputElement>;

const Search: React.FC<Props> = (props: Props) => {
  return (
    <SearchWrapper align={'center'}>
      <SearchIcon />
      <input type="text" {...props} />
    </SearchWrapper>
  );
};

export default Search;
