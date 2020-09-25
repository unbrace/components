import * as React from 'react';
import styled, { css } from 'styled-components';
import { Label } from './Label';

type Props = {
  name: string;
} & Omit<React.HTMLProps<HTMLInputElement>, 'type'>;

const Toggle: React.FunctionComponent<Props> = ({ label, name, ...rest }: Props) => (
  <ToggleElement>
    {label && <Label>{label}</Label>}
    <div>
      <input type="checkbox" id={name} name={name} {...rest} />
      <Label htmlFor={name}></Label>
    </div>
  </ToggleElement>
);

const ToggleElement = styled.div`
  ${({ theme: { form } }) => css`
    position: relative;

    > div {
      margin: ${form.margin.main};

      > label {
        background: ${form.background.main};
        position: relative;
        width: ${form.width.toggle};
        height: ${form.height.toggle.outer};
        display: block;
        cursor: pointer;
        border-radius: ${form.borderRadius.toggle.outer};
        border: ${form.border.toggle.off};
        transition: border 0.1s 0.05s ease;

        &:before {
          position: absolute;
          content: '';
          height: ${form.height.toggle.inner};
          width: ${form.height.toggle.inner};
          background: ${form.background.toggle.off};
          border-radius: ${form.borderRadius.toggle.inner};
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.2s cubic-bezier(0.1, 1.06, 0.92, 0.93);
        }
      }

      > input {
        top: 0;
        left: 0;
        position: absolute;
        visibility: hidden;

        &:checked {
          + label {
            border: ${form.border.toggle.on};
            &:before {
              transform: translateY(-50%);
              left: calc(100% - (20px + 5px));
              background: ${form.background.toggle.on};
            }
          }
        }
      }
    }
  `}
`;

export default Toggle;
