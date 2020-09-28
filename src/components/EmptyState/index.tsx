import * as React from 'react';
import { Heading, Text } from '../Text';
import { Image, Wrapper, CallToActionFooter } from './styles';

type Props = {
  src?: string;
  title?: string;
  subTitle?: string;
  callToAction?: React.ReactNode;
};

const EmptyState: React.FunctionComponent<Props> = ({ src, title, subTitle, callToAction }: Props) => (
  <Wrapper>
    {src && <Image src={src} />}
    {title && (
      <Heading asTag="h2" size="m">
        {title}
      </Heading>
    )}
    {subTitle && (
      <Text colorLevel="medium" size="s">
        {subTitle}
      </Text>
    )}
    {callToAction && <CallToActionFooter>{callToAction}</CallToActionFooter>}
  </Wrapper>
);

export default EmptyState;
