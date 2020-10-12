import * as React from 'react';
import { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { ThemeContext } from 'styled-components';

type Props = {
  height: number;
};

const duration = 250;

const defaultStyle = {
  fillOpacity: 0,
  transition: `fill-opacity ${duration}ms 100ms ease-in`,
};

const transitionStyles = {
  entered: { fillOpacity: 1 },
  entering: { fillOpacity: 0.05 },
  exited: { fillOpacity: 0 },
  exiting: { fillOpacity: 0 },
};

export const GlobalContentLoader: React.FunctionComponent<Props> = ({ height, ...other }: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Transition in timeout={duration} mountOnEnter appear>
      {(state: TransitionStatus) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <ContentLoader
            speed={2}
            primaryColor={themeContext.skeleton.primaryColor}
            secondaryColor={themeContext.skeleton.secondaryColor}
            height={height}
            {...other}
          />
        </div>
      )}
    </Transition>
  );
};

export default GlobalContentLoader;
