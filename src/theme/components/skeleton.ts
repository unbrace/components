import { DefaultTheme } from '../index';

const getSkeletonTheme = (theme: DefaultTheme) => ({
  primaryColor: theme.palette.neutral.shade3,
  secondaryColor: theme.palette.neutral.shade1,
});

export default getSkeletonTheme;
