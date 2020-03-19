import * as React from 'react';
import { Badge, CloseIcon, BadgeContent } from './styles';

export type Props = {
  color?: 'danger' | 'success' | 'warning' | 'primary' | 'secondary';
  isCapitalized?: boolean;
  onlyText?: boolean;
  size?: 'xsmall' | 'small' | 'large';
  onDelete?: () => void;
  children?: string | number | JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
};

const BadgeComponent: React.FC<Props> = ({ onDelete, children, ...props }: Props) => {
  return (
    <Badge {...props}>
      <BadgeContent isCapitalized={props.isCapitalized}>{children}</BadgeContent>
      {onDelete && <CloseIcon onClick={onDelete} color={props.color} size={props.size} />}
    </Badge>
  );
};

export default BadgeComponent;
