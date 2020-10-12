import * as React from 'react';
import { CountWrapper } from './styles';

type Props = {
  listSize: number;
  totalItems: number;
  translations: {
    of: string;
  };
};

const Counter: React.FC<Props> = ({ listSize, totalItems, translations }: Props) => {
  return <CountWrapper>{`${listSize} ${translations.of} ${totalItems}`}</CountWrapper>;
};

export default Counter;
