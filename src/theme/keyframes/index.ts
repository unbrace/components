import { keyframes } from 'styled-components';

const animations = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }`,

  fadeInSubtle: keyframes`
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }`,

  flyIn: keyframes`
    0% {
      transform: translateY(-60px);
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }`,

  flyInMedium: keyframes`
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }`,

  flyInSubtle: keyframes`
    0% {
      transform: translateY(-3px);
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }`,

  rotation: keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(720deg);
    }
    `,
};

export { animations };
