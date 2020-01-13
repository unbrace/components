import { css } from 'styled-components';

export const media = {
  // eslint-disable-next-line
  desktop: (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (min-width: 1601px) {
        ${css(literals, ...placeholders)};
      }
    `,
  // eslint-disable-next-line
  laptopLG: (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (min-width: 1301px) and (max-width: 1600px) {
        ${css(literals, ...placeholders)};
      }
    `,
  // eslint-disable-next-line
  laptopSM: (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (min-width: 1025px) and (max-width: 1300px) {
        ${css(literals, ...placeholders)};
      }
    `,
  // eslint-disable-next-line
  mobile: (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (min-width: 320px) and (max-width: 767px) {
        ${css(literals, ...placeholders)};
      }
    `,
  // eslint-disable-next-line
  tablet: (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (min-width: 768px) and (max-width: 1024px) {
        ${css(literals, ...placeholders)};
      }
    `,
};
