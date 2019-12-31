import styled, { css } from 'styled-components';

type Props = {
  status?: 'danger' | 'success' | 'warning' | 'primary' | string;
};

const SuccessOrbStyle = css`
  background: ${props => props.theme.palette.success.shade4};
  border-color: ${props => props.theme.palette.success.shade1};
`;

const WarningOrbStyle = css`
  background: ${props => props.theme.palette.warning.shade4};
  border-color: ${props => props.theme.palette.warning.shade1};
`;

const DangerOrbStyle = css`
  background: ${props => props.theme.palette.danger.shade4};
  border-color: ${props => props.theme.palette.danger.shade1};
`;

const PrimaryOrbStyle = css`
  background: ${props => props.theme.palette.primary.shade4};
  border-color: ${props => props.theme.palette.primary.shade1};
`;

const DefaultOrbStyle = css`
  background: ${props => props.theme.palette.neutral.shade7};
  border-color: ${props => props.theme.palette.neutral.shade4};
`;

const Orb = styled('span')<Props>`
  border-radius: 50%;
  border: 4px solid;
  height: 18px;
  min-width: 18px;
  width: 18px;

  ${(props: Props) => {
    switch (props.status) {
      case 'success':
        return SuccessOrbStyle;
      case 'warning':
        return WarningOrbStyle;
      case 'danger':
        return DangerOrbStyle;
      case 'primary':
        return PrimaryOrbStyle;

      default:
        return DefaultOrbStyle;
    }
  }}
`;

export default Orb;
